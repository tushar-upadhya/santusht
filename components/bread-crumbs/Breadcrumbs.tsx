import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { usePathname } from "next/navigation";
import React from "react";

interface BreadcrumbsProps {}

export default function Breadcrumbs({}: BreadcrumbsProps) {
    const pathname = usePathname();
    const segments = pathname.split("/").filter(Boolean); // Split the pathname into segments

    return (
        <div className="flex justify-center">
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />

                    {segments.map((segment, index) => {
                        const route = `/${segments
                            .slice(0, index + 1)
                            .join("/")}`;

                        return (
                            <React.Fragment key={route}>
                                <BreadcrumbItem>
                                    {index === segments.length - 1 ? (
                                        <BreadcrumbPage>
                                            {segment}
                                        </BreadcrumbPage>
                                    ) : (
                                        <BreadcrumbLink href={route}>
                                            {segment}
                                        </BreadcrumbLink>
                                    )}
                                </BreadcrumbItem>
                                {index < segments.length - 1 && (
                                    <BreadcrumbSeparator />
                                )}
                            </React.Fragment>
                        );
                    })}
                </BreadcrumbList>
            </Breadcrumb>
        </div>
    );
}
