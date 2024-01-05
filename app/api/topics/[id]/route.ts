import { connectToDB } from "@/lib/database";
import Topic from "@/lib/database/models/topic.model";

import { NextRequest, NextResponse } from "next/server";

export const PUT = async (request: NextRequest, {params}: {params: any}) => {

    const { id } = params;

    const {newTitle: title, newDescription: description} = await request.json();

    await connectToDB();
    await Topic.findByIdAndUpdate(id, {title, description});
    return NextResponse.json({message: "Topic Updated"}, {status: 200});

}

export const GET = async (request : NextRequest, {params}: {params: any}) => {
    const {id} = params;

    await connectToDB();
    const topic = await Topic.findById({_id: id})

    return NextResponse.json(topic, {status: 200});
}