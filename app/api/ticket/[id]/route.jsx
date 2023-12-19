import { NextResponse } from "next/server";
import Ticket from "@/app/(models)/ticket";

export async function DELETE(req, { params }) {
  try {
    const { id } = params;
    await Ticket.deleteOne({ _id : id });
    return NextResponse.json({ message : "Ticket Deleted" }, { status : 200 })
  } catch (error) {
    return NextResponse({ message : error }, { status : "500" })
  }
}

export async function GET(req, { params }) {
  const { id } = params;
  console.log(id, "IIIIIIIIDIIDIDIDIDIDIDIIDID", params)
  try {
    console.log(id, "IIIIIIIIDIIDIDIDIDIDIDIIDID")
    const ticket =  await Ticket.findOne({ _id : id })
    console.log(ticket)
    return NextResponse({ id }, { status : 200 })
  } catch (error) {
    return NextResponse({ message : error }, { status : "500" })
  }
}