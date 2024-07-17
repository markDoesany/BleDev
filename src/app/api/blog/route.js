import { Post } from "@/lib/models";
import { connectToDb } from "@/lib/utils";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    connectToDb();
    const posts = await Post.find();
    if(!posts){
      console.log("Empty posts");
      return;
    }
    return NextResponse.json(posts);
  } catch (error) {
    throw new Error(error.mesage);
  }
}