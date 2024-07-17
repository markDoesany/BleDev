import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { unstable_noStore as noStore } from "next/cache";

export const getPosts = async() => {
  try {
    connectToDb();
    const data = await Post.find();
    if (!data){
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getPost = async(slug) => {
  try {
    connectToDb();
    const data = await Post.findOne({slug});
    if (!data){
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

export const getUser = async(userId) => {
  noStore();
  try {
    connectToDb();
    const data = await User.findById(userId);
    if (!data){
      throw new Error(data.error);
    }
    return data;
  } catch (error) {
    throw new Error(error.message);
  }
}

