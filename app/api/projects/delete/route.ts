import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  const body = await request.json();
  const id = Number(body.id);

  if (!id) {
    return NextResponse.json({ error: "Invalid project id" }, { status: 400 });
  }

  await prisma.project.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Project deleted" });
}