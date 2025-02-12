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
import { useRef, useState } from "react";
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
    const [mediaType, setMediaType] = useState<string | null>(null);
    const [mediaStream, setMediaStream] = useState<MediaStream | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const videoRef = useRef<HTMLVideoElement>(null);

    const handleMediaChange = async (value: string) => {
        setMediaType(value);

        if (mediaStream) {
            mediaStream.getTracks().forEach((track) => track.stop());
            setMediaStream(null);
        }

        try {
            if (value === "audio") {
                const stream = await navigator.mediaDevices.getUserMedia({
                    audio: true,
                });
                setMediaStream(stream);
            } else if (value === "video") {
                const stream = await navigator.mediaDevices.getUserMedia({
                    video: true,
                });
                setMediaStream(stream);
                if (videoRef.current) {
                    videoRef.current.srcObject = stream;
                }
            }
        } catch (error) {
            console.error(`Error accessing ${value}:`, error);
        }
    };

    const onSubmit = (data: unknown): void => {
        console.log(data);
    };

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Institute & Category Dropdown */}
                <div className="flex gap-4">
                    <FormField
                        control={form.control}
                        name="institute"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Institute</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
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

                    {/* Category  */}
                    <FormField
                        control={form.control}
                        name="category"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Category</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
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
                </div>
                {/* Building and Floor  */}
                <div className="flex gap-4">
                    {/* Building Dropdown */}
                    <FormField
                        control={form.control}
                        name="building"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Building</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
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
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
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

                    {/* OTP and Get OTP Button */}
                    <div className="flex-1 flex items-end gap-2">
                        <FormField
                            control={form.control}
                            name="otp"
                            render={({ field }) => (
                                <FormItem className="flex-1">
                                    <FormLabel>OTP</FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter OTP"
                                            {...field}
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button variant="destructive">Get OTP</Button>
                    </div>
                </div>

                {/* MEDIA  */}

                <div className="flex gap-4">
                    <FormField
                        control={form.control}
                        name="mediaType"
                        render={({ field }) => (
                            <FormItem className="flex-1">
                                <FormLabel>Media</FormLabel>
                                <FormControl>
                                    <Select
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            handleMediaChange(value);
                                        }}
                                        value={mediaType || ""}
                                    >
                                        <SelectTrigger>
                                            <SelectValue placeholder="Select Media Type" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="image">
                                                Image
                                            </SelectItem>
                                            <SelectItem value="audio">
                                                Audio
                                            </SelectItem>
                                            <SelectItem value="video">
                                                Video
                                            </SelectItem>
                                        </SelectContent>
                                    </Select>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    {/* Media Display */}
                    <div className="flex-1">
                        {mediaType === "image" && (
                            <div className="flex-1 mt-8">
                                <input
                                    type="file"
                                    accept="image/*"
                                    ref={fileInputRef}
                                    className="hidden"
                                />
                                <Button
                                    onClick={() =>
                                        fileInputRef.current?.click()
                                    }
                                    variant="outline"
                                >
                                    Upload Image
                                </Button>
                            </div>
                        )}

                        {mediaType === "audio" && (
                            <div className="flex-1 mt-8">
                                <p>Microphone is enabled...</p>
                            </div>
                        )}

                        {mediaType === "video" && (
                            <div className="flex ">
                                <video
                                    ref={videoRef}
                                    autoPlay
                                    className="w-full h-auto rounded-md"
                                />
                            </div>
                        )}
                    </div>
                </div>

                {/* Submit Button */}
                <Button type="submit" variant="default" className="w-full">
                    Submit
                </Button>
            </form>
        </Form>
    );
};

export default RaiseGrievanceForm;
