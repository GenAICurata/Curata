"use client";
import { FunctionComponent } from "react";
import CourseCard from "@/components/CourseCard";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Plus } from "lucide-react";

interface Props {}

const Course: FunctionComponent<Props> = () => {
    return (
        <div className="pt-28 px-24 flex flex-wrap gap-5 justify-center">
            <Link href={`/course/create`}>
                <Card className="border-ghost flex h-[500px] w-[300px] items-center justify-center border border-dashed duration-700 ease-in hover:scale-[1.03] hover:border hover:border-primary">
                    <Plus className="h-10 w-10" />
                </Card>
            </Link>
            <CourseCard />
            <CourseCard />
            <CourseCard />
        </div>
    );
};

export default Course;
