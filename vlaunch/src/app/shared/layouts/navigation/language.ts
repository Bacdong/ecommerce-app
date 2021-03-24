export class Language {
  public src: string;
  public name: string;

  constructor(src: string, name: string) {
    this.src = src;
    this.name = name;
  }
}

export const LANGUAGES: Language[] = [
  { 
    src: "assets/images/flags/flag-en-gb.png", 
    name: "english (gb)",
  },
  { 
    src: "assets/images/flags/flag-en.png", 
    name: "english",
  },
  { 
    src: "assets/images/flags/flag-zh-Hans.png", 
    name: "chinese", 
  },
  { 
    src: "assets/images/flags/flag-es.png", 
    name: "spanish", 
  },
];