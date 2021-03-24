export class Idea {
  public src: string;
  public name: string;
  public author: string;
  public brief: string; 

  constructor(src: string, name: string, author: string, brief: string) {
    this.src =src;
    this.name = name;
    this.author = author;
    this.brief = brief;
  }
}