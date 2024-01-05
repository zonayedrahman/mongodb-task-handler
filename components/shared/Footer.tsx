import { AudioWaveformIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

const Footer = () => {
    return (
        <footer className="border-t-2 border-gray-300/50 flex justify-center items-center">
            <div className="wrapper flex justify-between w-full items-center py-4 px-10">
                <Link href="/" className="">
                    <AudioWaveformIcon className="w-20 h-20" />
                </Link>
                <div className="flex gap-2 h-full ">
                    <p>© 2021</p>
                    <p>All Rights Reserved. </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
