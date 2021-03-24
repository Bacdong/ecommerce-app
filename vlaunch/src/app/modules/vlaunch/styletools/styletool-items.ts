export class StyletoolItems {
  public title: string;
  public subtitle: string;
  public contentTitle: string;
  public contentBrief?;
  public contentBriefList?;
  public image: string;
  public classAdd?: string;

  constructor(
    title: string,
    subtitle: string,
    contentTile: string,
    contentBrief: string,
    image: string,
    classAdd: string,
  ) {
    this.title = title;
    this.subtitle = subtitle;
    this.contentTitle = contentTile;
    this.contentBrief = contentBrief;
    this.image = image;
    this.classAdd = classAdd;
  }
}

export const STYLETOOL_ITEMS: StyletoolItems[] = [
  {
    title: "style",
    subtitle: "Great ideas always start with a plan",
    contentTitle: "unleash your imagination",
    contentBrief: [
      "stylePlan is your personal Free-to-use mood board, offering instant access to:"
    ],
    contentBriefList: [
      "view products in a variety of perspectives.",
      "tailor the full range of fabrics onto upholstery pieces.",
      "import third party products from the web or desktop.",
      "add text from a huge range of integrated fonts, or paste any language.",
      "full range of CG fabrics, finishes and marble swatches. Choose 000's of colors from the worlds leading paint brands.",
      "select from the entire range of Pantone colors.",
      "crop, Duplicate, Erase, Shadow, Clone Stamp, Magic Wand, Type, Print, email or share online."
    ],
    image: "assets/images/styletools/style-plan/decor-bg.jpg",
  },
  {
    title: "floor",
    subtitle: "Space Planning as Easy as 1, 2, 3...",
    contentTitle: "create, organize, present and share",
    contentBrief: [
      "floorPlan is the new tool for interior designers, Stylists and Design Enthusiast to create to-scale FloorPlans.",
      "with multiple elevation views to enhance presentation experience; build walls, floors, windows and doors, all whilst laying out the space with products form the CG lifestyle collection."
    ],
    image: "assets/images/styletools/floor-plan/decor-bg.jpg",
    classAdd: "row-reverse",
  },
  {
    title: "wall",
    subtitle: "",
    contentTitle: "elevate your vision",
    contentBrief: [
      "start your interior design project by gathering ideas to create your own mood board with access to entire CG catalog and many powerful features."
    ],
    image: "assets/images/styletools/wall-plan/decor-bg.png"
  },
  {
    title: "project",
    subtitle: "Your Orders and Project Management in one Convenient Place...",
    contentTitle: "organize your imagination",
    contentBrief: [
      "projectPlan is your information hub to all the products, assets, files and orders for your interior projects. It simplifies workflows and keeps your projects organized. Homeowners and Professionals alike can share projects with family, friends or clients, then order with ease!"
    ],
    image: "assets/images/styletools/project-plan/decor-bg.jpg",
    classAdd: "row-reverse"
  }
];