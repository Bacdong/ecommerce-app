import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Invoice} from '../../../models/invoice';
import {OrderService} from './order.service';
import {Result} from '../../../models/result';
import {SnackbarModifyService} from '../../../core/services/snackbar-modify.service';

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'progress',
    'color',
    'payment-status',
    'payment-method',
    'action',
  ];
  dataSource: MatTableDataSource<Invoice>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  private invoiceList: Invoice[] = [];
  orderDetailLink = '/user/order/detail/';

  constructor(private orderService: OrderService, private snackbarModifyService: SnackbarModifyService) {
    // Assign the data to the data source for the table to render
    this.orderService.getInvoideByUserId();
    this.orderService.$invoice.subscribe(res => {
      this.invoiceList = res;
      console.log(res);
      this.dataSource = new MatTableDataSource(this.invoiceList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
  }

  ngOnInit(): void {
  }

  changePage($event: number): any {

  }

  applyFilter(event: Event): any {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngAfterViewInit(): void {
  }

  cancelInvoice(id): any{
    this.orderService.cancelInvoice(id).subscribe(res => {
      this.invoiceList = res.data;
      console.log(this.invoiceList);
      this.dataSource = new MatTableDataSource(this.invoiceList);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      this.snackbarModifyService.openMessage(res, 'Đã hủy đơn hàng ' + id);
    });
  }
}
