export interface DocsMenuSidenavItemInterface {
  text: string;
  url?: string;
  header?: boolean;
  tooltip?: string;
  children?: DocsMenuSidenavItemInterface[];
}
