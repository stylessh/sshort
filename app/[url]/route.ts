import redis from "@/lib/redis"
import { NextResponse } from "next/server"

export async function GET(req: Request) {
  const id = new URL(req.url).pathname.split("/")[1]

  console.log(id)

  const url = await redis.get(id)

  // If the URL is not found, return 404
  if (!url) return NextResponse.json({ error: "Not found" }, { status: 404 })

  return NextResponse.redirect(url as string)
}
