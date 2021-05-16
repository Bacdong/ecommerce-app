export class Navigation {
  public url: string;
  public name: string;

  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }
}

export const NAVIGATIONS: Navigation[] = [
  { url: '/products', name: 'Sản phẩm' },
  { url: '/project', name: 'Dự án' },
  { url: '/styletools', name: 'Cài đặt' },
  { url: '/brand', name: 'Thương hiệu' },
  { url: '/ideas', name: 'Ý tưởng' },
];
