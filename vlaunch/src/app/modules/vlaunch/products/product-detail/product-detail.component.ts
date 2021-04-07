import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Subscription } from 'rxjs';
import { reverseString } from 'src/app/core/utils';
import { environment } from 'src/environments/environment';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

  constructor(private productsService: ProductsService, private router: Router) {
  }
  product: any;
  pathImg = environment.IMAGE_PATH;
  subscription = new Subscription();

  models = [
    { value: '60-0449', name: 'W454 X D253 X H80 CM' },
    { value: '60-0450', name: 'W390 X D171 X H80 CM' },
    { value: '60-0530', name: 'W554 X D145 X H90 CM' },
    { value: '60-0532', name: 'W390 X D171 X H90 CM' },
  ];

  selectedModel = this.models[0].value;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 500,
    responsive: {
      0: { items: 1 },
      400: { items: 1 },
      740: { items: 1 },
      940: { items: 1 }
    },
    nav: false
  };

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    this.subscription.add(
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.reloadCurrentRoute();
        }
      })
    );

    const url = this.router.url;
    const id = this.extractUrl(url);
    if (!id) { return; }

    this.productsService.getProductDetail(id);
    this.subscription.add(
      this.productsService.product$.subscribe((product) => {
        this.product = product;
        console.log(this.product);
      })
    );
  }

  private extractUrl(url): any {
    if (reverseString(url).indexOf('?') > 0) {
      const index = reverseString(url).indexOf('?');
      url = reverseString(reverseString(url).slice(index + 1));
    }

    const arr = url.split('-');
    const code = arr[arr.length - 1];
    return this.getID(code);
  }

  private getID(code): any {
    const arrCode = code.split('');
    let type = '';
    let id = '';

    for (let i = 0; i < arrCode.length; ++i) {
      const value = arrCode[i] * 1;
      if (!Number.isInteger(value)) {
        type += arrCode[i];
      } else {
        id += arrCode[i];
      }
    }

    if (type.length === 0 || id.length === 0) {
      this.router.navigate(['404']);
      return null;
    }

    return id;
  }

  reloadCurrentRoute(): any {
    const currentUrl = this.router.url;
    this.router.navigateByUrl('/', { skipLocationChange: true }).then(() => {
      this.router.navigate([currentUrl]);
    });
  }
}
