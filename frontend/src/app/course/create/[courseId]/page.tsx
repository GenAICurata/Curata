"use client";
import { FunctionComponent, useEffect, useState } from "react";
import { AlertCircle } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { apiClient } from "@/lib/axios";
import { useParams } from "next/navigation";

interface Course {
    courseId: number;
    courseName: string;
    Units: Array<Unit>;
}

interface Unit {
    unitName: string;
    Chapters: Array<Chapter>;
}

interface Chapter {
    chapterName: string;
}

interface Props {}

const CreateSubTopicsPage: FunctionComponent<Props> = () => {
    const [course, setCourse] = useState<Course>();
    const { courseId } = useParams();

    useEffect(() => {
        getCourseDetail();
    }, []);

    const getCourseDetail = async () => {
        const { data } = await apiClient.get<Course>(`/course/${courseId}`);
        setCourse(data);
    };

    const generateSubTopicContent = () => {};

    return (
        <div className="py-28 flex justify-center items-center">
            <div>
                <p className="text-lg">COURSE NAME</p>
                <h1 className="font-bold text-black text-4xl">
                    {course?.courseName}
                </h1>
                <div className="bg-[#F5F5F4] px-4 py-5 mt-5 flex gap-3 items-center">
                    <AlertCircle className="text-[#5FA5F9]" size={35} />
                    <p className="text-md max-w-[550px]">
                        We generated chapters for each of your units. Look over
                        them and then click the Button to confirm and continue
                    </p>
                </div>

                {course?.Units &&
                    course?.Units.map((unit, index) => (
                        <div className="mt-8" key={index}>
                            <p className="text-[#767574] font-semibold">
                                UNIT 1
                            </p>
                            <h2 className="text-2xl font-bold">
                                {unit?.unitName}
                            </h2>
                            <div className="mt-2 flex flex-col gap-2">
                                {unit?.Chapters &&
                                    unit?.Chapters.map((chapter, index) => (
                                        <div
                                            className="bg-[#F5F5F4] py-3 px-5"
                                            key={index}
                                        >
                                            {chapter?.chapterName}
                                        </div>
                                    ))}
                            </div>
                        </div>
                    ))}

                <div className="mt-8 flex items-center gap-5">
                    <Separator className="flex-grow" />
                    <div className="flex gap-2">
                        <Button
                            className="font-bold flex gap-1"
                            onClick={generateSubTopicContent}
                        >
                            Generate
                            <ChevronRight />
                        </Button>
                    </div>
                    <Separator className="flex-grow" />
                </div>
            </div>
        </div>
    );
};

export default CreateSubTopicsPage;