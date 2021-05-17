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
  { url: '/project', name: 'Sách sắp về' },
  { url: '/styletools', name: 'Cài đặt' },
  { url: '/products', name: 'Nhà xuất bản' },
  { url: '/products', name: 'Ý tưởng' },
];
