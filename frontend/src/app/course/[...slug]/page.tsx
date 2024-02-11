"use client";
import { useToast } from "@/components/ui/use-toast";
import { useParams } from "next/navigation";
import { FunctionComponent, useEffect, useState } from "react";
import { apiClient } from "@/lib/axios";
import CourseSidebar from "@/components/CourseSidebar";

interface Course {
    id: number;
    courseName: string;
    Units: Array<Unit>;
    loading: false;
}

interface Unit {
    unitName: string;
    Chapters: Array<Chapter>;
    id: number;
}

interface Chapter {
    chapterName: string;
    id: number;
}

interface Props {}

const CourseDetail: FunctionComponent<Props> = () => {
    const [courseOutline, setCourseOutline] = useState<Course>();
    const [courseDetail, setCourseDetail] = useState();
    const { slug } = useParams();
    const [courseId, unitId, chapterId] = slug;
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllUnitsAndChapters();
        getCourseDetail();
    }, []);

    const getAllUnitsAndChapters = async () => {
        try {
            const { data } = await apiClient.get<Course>(`/course/${courseId}`);
            console.log(data);
            setCourseOutline(data);
        } catch (err) {
            console.log(err);
        }
    };

    const getCourseDetail = async () => {
        try {
            const { data } = await apiClient.get<Course>(
                `/course/${courseId}/${unitId}/${chapterId}`
            );
            setCourseDetail(data);
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <>
            <CourseSidebar
                course={courseOutline}
                currentChapterId={Number(chapterId)}
            />{" "}
        </>
    );
};

export default CourseDetail;
