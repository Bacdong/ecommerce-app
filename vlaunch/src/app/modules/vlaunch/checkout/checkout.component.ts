import { Component, OnInit } from '@angular/core';
import {TokenService} from '../../../core/services/token.service';
import {UserService} from '../user/user.service';
import {Result} from '../../../models/result';
import {Address, City, District, Ward} from '../../../models/user';
import {UserAddress} from '../../../models/user-address';
import {FormControl, FormGroup} from '@angular/forms';
import {Cart} from '../../../models/cart';
import {sum} from 'ng-zorro-antd/core/util';
import {CartService} from '../cart/cart.service';
import {CheckoutService} from './checkout.service';
import {SnackbarModifyService} from '../../../core/services/snackbar-modify.service';
import {Router} from '@angular/router';
import {StripeToken} from '../../../models/stripe-token';
import {BehaviorSubject} from 'rxjs';


@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  constructor(public tokenService: TokenService,
              private userService: UserService,
              private cartService: CartService,
              private checkoutService: CheckoutService,
              private snackbarModifyService: SnackbarModifyService,
              private router: Router,
  ) {

  }
  static paymentNotifySubject = new BehaviorSubject(null);
  static $paymentNotify = CheckoutComponent.paymentNotifySubject.asObservable();
  private handler: any;
  addressForm = new FormGroup({
    // userAddressId: new FormControl(''),
    name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    cityAddressId: new FormControl(''),
    districtAddressId: new FormControl(''),
    wardId: new FormControl(''),
    street_Address: new FormControl('')
  });
  addressList: UserAddress[] = [];
  addressSelected: UserAddress = new UserAddress();
  cityList: City[] = [];
  districtList: District[] = [];
  wardList: Ward[] = [];
  paymentMethodSelected = 0;
  cartList: Cart[] = [];

  private key = 'pk_test_51Hds9CDa9Wt0jMavaIgUpFqwPCcVq50HmzBk5j2maKvaiGnoaZXNxee668jIGqdEmSETbBgokFc84Sk4fWYvLZqQ00PQk8i2eK';
  ngOnInit(): void {
    this.loadStripe();
    this.userService.getUserAddress(this.tokenService.getUserId()).subscribe(res => {
      this.addressList = res.data;
      if (this.addressList.length !== 0){
        this.addressSelected = this.addressList[0];
        this.addressForm.patchValue({
          name: this.addressSelected.name,
          phone: this.addressSelected.phone,
          street_Address: this.addressSelected.street_Address
        });
      }
      this.userService.getAllCityModify().subscribe(city => {
       this.cityList = city.data;
       this.userService.getDistrictByCityIdModify(this.addressSelected.cityAddressId).subscribe(dis => {
         this.districtList = dis.data;
         this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(ward => {
           this.wardList = ward.data;
         });
       });
      });
    });
    this.cartService.getAllCartByUserId();
    this.cartService.$cart.subscribe(res => {
      this.cartList = res;
    });
    CheckoutComponent.$paymentNotify.subscribe(data => {
      this.checkoutService.createOrder(data).subscribe((res: Result) => {
        this.snackbarModifyService.openMessage(res, 'Đặt đơn hàng thành công');
        if (res){
          this.createOrderDetail(res.data.invoiceId);
          this.router.navigateByUrl('/user/order/detail/' + res.data.invoiceId);
        }});
    });
  }

  createOrder(): any {
    const data = this.addressForm.value;
    data.totalMoney = this.getTotalPrice();
    data.userId = this.tokenService.getUserId();
    console.log(data);
    if (this.paymentMethodSelected.toString() === '1'){
      data.isOnlinePayment = true;
      this.invokeOnlinePayment(data);
    }else {
      this.checkoutService.createOrder(data).subscribe((res: Result) => {
        this.snackbarModifyService.openMessage(res, 'Đặt đơn hàng thành công');
        if (res){
          this.createOrderDetail(res.data.invoiceId);
          this.router.navigateByUrl('/user/order/detail/' + res.data.invoiceId);
    }}); }
  }

  private invokeOnlinePayment(data: any): any {

    const handler = (window as any).StripeCheckout.configure({
      key: this.key,
      locale: 'auto',
      currency: 'VND',
      token(token: StripeToken): any {
        // You can access the token ID with `token.id`.
        // Get the token ID to your server-side code for use.
        console.log(token);
        alert('Thanh toán thành công!!');
        CheckoutComponent.paymentNotifySubject.next(data);
      },
    });

    handler.open({
      name: 'Thanh toán Stripe',
      description: 'Tổng:' + this.getSumCart(),
      amount: data.totalMoney,
    });
  }

  selectAddress(): any {

  }

  changeProvince(value: any): any {
    this.userService.getDistrictAndWardByCityId(value).subscribe(res => {
      this.addressSelected.cityAddressId = res.data.cityAddressId;
      this.addressSelected.districtAddressId = res.data.districtAddressId;
      this.addressSelected.wardId = res.data.id;
      console.log(res.data);
      this.userService.getDistrictByCityIdModify(this.addressSelected.cityAddressId).subscribe(dis => {
        this.districtList = dis.data;
        this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(ward => {
          this.wardList = ward.data;
        });
      });
    });
  }

  addVoucher(voucher: HTMLInputElement): any {

  }

  hasAddress(): any {
    return this.addressList !== [];
  }

  check(id: any): any {
    return this.addressSelected.id === id;
  }

  changeDistrict(value: any): any {
    this.userService.getWardByCityIdAndDistrictIdModify(this.addressSelected).subscribe(res => {
      this.wardList = res.data;
    });
  }

  changeOption(value: any): any {
    this.paymentMethodSelected = 1;
  }

  getSumCart(): any {
    let sumCart = 0;
    this.cartList.forEach((cart: Cart) => {
      sumCart += cart.amount;
    });
    return sumCart;
  }

  getTotalPrice(): any {
    let total = 0;
    this.cartList.forEach(x => {
      total +=  x.amount * x.book.price;
    });
    return total;
  }

  private createOrderDetail(invoiceId: any): any{
    const invoiceDetail = [];
    this.cartList.forEach(x => {
      invoiceDetail.push({
        quantity: x.amount,
        subTotal: x.amount * x.book.price,
        invoiceId,
        bookId: x.bookId,
      });
    });
    this.checkoutService.createOrderDetail(invoiceDetail).subscribe(res => {
      this.snackbarModifyService.openMessage(res);
    });
  }

  private loadStripe(): any {
    if (!window.document.getElementById('stripe-script')) {
      const s = window.document.createElement('script');
      s.id = 'stripe-script';
      s.type = 'text/javascript';
      s.src = 'https://checkout.stripe.com/checkout.js';
      s.onload = () => {
        this.handler = (window as any).StripeCheckout.configure({
          key: this.key,
          locale: 'auto',
          currency: 'VND',
          token(token: any): any {
            // You can access the token ID with `token.id`.
            // Get the token ID to your server-side code for use.
            console.log(token);
            alert('Payment Success!!');
          }
        });
      };
      window.document.body.appendChild(s);
    }
  }
}
