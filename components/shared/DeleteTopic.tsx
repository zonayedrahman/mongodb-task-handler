"use client";

import { useRouter } from "next/navigation";
import { X } from "lucide-react";

const DeleteTopic = ({ id }: { id: string }) => {
    const router = useRouter();
    const DeleteTopicFromDB = async (id: string) => {
        console.log("trying to delete");
        try {
            const res = await fetch(
                `http://localhost:3000/api/topics/?id=${id}`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ id }),
                }
            );

            if (!res.ok) {
                throw new Error("Something went wrong!");
            } else {
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <X
                className="absolute top-10 right-12 w-4 h-4 cursor-pointer"
                onClick={() => DeleteTopicFromDB(id)}
            />
        </div>
    );
};

export default DeleteTopic;
