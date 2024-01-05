import DeleteTopic from "./DeleteTopic";

const getTopics = async () => {
    try {
        const res = await fetch("http://localhost:3000/api/topics", {
            cache: "no-cache",
        });

        if (!res.ok) {
            throw new Error("Something went wrong!");
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
};

const TopicList = async () => {
    const topics = await getTopics();

    return (
        <div className=" w-2/5">
            <ul className="flex flex-col">
                {topics.map(
                    (topic: {
                        _id: string;
                        title: string;
                        description: string;
                    }) => (
                        <li
                            className="relative border-b-2 border-gray-200 pt-6 pb-2"
                            key={topic._id}
                        >
                            <div>
                                <h2 className="font-bold text-lg">
                                    {topic.title}
                                </h2>
                                <p className="text-gray-300 text-sm ">
                                    id: {topic._id}
                                </p>
                            </div>

                            <p className="border-none">{topic.description}</p>

                            <DeleteTopic id={topic._id} />
                        </li>
                    )
                )}
            </ul>
        </div>
    );
};

export default TopicList;
