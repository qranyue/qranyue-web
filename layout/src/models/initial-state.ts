export interface MenuItem {
  code: string;
  parent: string;
  icon: string | null;
  path: string;
  name: string;
}

export type MenuMap = Record<string, MenuItem[]>;

export interface InitialState {
  routes: MenuItem[];
  routeMap: MenuMap;
}
