export interface User {
  id: number;
  fio: string;
  picture: string;
  info: string;
  goods: Goods[];
}

export interface Goods {
  name: string;
  opened: boolean;
  items: Good[];
}

export interface Good {
  selected?: boolean;
  name: string;
  photo: string;
  link: string;
  cost: number | string;
  description: string;
}
