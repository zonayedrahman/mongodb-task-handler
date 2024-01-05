"use client";

import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
    title: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(50),
    description: z
        .string()
        .min(2, {
            message: "Username must be at least 2 characters.",
        })
        .max(150),
});

const CreateTopic = () => {
    const router = useRouter();

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            title: "",
            description: "",
        },
    });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.

        const { title, description } = values;
        console.log(title, description);

        try {
            const res = await fetch("http://localhost:3000/api/topics", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ title, description }),
            });

            if (!res.ok) {
                throw new Error("Something went wrong!");
            } else {
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="flex justify-center py-24 h-lvh ">
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-12 w-1/3"
                >
                    <FormField
                        control={form.control}
                        name="title"
                        render={({ field }) => (
                            <FormItem className="">
                                <FormLabel>Title</FormLabel>
                                <FormControl>
                                    <Input
                                        size={120}
                                        className=""
                                        placeholder="Topic Name"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is your new Topic's name.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="description"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Description</FormLabel>
                                <FormControl>
                                    <Input
                                        placeholder="Topic Description"
                                        {...field}
                                    />
                                </FormControl>
                                <FormDescription>
                                    This is the description of the Topic.
                                </FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit">Submit</Button>
                </form>
            </Form>
        </div>
    );
};

export default CreateTopic;
