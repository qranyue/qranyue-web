export interface MenuItem {
  id: string;
  parent: string;
  icon: string;
  path: string;
  name: string;
  sort: number;
}

export type MenuUrls = Partial<Record<string, string>>;

export type MenuObj = Partial<Record<string, MenuItem>>;

export type MenuMap = Partial<Record<string, MenuItem[]>>;

export interface InitialState {
  routes: MenuUrls;
  menu: MenuObj;
  menuMap: MenuMap;
}
