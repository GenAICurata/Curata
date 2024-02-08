import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { FunctionComponent } from "react";

interface Props {}

const CourseCard: FunctionComponent<Props> = () => {
    return (
        <Card className="w-[300px] h-[500px] duration-500 ease-in hover:scale-[1.03] hover:border hover:border-primary">
            <CardHeader>
                <CardTitle className="text-md">Machine Learning</CardTitle>
            </CardHeader>
            <CardContent>
                <img
                    src="https://cognimate.vercel.app/_next/image?url=https%3A%2F%2Fs3.us-west-2.amazonaws.com%2Fimages.unsplash.com%2Fsmall%2Fphoto-1561557944-6e7860d1a7eb&w=640&q=75"
                    alt="course image"
                    className="h-[260px] w-[250px] rounded-md"
                />
            </CardContent>
            <CardContent className="text-center">
                <p>Linear Regression</p>
                <p>Support Vector Machine</p>
            </CardContent>
        </Card>
    );
};

export default CourseCard;
