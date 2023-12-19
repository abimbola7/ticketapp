import Ticket from "@/app/(models)/ticket";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("ddd")
  try {
    const body = await req.json();
    console.log(body)
    const ticketData = body.formData;
    await Ticket.create(ticketData);
    return NextResponse.json({ message : "Ticket Created Successfully" }, { status : 201 })
  } catch (error) {
    return NextResponse.json({ message : "Error", error }, { status : 500 })
  }
}


export async function GET(req) {
  console.log("ffff");
  try {
    const tickets = await Ticket.find()
    return NextResponse.json({ tickets }, { status : 200 });
  } catch(error) {
    return NextResponse.json({ message : "Error", error }, { status : 500 })
  }
}