import { nanoid } from "nanoid"
import redis from "@/lib/redis"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  // get url from body
  const { url } = await req.json()

  try {
    // generate a random id
    const id = nanoid(8)
    // save the url in redis
    await redis.set(id, url)

    return NextResponse.json({ urlId: id }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
