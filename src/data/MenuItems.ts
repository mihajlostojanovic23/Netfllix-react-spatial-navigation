import Home from '../assets/img/Home.svg';
import Login from '../assets/img/Login.svg';
import Settings from '../assets/img/Settings.svg';
import Search from '../assets/img/Search.svg';

export interface IMenuItems {
  label: string;
  image: string;
  id: number;
}

enum Label {
  HOME = '',
  SETTINGS = 'settings',
  LOGIN = 'login',
  SEARCH = 'search',
}

export const MenuItems: IMenuItems[] = [
  { id: 1, label: Label.HOME, image: Home },
  { id: 2, label: Label.SEARCH, image: Search },
  { id: 3, label: Label.SETTINGS, image: Settings },
  { id: 4, label: Label.LOGIN, image: Login },
];
