export class Navigation {
  public url: string;
  public name: string;

  constructor(url: string, name: string) {
    this.url = url;
    this.name = name;
  }
}

export const NAVIGATIONS: Navigation[] = [
  { url: "/products", name: "products" },
  { url: "/project", name: "project" },
  { url: "/styletools", name: "styletools" },
  { url: "/brand", name: "brand" },
  { url: "/ideas", name: "ideas" },
];