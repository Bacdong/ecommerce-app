export class Room {
  public src: string;
  public name: string;

  constructor(src: string, name: string) {
    this.src = src;
    this.name = name;
  }
}

export class RoomList {
  public data: Room[];
  constructor(data: Room[]) {
    this.data = data;
  }
}

export const ROOMS: RoomList[] = [
  {
    data: [
      { src: "assets/images/rooms/1.jpg", name: "electic opulence" },
      { src: "assets/images/rooms/2.jpg", name: "dusky rose dining" },
      { src: "assets/images/rooms/3.jpg", name: "neutral tones" },
      { src: "assets/images/rooms/4.jpg", name: "malibu heights" },
      { src: "assets/images/rooms/5.jpg", name: "air of elegance" },
      { src: "assets/images/rooms/6.jpg", name: "townhouse" },
    ]
  },
  {
    data: [
      { src: "assets/images/rooms/7.jpg", name: "dining sophistication" },
      { src: "assets/images/rooms/8.jpg", name: "monochrome office" },
      { src: "assets/images/rooms/9.jpg", name: "milan salone" },
      { src: "assets/images/rooms/10.jpg", name: "mademoiselle bedroom" },
      { src: "assets/images/rooms/11.jpg", name: "spectacle behold" },
      { src: "assets/images/rooms/12.jpg", name: "bedroom suite" },
    ]
  }
  
];