export class Cart{
  id: number;
  userId: number;
  bookId: number;
  book: {
    id: number;
    bookName: string;
    price: number;
    quantity: number;
    publicationDate: string;
    description: string;
    mainImage: string;
    private: boolean;
    categoryId: number;
    category: any;
    authorId: number;
    author: any;
    bookImage: any;
    comments: any;
    invoiceDetails: any
  };
  amount: number;
}
