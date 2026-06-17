import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body.name || !body.email || !body.message) {
    return NextResponse.json(
      { error: "All fields are required" },
      { status: 400 }
    );
  }

  const contact = await prisma.contact.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
    },
  });

  return NextResponse.json(contact);
}