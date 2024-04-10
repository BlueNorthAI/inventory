import { prisma } from "../db.server";
import { demand_cube } from "@prisma/client";
 
export async function loader({ request }) {
  const from = Number(new URL(request.url).searchParams.get("from"));
  const to = Number(new URL(request.url).searchParams.get("to"));
 
  if (from >= 0 && to > 0) {
    const demand = await prisma.demand_cube.findMany({
      skip: from,
      take: to - from,
      select: {
        id: true,
        title: true,
        updatedAt: true,
        author: {
          select: {
            email: true,
            name: true,
          },
        },
      },
    });
 
    return demand;
  }
  return [];
}