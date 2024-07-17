"use server"

import { NextResponse } from "next/server";

const { revalidatePath } = require("next/cache");
const { connectToDb } = require("./utils");
const { Post, User } = require("./models");
const { signIn, signOut } = require("./auth");
const bcrypt = require("bcryptjs");

export const addPost = async(formData) => {
  const {title, desc, slug, userId} = Object.fromEntries(formData);
  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId
    });

    await newPost.save();
    console.log("save to db");
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const deletePost = async(formData) => {
  const {id} = Object.fromEntries(formData);
  try {
    connectToDb();
    await Post.findByIdAndDelete(id);

    console.log("deleted from data");
    revalidatePath("/blog");
  } catch (error) {
    throw new Error(error.message);
  }
}

export const handleGithubLogin = async() => {
   await signIn("github");
 }

 export const handleLogout = async() => {
  await signOut();
}

export const handleLogin = async (formData) => {
  const { username, password } = Object.fromEntries(formData);
  try {
    connectToDb();
     await signIn("credentials", {
      username,
      password,
    });

    // return NextResponse.json({ message: "Login successful" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 400 });
  }
};

export const handleRegister = async(formData) => {
  const {username, email, password, img, passwordRepeat} = Object.fromEntries(formData);
  if (password != passwordRepeat){
    return "Password does not match";
  }
  try {
    connectToDb();
    const user = await User.findOne({email});
    if(user){
      return "User already exist";
    }
    const gsalt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, gsalt);
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      img
    })
    await newUser.save();
    console.log("save to db");
  } catch (error) {
    return NextResponse.json({error:error.message}, {status: 400});
  }
}