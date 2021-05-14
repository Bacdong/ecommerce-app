import { Navigation } from './navigation';

export interface MegaMenu {
  title: string;
  megaMenu: Navigation[];
}

export interface SubMenu {
  navigation: Navigation;
  megaMenu?: MegaMenu[];
}

export const SUBMENUS: SubMenu[] = [
  {
    navigation: { url: 'products/seating', name: 'Lịch sử' },
    megaMenu: [
      {
        title: 'tablet',
        megaMenu: [],
      },
      {
        title: 'chairs',
        megaMenu: [],
      }
    ],
  },
  {
    navigation: { url: 'products/table', name: 'Văn học' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/cabinets', name: 'Kỹ năng sống' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/bedroom', name: 'Tuổi teen' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/mirrors', name: 'Danh mục khác' },
    megaMenu: [],
  },
];
