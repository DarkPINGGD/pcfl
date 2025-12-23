import { NextResponse } from "next/server"
import { prisma } from "@/lib/db"
import { calculateScore } from "@/lib/score"

export async function GET(){
  const levels = await prisma.level.findMany({
    orderBy:{ position:"asc" }
  })
  return NextResponse.json(levels)
}

export async function POST(req:Request){
  const body = await req.json()

  const score = calculateScore(body.position)

  const listType =
    body.position <= 75 ? "MAIN" :
    body.position <= 150 ? "EXTENDED" : "LEGACY"

  const level = await prisma.level.create({
    data:{
      ...body,
      score,
      listType
    }
  })

  return NextResponse.json(level)
}
