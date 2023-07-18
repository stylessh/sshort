import { nanoid } from "nanoid"
import redis from "@/lib/redis"

import { NextResponse } from "next/server"

export async function POST(req: Request) {
  // get url from body
  let url = ""

  const { url: bodyUrl } = await req.json()

  // get url from params
  if (!bodyUrl) {
    const searchParam = new URLSearchParams(req.url)
    const paramUrl = searchParam.get("url")

    if (!paramUrl)
      return NextResponse.json({ error: "No url provided" }, { status: 400 })
    url = paramUrl
  } else url = bodyUrl

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

export async function GET(req: Request) {
  const { searchParams, origin } = new URL(req.url)
  const paramUrl = searchParams.get("target")

  try {
    // generate a random id
    const id = nanoid(8)
    // save the url in redis
    await redis.set(id, paramUrl)

    const finalUrl = `${origin}/${id}`

    return NextResponse.json({ url: finalUrl }, { status: 200 })
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 })
  }
}
