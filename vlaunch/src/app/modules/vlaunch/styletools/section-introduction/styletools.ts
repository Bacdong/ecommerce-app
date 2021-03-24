export class StyleTool {
  public icon: string;
  public name: string;
  public url: string;

  constructor(icon: string, name: string, url: string) {
    this.icon = icon;
    this.name = name;
    this.url = url;
  }
}

export const STYLETOOLS: StyleTool[] = [
  { icon: "attach_file", name: "style", url: "/file" },
  { icon: "linked_camera", name: "floor", url: "/camera" },
  { icon: "dashboard", name: "wall", url: "/dashboard" },
  { icon: "connect_without_contact", name: "project", url: "/contact" },
];