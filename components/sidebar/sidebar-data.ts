import { title } from "process";

export interface SidebarItemType {
    title: string;
    href: string;
}

export const sidebarItems: SidebarItemType[] = [
    {
        title: "Dashboard",
        href: "/",
    },
    {
        title: "Products",
        href: "/products",
    },
    {
        title: "Favorites",
        href: "/favorites",
    },
    {
        title: "Inbox",
        href: "/inbox",
    },
    {
        title: "Order List",
        href: "/order",
    },
    {
        title: "Product Stock",
        href: "/product-stock",
    },
];


export const sidebarPages: SidebarItemType[] = [
    {
        title: "Pricing",
        href: "/price",
    },
    {
        title: "Calendar",
        href: "/calendar",
    },
    {
        title: "To-do-list",
        href: "/to-do",
    },
    {
        title: "Contact",
        href: "/contact",
    },
    {
        title: "Invoice",
        href: "/invoice",
    },
    {
        title: "Team",
        href: "/team",
    }
]