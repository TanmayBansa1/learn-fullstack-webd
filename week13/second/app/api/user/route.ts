import { NextRequest, NextResponse } from "next/server";
import { emitWarning } from "process";

export function GET(){

    return NextResponse.json({
        email: "tanmaybansal.20@gmail.com"
    })
}

export async function POST(req: NextRequest, res: NextResponse){

    //get the body
    const body = await req.json()
    //headers
    const token =req.headers.get("authorization")

    //query params
    const name = req.nextUrl.searchParams.get("name")

    return NextResponse.json({
        body,
        name,
        token
    })
}