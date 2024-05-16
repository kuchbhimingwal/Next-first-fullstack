import { NextRequest, NextResponse } from "next/server";
import prisma from "@/app/db"

 export async function POST(req: NextRequest){
  const body = await req.json();

  try {
    
  await prisma.user.create({
    data:{
      username: body.username,
      password: body.password
    }
  });
  return NextResponse.json({
    message: "you are logged in"
  })
  } catch (error) {
    console.log(error);
    return NextResponse.json({
      message: "error while loggin in",
    },{
      status: 411
    })
  }

 }