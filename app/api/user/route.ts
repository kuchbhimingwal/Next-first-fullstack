import { NextRequest } from "next/server";
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export function GET(){
  return Response.json({
    email: "shubhammingi@gmail.com",
    name: "shubham"
  })
}
 export async function POST(req: NextRequest){
  const body = await req.json();
  console.log(body);
  await prisma.user.create({
    data:{
      username: body.username,
      password: body.password
    }
  })

  return Response.json({
    message: "you are logged in"
  })
 }