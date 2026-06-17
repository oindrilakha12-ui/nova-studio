import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const stats = await prisma.stat.findMany({
    orderBy: { id: "asc" },
  });

  return NextResponse.json(stats);
}