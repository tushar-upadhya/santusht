"use client";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
    institute: z.string().min(1, "Institute is required."),
    building: z.string().min(1, "Building is required."),
    floor: z.string().min(1, "Floor is required."),
    landmark: z.string().min(1, "Landmark is required."),
    category: z.string().min(1, "Category is required."),
    briefing: z.string().min(1, "Briefing is required."),
    uhid: z.string().min(1, "UHID is required."),
    otp: z.string().min(1, "OTP is required."),
});

const RaiseGrievanceForm = () => {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            institute: "",
            building: "",
            floor: "",
            landmark: "",
            category: "",
            briefing: "",
            uhid: "",
            otp: "",
        },
    });

    const onSubmit = (data: any): void => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Institute Dropdown */}
                <FormField
                    control={form.control}
                    name="institute"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Institute</FormLabel>
                            <FormControl>
                                <Select {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Institute" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="institute1">
                                            Institute 1
                                        </SelectItem>
                                        <SelectItem value="institute2">
                                            Institute 2
                                        </SelectItem>
                                        <SelectItem value="institute3">
                                            Institute 3
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Building and Floor Fields (Horizontally Aligned) */}
                <div className="flex gap-4">
                    {/* Building Dropdown */}
                    <FormField
                        control={form.control}
                        name="building"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Building</FormLabel>
                                <FormControl>
                                    <Select {...field}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Building" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="building1">
                                                Building 1
                                            </SelectItem>
                                            <SelectItem value="building2">
                                                Building 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Floor Dropdown */}
                    <FormField
                        control={form.control}
                        name="floor"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Floor</FormLabel>
                                <FormControl>
                                    <Select {...field}>
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Floor" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="floor1">
                                                Floor 1
                                            </SelectItem>
                                            <SelectItem value="floor2">
                                                Floor 2
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                </div>

                {/* Landmark Input */}
                <FormField
                    control={form.control}
                    name="landmark"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Landmark</FormLabel>
                            <FormControl>
                                <Input
                                    placeholder="Enter Landmark"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Category Dropdown */}
                <FormField
                    control={form.control}
                    name="category"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Category</FormLabel>
                            <FormControl>
                                <Select {...field}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select Category" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="category1">
                                            Category 1
                                        </SelectItem>
                                        <SelectItem value="category2">
                                            Category 2
                                        </SelectItem>
                                    </SelectContent>
                                </Select>
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* Briefing Textarea */}
                <FormField
                    control={form.control}
                    name="briefing"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Briefing</FormLabel>
                            <FormControl>
                                <Textarea
                                    placeholder="Provide a brief description"
                                    {...field}
                                />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}
                />

                {/* UHID, OTP Input, Get OTP Button */}
                <div className="flex items-center gap-2">
                    {/* UHID Input */}
                    <FormField
                        control={form.control}
                        name="uhid"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>UHID</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Enter UHID"
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* OTP Input */}
                    <FormField
                        control={form.control}
                        name="otp"
                        render={({ field }) => (
                            <FormItem className="flex-1 mt-8">
                                <FormControl>
                                    <Input placeholder="Enter OTP" {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Get OTP Button */}
                    <Button className="self-end">Get OTP</Button>
                </div>

                {/* Submit Button */}
                <div className="justify-center max-w-full">
                    <Button
                        type="submit"
                        variant="secondary"
                        className="w-full"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </Form>
    );
};

export default RaiseGrievanceForm;
