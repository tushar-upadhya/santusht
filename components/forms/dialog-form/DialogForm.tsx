"use client";

import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

interface DialogFormProps {
    title: string;
    description: string;
    formComponent: React.ReactNode;
    buttonLabel: string;
    logo?: React.ReactNode;
    location?: string;
}

const DialogForm = ({
    title,
    description,
    formComponent,
    buttonLabel,
    logo,
    location,
}: DialogFormProps) => {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button
                    variant="outline"
                    className="border dark:border-orange-500 dark:text-gray-300 font-medium w-full sm:w-fit px-4"
                >
                    {buttonLabel}
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center">
                        {logo && <div className="w-fit h-fit">{logo}</div>}
                        <span>{title}</span>
                    </DialogTitle>
                    <DialogDescription className="text-sm text-muted-foreground">
                        <span className="font-semibold">{description}</span>
                        {location && (
                            <span className="mt-2 block">{location}</span>
                        )}
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">{formComponent}</div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogForm;
