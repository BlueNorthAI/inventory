import { prisma } from '~/db.server'
import {
  customer_risk,
  demand_risk,
  events_risk,
  facility_expense_risk,
  inventory_risk,
  paths_risk,
  process_risk,
  sourcing_risk,
} from '@prisma/client'

export function getCustomerRisk() {
  return prisma.customer_risk.findMany({
    select: {
      Name: true,
      Type: true,
      Location: true,
      Include: true,
      AdditionalParameter: true,
      Icon: true,
    },
  })
}

export function getDemandRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.demand_risk.findMany({
    select: {
      customer: true,
      product: true,
      demandType: true,
      orderInterval: true,
      quantity: true,
      firstOccurrence: true,
      timePeriod: true,
      revenue: true,
      currency: true,
      expectedLeadTime: true,
      timeUnit: true,
      backorderPolicy: true,
      inclusionType: true,
    },
  })
}

export function getEventsRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.events_risk.findMany({
    select: {
      Name: true,
      EventType: true,
      Parameters: true,
      OccurrenceType: true,
      OccurrenceTime: true,
      Trigger: true,
      Probability: true,
    },
  })
}
export function getFacilityRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.facility_expense_risk.findMany({
    select: {
      facility: true,
      expenseType: true,
      value: true,
      currency: true,
      timeUnit: true,
      productUnit: true,
      timePeriod: true,
    },
  })
}
export function getInventoryRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.inventory_risk.findMany({
    select: {
      facility: true,
      product: true,
      policyType: true,
      parameters: true,
      initial: true,
      onHandInventory: true,
      periodicCheck: true,
      period: true,
      firstPeriodicCheck: true,
      policyBasis: true,
      timeUnit: true,
      timePeriod: true,
      inclusionType: true,
    },
  })
}
export function getPathsRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.paths_risk.findMany({
    select: {
      from: true,
      to: true,
      cost: true,
      costCalculation: true,
      co2Calculation: true,
      currency: true,
      distance: true,
      distanceUnit: true,
      transport: true,
    },
  })
}

export function getProcessRisk() {
  // console.log(prisma) // Add this line to check if prisma is defined
  return prisma.process_risk.findMany({
    select: {
      facility: true,
      product: true,
      type: true,
      units: true,
      cost: true,
      currency: true,
      time: true,
    },
  })
}

export function getSourcingRisk() {
  // console.log(prisma) 
  return prisma.sourcing_risk.findMany({
    select: {
      delivery: true,
      product: true,
      type: true,
      parameter: true,
      sources: true,
      timePeriod: true,
      inculusionType: true,
    },
  })
}
