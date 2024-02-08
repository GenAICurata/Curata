"use client";
import {
    Drawer,
    DrawerClose,
    DrawerContent,
    DrawerDescription,
    DrawerFooter,
    DrawerHeader,
    DrawerTitle,
    DrawerTrigger,
} from "@/components/ui/drawer";
import React, { useState } from "react";
import ReactQuill from "react-quill";
import { Button } from "./ui/button";
import "react-quill/dist/quill.snow.css";

import { FunctionComponent } from "react";

interface Props {}

const Note: FunctionComponent<Props> = () => {
    const [value, setValue] = useState("");

    return (
        <Drawer>
            <div className="fixed bottom-0 right-3 p-4">
                <DrawerTrigger>
                    <div className="bg-white rounded-full p-6">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-notebook-pen "
                        >
                            <path d="M13.4 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7.4"></path>
                            <path d="M2 6h4"></path>
                            <path d="M2 10h4"></path>
                            <path d="M2 14h4"></path>
                            <path d="M2 18h4"></path>
                            <path d="M18.4 2.6a2.17 2.17 0 0 1 3 3L16 11l-4 1 1-4Z"></path>
                        </svg>
                    </div>
                </DrawerTrigger>
            </div>
            <DrawerContent>
                <div className="flex justify-center">
                    <DrawerHeader>
                        <DrawerTitle className="font-bold text-4xl mt-8">
                            Note 📝
                        </DrawerTitle>
                        <DrawerDescription>
                            <Button className="w-full mt-2 text-lg py-3">
                                Ask AI to Tidy Up 🪄✨
                            </Button>
                        </DrawerDescription>
                        <DrawerDescription className="mb-5 mt-2">
                            <ReactQuill
                                theme="snow"
                                value={value}
                                onChange={setValue}
                            />
                        </DrawerDescription>
                    </DrawerHeader>
                </div>
            </DrawerContent>
        </Drawer>
    );
};

export default Note;
