import { level_master,measure_master,attribute_master } from "@prisma/client";

import { prisma } from "~/db.server";

export function getLevelMaster() {
  return prisma.level_master.findMany({
    select: {
      level_id: true,
      level_code: true,
      column_name: true,
      level_description: true,
      dimension_id: true,
    }
  })
}

export function getMeasureMaster() {
  return prisma.measure_master.findMany({
    select: {
      measure_id: true,
      measure_code: true,
      measure_description: true,
      measure_type: true,
      number_format: true,
      column_name: true,
      rw_flag: true,
      computation_type: true,
      expression: true,
      aggregation: true,
      disaggregation: true,
    }
  })
}


export function getAttributeMaster() {
  return prisma.attribute_master.findMany({
    select: {
      attribute_code: true,
      attribute_description: true,
      site_level_id: true,
      column_name: true,
      column_mapping: true,
      seller_level_id: true,
      product_level_id: true,
      dimensionality: true,
      nav_tree: true,
      layout: true,
      sys_nc_type: true,
      level_id: true,
    }
  })
}

  