import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request, {params}) => {
  const {slug} = params;
  try {
    connectToDb();
    const post = await Post.findOne({slug});
    if (!post){
      return NextResponse.json({error: "Page not found"},{status:404});
    }
    return NextResponse.json(post);
  } catch (error) {
    throw new Error(error.message);
  }
}

export const DELETE = async (request, {params}) => {
  const {slug} = params;
  try {
    connectToDb();
    await Post.findByIdAndDelete({slug});
  } catch (error) {
    throw new Error(error.message);
  }
}