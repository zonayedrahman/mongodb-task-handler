import Link from "next/link";
import {
    Instagram,
    Facebook,
    Linkedin,
    AudioWaveform,
    ChevronLeft,
    ChevronDown,
} from "lucide-react";
import { AnimatedButton1 } from ".";

const NavItems = ({ direction }: { direction: "row" | "col" }) => {
    let bg = "white";

    if (direction === "row") {
        bg = "black";
    }

    return (
        <nav
            className={
                direction === "row"
                    ? `w-[80%] hidden lg:flex justify-end items-center gap-6 h-full`
                    : `flex flex-col justify-between items-center gap-6 h-full`
            }
        >
            <div className="h-full text-lg flex items-center w-[350px] justify-between">
                <Link href="/" className="w-full  flex justify-center">
                    <span className="nav-links-text">Home</span>
                </Link>
                <Link href="/about" className="w-full   flex justify-center">
                    <span className="nav-links-text">About</span>
                </Link>
                <Link href="/" className="w-full   flex justify-center">
                    <span className="nav-links-text">Projects</span>
                </Link>
            </div>

            <div className="flex gap-6">
                <Link href="/">
                    <Linkedin className="relative w-10 h-16 hover:scale-110  normal-transition hover:text-blue-500" />
                </Link>
                <Link href="/">
                    <Instagram className="relative w-10 h-16 hover:scale-110  normal-transition hover:text-red-500" />
                </Link>
                <Link href="/">
                    <Facebook className="relative w-10 h-16 hover:scale-110  normal-transition hover:text-blue-700" />
                </Link>
            </div>
            <div>
                <AnimatedButton1 text="Contact Me" bg={bg} />
            </div>
        </nav>
    );
};

export default NavItems;
