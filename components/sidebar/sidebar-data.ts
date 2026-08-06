import { IconType } from "react-icons";
import {
    FiHome,
    FiPackage,
    FiHeart,
    FiInbox,
    FiClipboard,
    FiArchive,
    FiDollarSign,
    FiCalendar,
    FiCheckSquare,
    FiPhone,
    FiFileText,
    FiUsers,
} from "react-icons/fi";

export interface SidebarItemType {
    title: string;
    href: string;
    icon: IconType;
    badge?: string | number;
}

export const sidebarItems: SidebarItemType[] = [
    {
        title: "Dashboard",
        href: "/",
        icon: FiHome,
    },
    {
        title: "Products",
        href: "/products",
        icon: FiPackage,
    },
    {
        title: "Favorites",
        href: "/favorites",
        icon: FiHeart,
    },
    {
        title: "Inbox",
        href: "/inbox",
        icon: FiInbox,
        badge: 3,
    },
    {
        title: "Order List",
        href: "/order",
        icon: FiClipboard,
    },
    {
        title: "Product Stock",
        href: "/product-stock",
        icon: FiArchive,
    },
];

export const sidebarPages: SidebarItemType[] = [
    {
        title: "Pricing",
        href: "/price",
        icon: FiDollarSign,
    },
    {
        title: "Calendar",
        href: "/calendar",
        icon: FiCalendar,
    },
    {
        title: "To-do List",
        href: "/to-do",
        icon: FiCheckSquare,
    },
    {
        title: "Contact",
        href: "/contact",
        icon: FiPhone,
    },
    {
        title: "Invoice",
        href: "/invoice",
        icon: FiFileText,
    },
    {
        title: "Team",
        href: "/team",
        icon: FiUsers,
    },
];