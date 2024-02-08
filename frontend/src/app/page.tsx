import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
    return (
        <main className="gradient-background">
            <div className="min-h-[90vh] flex flex-col items-center justify-center gap-5">
                <h1 className="text-5xl font-bold">Cognimate 🤖.</h1>
                <p className="text-2xl">
                    Your all-in-one AI Study Assistant designed to elevate your
                    learning experience
                </p>
                <Link href="/course">
                    <Button>Get Started</Button>
                </Link>
            </div>
            <div className="flex h-screen items-center justify-around px-4">
                <div className="flex w-3/12 flex-col gap-2">
                    <h1 className="text-4xl font-bold">Elevate Learning, </h1>
                    <h1 className="text-4xl font-bold">Elevate You.</h1>
                    <p className="text-wrap text-xl">
                        Unlock powerful learning experiences effortlessly with
                        Cognimate‘s AI course builder.
                    </p>
                </div>
                <img
                    alt="feature-showcase"
                    loading="lazy"
                    width="2560"
                    height="1600"
                    decoding="async"
                    data-nimg="1"
                    className="w-5/12 border shadow-lg"
                    style={{ color: "transparent" }}
                    src="https://cognimate.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-showcase-1.6ff36ef3.jpg&w=3840&q=75"
                />
            </div>
            <div className="flex h-screen items-center justify-around px-4">
                <img
                    alt="feature-showcase"
                    loading="lazy"
                    width="2560"
                    height="1600"
                    decoding="async"
                    data-nimg="1"
                    className="w-5/12 border shadow-lg"
                    style={{ color: "transparent" }}
                    src="https://cognimate.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Ffeature-showcase-2.3e9e5ae8.png&w=3840&q=75"
                />
                <div className="flex w-3/12 flex-col gap-2">
                    <h1 className="text-4xl font-bold">
                        Learning Has Never Been Easier.
                    </h1>
                    <p className="text-wrap text-xl">
                        Personalize your learning based on your focus today.
                    </p>
                </div>
            </div>
        </main>
    );
}