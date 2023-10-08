import User from "@/models/User";
// import { connect } from "mongoose";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"
import connect from "@/utils/db";

export const POST = async (request)=>{
  const {name, email, password}=await request.json();

  // console.log(request);
  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = User({
    name,
    email,
    password: hashedPassword,
  });
  try{
    
    await newUser.save();
    return new NextResponse("User has been created", {
      status: 201,
    });
  } catch(err){
    console.error('Error:', err);
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};