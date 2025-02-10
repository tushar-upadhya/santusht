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
import { authFormSchema } from "@/lib/helpers/authFormSchema";
import { FormType } from "@/lib/types/formType";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";

const AuthForm = ({ type }: { type: FormType }) => {
    const formSchema = authFormSchema(type);
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            fullName: "",
            email: "",
        },
    });

    function onSubmit(values: z.infer<typeof formSchema>) {
        // Handle form submission here.
        console.log(values);
    }

    return (
        <Form {...form}>
            <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="flex max-h-[800px] w-full max-w-[580px] flex-col justify-center space-y-6 transition-all lg:h-full lg:space-y-8"
            >
                <h1 className="h1 text-center text-light-100 md:text-left dark:text-gray-100">
                    {type === "sign-in" ? "Sign In" : "Sign Up"}
                </h1>

                {type === "sign-up" && (
                    <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                            <FormItem>
                                <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 dark:border-primary/50 px-4 shadow-drop-1">
                                    <FormLabel className="text-light-100 dark:text-gray-100">
                                        Full Name
                                    </FormLabel>
                                    <FormControl>
                                        <Input
                                            placeholder="Enter Full Name"
                                            {...field}
                                            className="border-none shadow-none p-0 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-light-200 dark:placeholder:text-dark-300 text-[min(4vw,1rem)] leading-relaxed  font-normal"
                                        />
                                    </FormControl>
                                </div>

                                <FormMessage className="text-red text-[min(4vw,1rem)] leading-relaxed  font-normal ml-4" />
                            </FormItem>
                        )}
                    />
                )}
                <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                        <FormItem>
                            <div className="flex h-[78px] flex-col justify-center rounded-xl border border-light-300 dark:border-primary/50 px-4 shadow-drop-1">
                                <FormLabel className="text-light-100 dark:text-gray-100 pt-2 text-[min(4vw,1rem)] leading-relaxed  font-normal w-full">
                                    Email
                                </FormLabel>

                                <FormControl>
                                    <Input
                                        placeholder="Enter your email"
                                        className="border-none shadow-none p-0 outline-none ring-offset-transparent focus:ring-transparent focus:ring-offset-0 focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-transparent focus-visible:ring-offset-0 placeholder:text-light-200 dark:placeholder:text-dark-300 text-[min(4vw,1rem)] leading-relaxed font-normal"
                                        {...field}
                                    />
                                </FormControl>
                            </div>

                            <FormMessage className="text-primary text-[min(4vw,1rem)] leading-relaxed  font-normal ml-4" />
                        </FormItem>
                    )}
                />
                <Button
                    type="submit"
                    variant={"outline"}
                    className=" transition-all rounded-full text-[min(4vw,1rem)] leading-relaxed  font-medium h-[66px]"
                >
                    {type === "sign-in" ? "Sign In" : "Sign Up"}
                </Button>

                <div className="text-[min(4vw,1rem)] leading-relaxed  font-normal flex justify-center">
                    <p className="text-light-100 dark:text-gray-100">
                        {type === "sign-in"
                            ? "Don't have an account?"
                            : "Already have an account?"}
                    </p>
                    <Link
                        href={type === "sign-in" ? "/sign-up" : "/sign-in"}
                        className="ml-1 font-medium text-primary dark:text-gray-100pA"
                    >
                        {type === "sign-in" ? "Sign Up" : "Sign In"}
                    </Link>
                </div>
            </form>
        </Form>
    );
};

export default AuthForm;
