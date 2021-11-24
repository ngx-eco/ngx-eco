// App
import {DocsMenuSidenavInterface} from "../interfaces/docs-menu-sidenav.interface";



export const docsMenuSidenavConfig: DocsMenuSidenavInterface = [
  {
    text: 'Components',
    header: true,
  },
  {
    text: 'Button',
    url: '/docs/button',
    children: [
      {
        text: 'Base',
        url: '/docs/button/base',
      },
    ],
  },
]
