export interface Image {
  src: string;
}

export class CategoryBannerItem {
  public images: Image[];
  public name: string;

  constructor(images: Image[], name: string) {
    this.images = images;
    this.name = name;
  }
}