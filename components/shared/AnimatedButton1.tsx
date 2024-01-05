import React from "react";
import { Button } from "@/components/ui/button";

const AnimatedButton1 = ({
    style,
    text,
    bg,
}: {
    style?: string;
    text: string;
    bg?: string;
}) => {
    return (
        <Button
            variant="outline"
            // hover:bg-white group transition ease-in-out delay-150 hover:scale-110 hover:-translate-y-1 hover:shadow-lg shadow-white
            className={
                style
                    ? `relative group bg-transparent hover:bg-transparent ${style}`
                    : `relative h-24 w-64 group  bg-transparent  hover:bg-transparent`
            }
        >
            <span
                className={
                    bg === "white"
                        ? `absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-black normal-transition `
                        : `absolute top-0 left-0 w-0 group-hover:w-full h-0.5 bg-white normal-transition `
                }
            />
            <span
                className={
                    bg === "white"
                        ? `absolute bottom-0 left-0 w-0.5 group-hover:h-full h-0 bg-black normal-transition `
                        : `absolute bottom-0 left-0 w-0.5 group-hover:h-full h-0 bg-white normal-transition `
                }
            />

            <span
                className={
                    bg === "white"
                        ? `group-hover:font-normal 
                group-hover:-translate-y-1 
                group-hover: -translate-x-1
                group-hover:scale-110 
                group-hover:text-black
                font-thin text-[20px] normal-transition`
                        : `group-hover:font-normal 
                        group-hover:-translate-y-1 
                        group-hover: -translate-x-1
                        group-hover:scale-110 
                        group-hover:text-white
                        font-thin text-[20px] normal-transition`
                }
            >
                {text}
            </span>
            <span
                className={
                    bg === "white"
                        ? `absolute bottom-0 right-0 w-0 group-hover:w-full h-2 bg-black normal-transition `
                        : `absolute bottom-0 right-0 w-0 group-hover:w-full h-2 bg-white normal-transition `
                }
            />
            <span
                className={
                    bg === "white"
                        ? `absolute top-0 right-0 w-2 group-hover:h-full h-0 bg-black normal-transition `
                        : `absolute top-0 right-0 w-2 group-hover:h-full h-0 bg-white normal-transition `
                }
            />
        </Button>
    );
};

export default AnimatedButton1;
