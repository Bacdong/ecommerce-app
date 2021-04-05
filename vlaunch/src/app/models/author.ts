export class Author {
  public id: number;
  public authorName: string;
  public books;

  constructor(id: number, authorName: string, books) {
    this.id = id;
    this.authorName = authorName;
    this.books = books;
  }
}