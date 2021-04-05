import { Author } from "./author";
import { Category } from "./category";
import { Image } from "./image";

export class Product {
  public id: number;
  public bookName: string;
  public price: number;
  public quantity: number;
  public publicationDate;
  public description: string;
  public mainImage: string;
  public private: boolean;
  public categoryId: number;
  public category: Category;
  public authorId: number;
  public author: Author;
  public bookImage: Image[];
  public comment;
  public invoiceDetails;

  constructor(bookName: string, price: number) {
    this.bookName = bookName;
    this.price = price;
  }
}