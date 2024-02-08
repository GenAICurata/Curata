"use client";
import { FunctionComponent } from "react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Plus, Trash } from "lucide-react";

interface Props {}

const formSchema = z.object({
    username: z.string().min(2, {
        message: "Username must be at least 2 characters.",
    }),
});

const CourseCreate: FunctionComponent<Props> = () => {
    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
        },
    });

    return (
        <div className="flex h-screen w-screen items-center justify-center">
            <div className="min-w-[40vw] rounded-lg border px-8 py-8 shadow-md">
                <Form {...form}>
                    <h1 className="text-2xl font-bold">
                        Choose any topic that you want to learn...
                    </h1>
                    <form>
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <>
                                    <FormItem className="flex items-center gap-5 mt-5">
                                        <FormLabel className="text-xl font-semibold w-[80px]">
                                            Title
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="shadow-sm"
                                                placeholder="Enter the main topic of the course"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <FormField
                            name="username"
                            render={({ field }) => (
                                <>
                                    <FormItem className="flex items-center gap-5 mt-2">
                                        <FormLabel className="text-xl font-semibold w-[80px]">
                                            Unit 1
                                        </FormLabel>
                                        <FormControl>
                                            <Input
                                                className="shadow-sm"
                                                placeholder="Enter the subtopic of this course"
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                </>
                            )}
                        />
                        <div className="flex justify-center items-center gap-2 mt-5">
                            <Separator className="flex-grow" />
                            <button className="bg-[#F5F5F4] px-5 py-2 rounded-md font-semibold flex items-center">
                                Add Unit
                                <Plus className="ml-2 h-4 w-4 text-green-500" />
                            </button>
                            <button className="bg-[#F5F5F4] px-5 py-2 rounded-md font-semibold flex items-center">
                                Remove Unit
                                <Trash className="ml-2 h-4 w-4 text-red-500" />
                            </button>
                            <Separator className="flex-grow" />
                        </div>
                        <Button className="w-full mt-5 font-bold">
                            Let's Go!
                        </Button>
                    </form>
                </Form>
            </div>
        </div>
    );
};

export default CourseCreate;
