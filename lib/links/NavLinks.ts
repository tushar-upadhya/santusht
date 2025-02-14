import { NavLink } from "../types/navtype";

export const userLinks: NavLink[] = [
    { name: "Home", path: "/" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/sign-in" },
];

// Admin Panel Links
export const adminLinks: NavLink[] = [
    { name: "Dashboard", path: "/admin" },
    { name: "User Management", path: "/admin/user-management" },
    { name: "QR Codes", path: "/admin/qr" },
    { name: "Reports", path: "/admin/reports" },
    { name: "Logout", path: "/sign-out" },
];
