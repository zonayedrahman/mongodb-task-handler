import Topic from "@/lib/database/models/topic.model";
import { connectToDB } from "@/lib/database";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";


export const revalidate = 0;

export const POST = async(request: NextRequest) => {
    const {title, description} = await request.json();

    try {
        await connectToDB();
        await Topic.create({title, description});
        return NextResponse.json({message: "Topic Created"}, {status: 201});
        
    } catch (error) {
        console.log(error);
    }

    return NextResponse.json({message: "Topic Creation Failed"}, {status: 500});
}

export const GET = async() => {
    try {
        await connectToDB();
        const topics = await Topic.find();
        return NextResponse.json(topics, {status: 200});        
    } catch (error) {
        console.log(error);
        return NextResponse.json({message: "Topic Fetch Failed"}, {status: 500});
    }


}

export const DELETE = async(request: NextRequest) => {
    const id = request.nextUrl.searchParams.get('id');

    try {
        await connectToDB();
        await Topic.findByIdAndDelete(id);
        return NextResponse.json({message: "Topic Deleted"}, {status: 200});
        
    } catch (error) {
        console.log(error);
        NextResponse.json({message: "Topic Deletion Failed"}, {status: 500});
    }

}


