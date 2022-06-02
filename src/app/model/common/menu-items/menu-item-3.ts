import {MenuItem} from "primeng/api";

export function MenuItem3(): MenuItem {
  return {
    label: "menu-3.title",
    visible: true,
    icon: "pi pi-fw pi-user",
    styleClass: "top-menu",
    routerLink: "/menu-3",
    items: [
      {
        label: "menu-3.sub-menu.sub-1",
        icon: "pi pi-fw pi-book",
        styleClass: "sub-menu",
        routerLink: "/menu-3/sub-1"
      },
      {
        label: "menu-3.sub-menu.sub-2",
        icon: "pi pi-fw pi-chart-bar",
        styleClass: "sub-menu",
        routerLink: "/menu-3/sub-2"
      },
      {
        label: "menu-3.sub-menu.sub-3",
        icon: "pi pi-fw pi-map",
        styleClass: "sub-menu",
        routerLink: "/menu-3/sub-3"
      }
    ]
  }
}
