export class Product {
  public name: string;
  public type: string;
  public price: number;
  public src: string;

  constructor(
    name: string,
    type: string,
    price: number,
    src: string,
  ) {
    this.name = name;
    this.type = type;
    this.price = price;
    this.src = src;
  }
}