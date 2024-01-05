import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import TopicList from "@/components/shared/TopicList";

export default function Home() {
    return (
        <>
            <div className="h-lvh  py-64 flex flex-col items-center gap-10">
                <TopicList />
                <Link href="/create-topic">
                    <Button
                        variant="default"
                        className=" hover:scale-110 hover:-translate-y-1 hover:shadow-lg  transition-all ease-out duration-300 "
                    >
                        Create Topic
                    </Button>
                </Link>
            </div>
        </>
    );
}
