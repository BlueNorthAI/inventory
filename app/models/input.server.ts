import type { PlanInput, truck_scenario } from '@prisma/client'

import { prisma } from "~/db.server";

export function getInput() {
    
  return prisma.planInput.findFirst();
  
}

export function getTruckInput() {
  return prisma.truck_scenario.findFirst();
}

