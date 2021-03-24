export interface Category {
  path: string;
  name: string;
}

export class FooterCategory {
  public title: string;
  public categories: Category[];
}