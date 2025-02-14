import { DataTable } from "@/components/admin/table/data-table";
import { UserTableColumns } from "@/components/admin/user-management/user-table/UserTableColumns";
import BuildingMasterForm from "@/components/forms/building-master-form/BuildingMasterForm";
import DialogForm from "@/components/forms/dialog-form/DialogForm";
import Logo from "@/components/header/logo/Logo";
import React from "react";

const sampleData = Array(22).fill({
    serialNumber: 1,
    status: "Active",
    role: "Admin",
    fullName: "John Doe",
    description: "Handles system operations",
    mobile: 9876543210,
    action: undefined,
});

const UserManagementPage: React.FC = () => {
    return (
        <div className="px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                    {/* Left Side Buttons */}
                    <div className="flex flex-col sm:flex-row sm:space-x-2 w-full gap-4">
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<BuildingMasterForm />}
                            buttonLabel="Building Master Form"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />

                        {/* Category Master */}
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<BuildingMasterForm />}
                            buttonLabel="Building Master Form"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />

                        {/* Designation Master */}
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<BuildingMasterForm />}
                            buttonLabel="Building Master Form"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />
                    </div>

                    {/* Right Side Buttons */}
                    <div className="flex flex-col sm:flex-row sm:space-x-2 w-full gap-4">
                        {/* lock/unlock user */}
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<BuildingMasterForm />}
                            buttonLabel="Building Master Form"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />

                        {/* add new Staff */}
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<BuildingMasterForm />}
                            buttonLabel="Building Master Form"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />
                    </div>
                </div>

                <DataTable columns={UserTableColumns} data={sampleData} />
            </div>
        </div>
    );
};

export default UserManagementPage;
