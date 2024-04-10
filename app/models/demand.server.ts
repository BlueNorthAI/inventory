import { demand_cube } from "@prisma/client";

import { prisma } from "~/db.server";



export function getDemand(filterData: { customer: any; site: any; bucket: any; }) {
console.log(filterData)
  return prisma.demand_cube.findMany({
    // data: filterData,
        select: {
      customer: true,
      site: true,
      sku: true,
      bucket: true,
      selling_price: true,
      mkt_fcst_qty: true,
      cons_fcst_qty: true,
      cust_fcst_qty: true,
      fin_fcst_qty: true,
      mnth2_sales_fcst_qty: true,
    },
    // where: {
    //   customer:  filterData.customer  ,
    //   site: filterData.site ,
    //   bucket: filterData.bucket
    // }
     where: {
     customer: filterData.customer !== null ? filterData.customer : undefined,
      site: filterData.site !== null ? filterData.site : undefined,
      bucket: filterData.bucket
    }
  })
}

export function getDemandListItems() {
  
  return prisma.demand_cube.findMany({
    select: {
      customer: true,
      site: true,
      sku: true,
      bucket: true,
      selling_price: true,
      mkt_fcst_qty: true,
      cons_fcst_qty: true,
      cust_fcst_qty: true,
      fin_fcst_qty: true,
      mnth2_sales_fcst_qty: true,
    },
  });
}

export function createDemand({
  customer,
  site,
  sku,
  bucket,
  selling_price,
  mkt_fcst_qty,
  cons_fcst_qty,
  cust_fcst_qty,
  fin_fcst_qty,
  mnth2_sales_fcst_qty,
}: Pick<
  demand_cube,
  | "customer"
  | "site"
  | "sku"
  | "bucket"
  | "selling_price"
  | "mkt_fcst_qty"
  | "cons_fcst_qty"
  | "cust_fcst_qty"
  | "fin_fcst_qty"
  | "mnth2_sales_fcst_qty"
>) {
  return prisma.demand_cube.create({
    data: {
      customer,
      site,
      sku,
      bucket,
      selling_price,
      mkt_fcst_qty,
      cons_fcst_qty,
      cust_fcst_qty,
      fin_fcst_qty,
      mnth2_sales_fcst_qty,
    },
  });
}


// export function getCountryForecast(ctry1, ctry2, ctry3, ctry4, ctry5, ctry6, ctry7) {

//   return prisma.demand_cube.groupBy({
//     by: ["bucket",'customer'],
//     where: {
//        customer: {
//           in: [ctry1,ctry2,ctry3,ctry4,ctry5,ctry6,ctry7],
//         },
//       },
//     _sum: {
//       mkt_fcst_qty: true,
//         },
// })
// }

export function getCountryForecast(ctry1: any, ctry2: any, ctry3: any, ctry4: any, ctry5: any, ctry6: any, ctry7: any) {
  // console.log(ctry1, ctry2, ctry3, ctry4, ctry5, ctry6, ctry7)

  return prisma.demand_cube.groupBy({
    by: ["bucket",'customer'],
    where: {
      customer:
      {
          in: [ctry1,ctry2,ctry3,ctry4,ctry5,ctry6,ctry7],
        },
    },
    _sum: {
      mkt_fcst_qty: true,
        },
})
}

// export function getCountryForecast(customer) {
//   // Rest of your code to query the database
//   return prisma.demand_cube.groupBy({
//    by: ["bucket", "customer"],
//     where: {
//       customer: {
//         in: [customer],
//       },
//     },
//     _sum: {
//       mkt_fcst_qty: true,
//     },
//   });
// }


  