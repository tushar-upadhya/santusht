"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Edit, Eye, KeyRound, Trash } from "lucide-react";
import React from "react";

export type Employee = {
    serialNumber: number;
    status: string;
    role: string;
    fullName: string;
    description: string;
    mobile: number;
    action?: React.ReactNode;
};

export const UserTableColumns: ColumnDef<Employee>[] = [
    {
        accessorKey: "serialNumber",
        header: () => <div className="text-left">S.No</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.index + 1}
            </div>
        ),
    },
    {
        accessorKey: "fullName",
        header: () => <div className="text-left">Full Name</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.getValue("fullName")}
            </div>
        ),
    },
    {
        accessorKey: "role",
        header: () => <div className="text-left">Role</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.getValue("role")}
            </div>
        ),
    },
    {
        accessorKey: "status",
        header: () => <div className="text-left">Status</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.getValue("status")}
            </div>
        ),
    },
    {
        accessorKey: "description",
        header: () => <div className="text-left">Description</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.getValue("description")}
            </div>
        ),
    },
    {
        accessorKey: "mobile",
        header: () => <div className="text-left">Mobile</div>,
        cell: ({ row }) => (
            <div className="text-left text-[min(4vw,1rem)] leading-relaxed truncate">
                {row.getValue("mobile")}
            </div>
        ),
    },
    {
        accessorKey: "action",
        header: () => <div className="text-left">Action</div>,
        cell: ({ row }) => (
            <div className="flex items-center gap-2">
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleView(row.original)}
                    className="border-none text-gray-900 dark:text-white dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                    <Eye className="w-4 h-4" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleEdit(row.original)}
                    className="border-none text-gray-900 dark:text-white dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                    <Edit className="w-4 h-4" />
                </Button>
                <Button
                    size="icon"
                    variant="destructive"
                    onClick={() => handleDelete(row.original)}
                    className="border-none  dark:text-red-500 dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                    <Trash className="w-4 h-4" />
                </Button>
                <Button
                    size="icon"
                    variant="outline"
                    onClick={() => handleResetPassword(row.original)}
                    className="border-none text-gray-900 dark:text-white dark:bg-gray-800 hover:dark:bg-gray-700"
                >
                    <KeyRound className="w-4 h-4" />
                </Button>
            </div>
        ),
    },
    {
        id: "select",
        header: ({ table }) => (
            <Checkbox
                checked={
                    table.getIsAllPageRowsSelected() ||
                    (table.getIsSomePageRowsSelected() && "indeterminate")
                }
                onCheckedChange={(value) =>
                    table.toggleAllPageRowsSelected(!!value)
                }
                aria-label="Select all"
            />
        ),
        cell: ({ row }) => (
            <Checkbox
                checked={row.getIsSelected()}
                onCheckedChange={(value) => row.toggleSelected(!!value)}
                aria-label="Select row"
            />
        ),
        enableSorting: false,
        enableHiding: false,
    },
];

const handleView = (employee: Employee) => {
    console.log("Viewing details of:", employee);
};

const handleEdit = (employee: Employee) => {
    console.log("Editing:", employee);
};

const handleDelete = (employee: Employee) => {
    console.log("Deleting:", employee);
};

const handleResetPassword = (employee: Employee) => {
    console.log("Resetting password for:", employee);
};
