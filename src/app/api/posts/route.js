import { NextResponse } from "next/server"
import connect from "@/utils/db";
import Post from "@/models/Post";
// import Post from "@/models/Post";


export const GET=async (request)=>{
    try{
        await connect();
        const posts=await Post.find();
        console.log(posts)
        return new NextResponse(JSON.stringify(posts), {status: 200});
    } catch(err){
        return new NextResponse("Error in databese!", {status: 500})
    }
}