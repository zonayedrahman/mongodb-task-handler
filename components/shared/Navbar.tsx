"use client";

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
import { useEffect, useState } from "react";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
    SheetClose,
} from "@/components/ui/sheet";
import NavItems from "@/components/shared/NavItems";

const Navbar = () => {
    const [dropDown, setDropDown] = useState(false);

    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scroll = window.scrollY;

            if (scroll > 100) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={
                isVisible
                    ? `nav-bar px-48 h-36 bg-transparent/80`
                    : `nav-bar bg-transparent/70`
            }
        >
            <div className="">
                <Link href="/">
                    <AudioWaveform size="72px" className="cursor-pointer" />
                </Link>
            </div>
            <NavItems direction="row" />

            <div className="lg:hidden cursor-pointer fixed top-20 right-20">
                {
                    <Sheet>
                        <SheetTrigger>
                            <ChevronLeft
                                onClick={() => setDropDown((prev) => !prev)}
                            />
                        </SheetTrigger>
                        <SheetContent>
                            <NavItems direction="col" />
                        </SheetContent>
                    </Sheet>
                }
            </div>
        </header>
    );
};

export default Navbar;
