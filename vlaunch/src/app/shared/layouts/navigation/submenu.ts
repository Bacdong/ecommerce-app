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
    navigation: { url: 'products/lichsu', name: 'Lịch sử' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/vanhoc', name: 'Văn học' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/kynangsong', name: 'Kỹ năng sống' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/tuoiteen', name: 'Tuổi teen' },
    megaMenu: [],
  },
  {
    navigation: { url: 'products/more', name: 'Danh mục khác' },
    megaMenu: [],
  },
];
