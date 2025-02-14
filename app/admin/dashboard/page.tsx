"use client";

import { columns, Employee } from "@/components/admin/table/columns";
import { DataTable } from "@/components/admin/table/data-table";
import DialogForm from "@/components/forms/dialog-form/DialogForm";
import RaiseGrievanceForm from "@/components/forms/raise-grievance-form/RaiseGrievanceForm";
import Logo from "@/components/header/logo/Logo";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useEffect, useState } from "react";

async function getData(): Promise<Employee[]> {
    const data = Array(5).fill({
        refNo: "EMP003",
        location: "New York",
        description: "Delhi",
        lastUpdate: "2024-11-15",
    });

    return data.map((item, index) => ({
        ...item,
        serialNumber: index + 1,
    }));
}

async function active(): Promise<Employee[]> {
    const data = Array(50).fill({
        refNo: "EMP003",
        location: "New York",
        description: "UX ",
        lastUpdate: "2024-11-15",
    });
    return data.map((item, index) => ({
        ...item,
        serialNumber: index + 1,
    }));
}

async function closeTab(): Promise<Employee[]> {
    const data = Array(22).fill({
        refNo: "EMP003",
        location: "Chicago",
        description: "UX Designer",
        lastUpdate: "2024-11-15",
    });

    return data.map((item, index) => ({
        ...item,
        serialNumber: index + 1,
    }));
}

const DashboardPage = () => {
    const [tabData, setTabData] = useState<Employee[]>([]);
    const [activeTab, setActiveTab] = useState<string>("new");
    const [newCount, setNewCount] = useState<number>(0);
    const [activeCount, setActiveCount] = useState<number>(0);
    const [closedCount, setClosedCount] = useState<number>(0);

    useEffect(() => {
        const fetchData = async () => {
            const newData = await getData();
            setTabData(newData);
            setNewCount(newData.length);
        };
        fetchData();
    }, []);

    const handleTabChange = (tab: string) => {
        setActiveTab(tab);
        if (tab === "new") {
            getData().then((newData) => {
                setTabData(newData);
                setNewCount(newData.length);
            });
        } else if (tab === "active") {
            active().then((activeData) => {
                setTabData(activeData);
                setActiveCount(activeData.length);
            });
        } else if (tab === "closed") {
            closeTab().then((closedData) => {
                setTabData(closedData);
                setClosedCount(closedData.length);
            });
        }
    };

    return (
        <div className="px-4 py-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 container mx-auto">
            <Tabs value={activeTab} onValueChange={handleTabChange}>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <TabsList className="flex flex-wrap gap-2 mb-4 sm:mb-0 sm:flex-row sm:gap-4">
                        <TabsTrigger
                            value="new"
                            className="w-full sm:w-auto px-6"
                        >
                            New
                            <Badge className="ml-1 rounded-full">
                                {newCount}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger
                            value="active"
                            className="w-full sm:w-auto px-6"
                        >
                            Active
                            <Badge className="ml-1 rounded-full">
                                {activeCount}
                            </Badge>
                        </TabsTrigger>
                        <TabsTrigger
                            value="closed"
                            className="w-full sm:w-auto px-6"
                        >
                            Closed
                            <Badge className="ml-1 rounded-full">
                                {closedCount}
                            </Badge>
                        </TabsTrigger>
                    </TabsList>

                    <div className="sm:mt-4 lg:mt-0 w-full sm:w-auto mt-20">
                        <DialogForm
                            title="SANTUSHT"
                            description="Your well-being is our priority."
                            formComponent={<RaiseGrievanceForm />}
                            buttonLabel="Raise Grievance"
                            logo={<Logo />}
                            location="All India Institute Of Medical Sciences, Ansari Nagar New Delhi"
                        />
                    </div>
                </div>

                <TabsContent value="new">
                    <DataTable columns={columns} data={tabData} />
                </TabsContent>
                <TabsContent value="active">
                    <DataTable columns={columns} data={tabData} />
                </TabsContent>
                <TabsContent value="closed">
                    <DataTable columns={columns} data={tabData} />
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default DashboardPage;
