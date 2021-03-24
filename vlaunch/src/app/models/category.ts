export class Category {
  public id: number;
  public categoryName: string;
  public books;

  constructor(id: number, categoryName: string, books) {
    this.id = id;
    this.categoryName = categoryName;
    this.books = books;
  }
}