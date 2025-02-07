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

const DialogForm: React.FC<DialogFormProps> = ({
    title,
    description,
    formComponent,
    buttonLabel,
    logo,
    location,
}) => {
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
                    <DialogTitle className="flex items-center space-x-2">
                        {logo && <div className="w-8 h-8">{logo}</div>}
                        <span>{title}</span>
                    </DialogTitle>
                    <DialogDescription>
                        <p className="font-semibold">{description}</p>
                        {location && <p className="mt-2 text-sm">{location}</p>}
                    </DialogDescription>
                </DialogHeader>
                <div className="mt-4">{formComponent}</div>
            </DialogContent>
        </Dialog>
    );
};

export default DialogForm;
