// Menu Data Configuration
// This file contains the navigation structure for the sidebar menu

import {
  faHouse,
  faCompass,
  faBarcode,
  faBox,
  faClock,
  faHeart,
  faAward,
  faGear,
  faHeadphones,
  faRightFromBracket
} from '@fortawesome/free-solid-svg-icons';

export interface MenuItem {
  name: string;
  icon: any;
  path?: string;
}

export interface MenuSection {
  label: string;
  items: MenuItem[];
}

export const menuData: MenuSection[] = [
  {
    label: 'Menu',
    items: [
      { name: 'Home', icon: faHouse, path: '/' },
      { name: 'Discover', icon: faCompass, path: '/discover' },
      { name: 'Coming soon', icon: faBarcode, path: '/coming-soon' },
      // { name: 'Watch later', icon: faBox, path: '/watch-later' },
      // { name: 'History', icon: faClock, path: '/history' },
    //   { name: 'Liked', icon: faHeart, path: '/liked' },
      { name: 'Top rated', icon: faAward, path: '/top-rated' },
      { name: 'Settings', icon: faGear, path: '/settings' },
      { name: 'Help center', icon: faHeadphones, path: '/help' }
    ]
    }
]

