import {
    Menubar,
    MenubarContent,
    MenubarItem,
    MenubarMenu,
    MenubarTrigger,
} from "@/components/ui/menubar";
import { FunctionComponent } from "react";

interface Props {}

const Menu: FunctionComponent<Props> = () => {
    return (
        <Menubar>
            <MenubarMenu>
                <MenubarTrigger>
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
                        className="lucide lucide-sun h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0"
                    >
                        <circle cx="12" cy="12" r="4"></circle>
                        <path d="M12 2v2"></path>
                        <path d="M12 20v2"></path>
                        <path d="m4.93 4.93 1.41 1.41"></path>
                        <path d="m17.66 17.66 1.41 1.41"></path>
                        <path d="M2 12h2"></path>
                        <path d="M20 12h2"></path>
                        <path d="m6.34 17.66-1.41 1.41"></path>
                        <path d="m19.07 4.93-1.41 1.41"></path>
                    </svg>
                </MenubarTrigger>
                <MenubarContent>
                    <MenubarItem>Light</MenubarItem>
                    <MenubarItem>Dark</MenubarItem>
                    <MenubarItem>System</MenubarItem>
                </MenubarContent>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Home 🏠</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>Course Builder 🔨</MenubarTrigger>
            </MenubarMenu>
            <MenubarMenu>
                <MenubarTrigger>AI Summarize ✨</MenubarTrigger>
            </MenubarMenu>
        </Menubar>
    );
};

export default Menu;
