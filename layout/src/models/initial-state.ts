export interface MenuItem {
  code: string;
  parent: string;
  icon: string | null;
  path: string;
  name: string;
}

export interface InitialState {
  routes: MenuItem[];
}
