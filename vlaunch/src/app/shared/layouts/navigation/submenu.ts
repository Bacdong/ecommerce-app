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
    navigation: { url: 'products/seating', name: 'seating' },
    megaMenu: [
      {
        title: 'tablet',
        megaMenu: [
          { url: 'products/seating/sectionals', name: 'sectionals' },
          { url: 'products/seating/sofas', name: 'sofas' },
          { url: 'products/seating/chaise', name: 'chaise' },
          { url: 'products/seating/palatial-chairs', name: 'palatial chairs' },
          { url: 'products/seating/sectionals', name: 'sectionals' },
          { url: 'products/seating/palatial-chairs', name: 'palatial chairs' },
        ],
      },
      {
        title: 'chairs',
        megaMenu: [
          { url: 'products/seating/sectionals', name: 'sectionals' },
          { url: 'products/seating/sofas', name: 'sofas' },
          { url: 'products/seating/chaise', name: 'chaise' },
          { url: 'products/seating/palatial-chairs', name: 'palatial chairs' },
        ],
      }
    ],
  },
  {
    navigation: { url: 'products/table', name: 'table' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/cabinets', name: 'cabinets' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/bedroom', name: 'bedroom' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/mirrors', name: 'mirrors' },
    megaMenu: [],
  },
];
