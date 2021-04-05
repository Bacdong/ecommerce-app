export class Image {
  public id: number;
  public image1: string;
  public image2: string;
  public image3: string;
  public image4: string;
  public bookId: number;

  constructor(
    id: number,
    image1: string,
    image2: string,
    image3: string,
    image4: string,
    bookId: number,
  ) {
    this.id = id;
    this.image1 = image1;
    this.image2 = image2;
    this.image3 = image3;
    this.image4 = image4;
    this.bookId = bookId;
  }
}