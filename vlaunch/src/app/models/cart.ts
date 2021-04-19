export class Book {
  id: number;
  bookName: string;
  price: number;
  quantity: number;
  publicationDate: string;
  description: string;
  mainImage: string;
  private: boolean;

  constructor() {
  }

  categoryId: number;
  category: any;
  authorId: number;
  author: any;
  bookImage: any;
  comments: any;
  invoiceDetails: any;
}

export class Cart{
  id: number;
  userId: number;
  bookId: number;
  book: Book;
  amount: number;

  constructor() {
    this.book = new Book();
  }
}
