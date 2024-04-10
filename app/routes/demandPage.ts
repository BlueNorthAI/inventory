import { json } from "@remix-run/node";
import { prisma } from "../db.server";
import { demand_cube } from "@prisma/client";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const customer = formData.get("customer");
  const site = formData.get("site");
  const sku = formData.get("sku");
  const bucket = Number(formData.get("bucket"));

  const field = formData.get("field");
  // const newValue = parseFloat(formData.get("newValue"));
  const newValue =
    field === "selling_price" ||
    field === "fcst_accuracy" ||
    field === "ontime_infull" ||
    field === "ord_invoice_cycle_time" ||
    field === "ship_chnl_qty" ||
    field === "gross_sales" ||
    field === "mape"
      ? parseFloat(formData.get("newValue"))
      : formData.get("newValue"); // Convert to Float if the field is a Float type, otherwise take the value as is

  try {
    const updatedRecord = await prisma.demand_cube.update({
      where: {
        customer_site_sku_bucket: {
          // This should match your composite ID structure
          customer,
          site,
          sku,
          bucket,
        },
      },
      data: { [field]: newValue },
    });

    return json({ success: true, updatedRecord });
  } catch (error) {
    console.error("Failed to update record:", error);
    return json(
      { success: false, error: "Failed to update record" },
      { status: 500 }
    );
  }
};

export async function loader({ request }) {
  console.log("inside loader", request.url);
  const url = new URL(request.url);
  const page = Number(url.searchParams.get("page")) || 1;
  const limit = Number(url.searchParams.get("limit")) || 20; // Default to 10 rows per page

  const skip = (page - 1) * limit;

  // Fetching the subset of records for the specified page
  const data = await prisma.demand_cube.findMany({
    skip: skip,
    // take: limit,
    select: {
      customer: true,
      site: true,
      sku: true,
      bucket: true,
      order_id: true,
      booking_id: true,
      selling_price: true,
    },
  });

  // Fetching the total count of records
  const totalCount = await prisma.demand_cube.count();

  return {
    data,
    totalCount,
    page,
    totalPages: Math.ceil(totalCount / limit),
  };
}
