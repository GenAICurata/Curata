"use client";
import { v4 as uuidv4 } from "uuid";
import { FunctionComponent, useState } from "react";
import { UploadCloud } from "lucide-react";
import { Input } from "@/components/ui/input";
import { apiClient } from "@/lib/axios";

interface Props {}

const Summarize: FunctionComponent<Props> = () => {
    const [fileKey, setFileKey] = useState<string>();

    const handleUpload = async (e: any) => {
        try {
            const formData = new FormData();
            const file = e.target.files[0];

            if (file !== undefined) {
                const fileKey = `${file.name}-${uuidv4()}`;
                formData.append("file", file);
                formData.append("fileKey", fileKey);
                setFileKey(fileKey);
            }

            // submit the file to the backend
            await apiClient.post("/summarize", formData);
            console.log("success");
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center pt-28">
            <h1 className="text-2xl font-bold">
                Upload your PDF for an AI Generated Summary and Knowledge Check
                🤖🪄
            </h1>
            <div className="max-w-[700px] w-full h-[170px] mt-8 outline-dashed rounded-[10px] outline-[#E7E5E4] flex justify-center items-center cursor-pointer relative">
                <Input
                    className="absolute inset-0 w-full h-full opacity-0"
                    type="file"
                    onChange={handleUpload}
                    accept="application/pdf"
                />
                <div>
                    <UploadCloud className="mx-auto h-[54px] w-[54px]" />
                    <p className="font-medium">Drop your PDF document here!</p>
                </div>
            </div>
        </div>
    );
};

export default Summarize;
