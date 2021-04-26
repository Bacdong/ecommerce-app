import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { SeoService } from '../../BookStoreClient/vlaunch/src/app/core/services/seo.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private route: Router, private seoService: SeoService) {}

  pageData = {
    profile: { name: 'Thông tin cá nhân', link: '/user/profile' },
    password: { name: 'Đổi mật khẩu', link: '/user/password' },
    order: { name: 'Đơn hàng', link: '/user/order' },
    address: { name: 'Sổ địa chỉ', link: '/user/address' },
  };

  breadcrumbData = [];

  ngOnDestroy(): void {
    this.userRouteSub.unsubscribe();
  }

  openMenu = false;
  private userRouteSub = Subscription.EMPTY;

  ngOnInit(): void {
    this.userRouteSub = this.route.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.setBreadcrumb(window.location.pathname);
      }
    });

    this.setBreadcrumb(window.location.pathname);
    this.seoService.init();
  }

  setBreadcrumb(path) {
    let arrayPath = path.split('/');
    this.breadcrumbData = [this.pageData[arrayPath[2]]];
  }
}
