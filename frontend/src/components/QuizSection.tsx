import { FunctionComponent } from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Chapter } from "@/types";
import { Button } from "./ui/button";

interface QuizProps {
    chapter: Chapter | null;
}

const QuizSection: FunctionComponent<QuizProps> = ({ chapter }) => {
    const questions = chapter?.Questions;

    return (
        <div className="mt-5 pl-8">
            <h1 className="text-3xl font-bold">Concept Check</h1>
            <div className="flex flex-col gap-5 mt-5">
                {questions?.map((question, index) => (
                    <div key={index} className="border-2 p-5">
                        <h2 className="font-bold mb-2 text-lg">
                            {question?.question}
                        </h2>
                        <RadioGroup defaultValue="option-one">
                            {question?.Options?.map((option, index) => (
                                <div
                                    className="flex items-center space-x-2 mt-1"
                                    key={index}
                                >
                                    <RadioGroupItem
                                        value={option?.option}
                                        id={question.id + index.toString()}
                                    />
                                    <Label
                                        htmlFor="option-one"
                                        className="text-[15px] leading-4"
                                    >
                                        {option?.option}
                                    </Label>
                                </div>
                            ))}
                        </RadioGroup>
                    </div>
                ))}
            </div>
            <Button className="mt-2 w-full" size="lg">
                Check Answer
            </Button>
        </div>
    );
};

export default QuizSection;
