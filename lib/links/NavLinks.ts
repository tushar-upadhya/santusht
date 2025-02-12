import { NavLink } from "../types/navtype";

export const links: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/sign-in" },
];

export const adminLinks: NavLink[] = [
    { name: "Admin", path: "/admin" },
    { name: "User Management", path: "/admin/user-management" },
    { name: "Logout", path: "/sign-out" },
];
