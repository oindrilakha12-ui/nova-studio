import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function DELETE(
  request: Request,
  context: { params: Promise<{ id: string }> }
) {
  const params = await context.params;
  const id = Number(params.id);

  if (!id) {
    return NextResponse.json(
      { error: "Invalid project id" },
      { status: 400 }
    );
  }

  await prisma.project.delete({
    where: { id },
  });

  return NextResponse.json({ message: "Project deleted" });
}