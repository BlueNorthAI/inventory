import { useLoaderData } from "@remix-run/react";
import { getInput } from "~/models/input.server";
import { createScenario } from "~/models/scenario.server";
import { json, redirect } from "@remix-run/node";
import SnopForm from "~/components/snop/SnopForm";



function convertToNumbers(obj) {
  const numericFields = [
    "Jan","Feb","Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
    "material_cost_pu",
    "inv_hold_cost_pupm",
    "stockout_cost_pupm",
    "hiring_cost_pw",
    "firing_cost_pw",
    "worker_cost_pm",
    "overtime_cost_phr",
    "outsourcing_cost_pu",
    "max_work_hrs_pwpm",
    "max_overtime_hrs_pwpm",
    "inventory_start",
    "inventory_end",
    "backlog_start",
    "backlog_end",
    "num_workers_start",
    "min_end_workers",
    "max_end_workers",
    "labor_hrs_pu",
  ];

  const converted = { ...obj };

  numericFields.forEach((field) => {
    if (converted[field]) {
      converted[field] = parseFloat(converted[field]);
    }
  });

  return converted;
}
export const loader = async () => {
  const snopInput = await getInput();
  // console.log(snopInput);

  return json({ snopInput });
};

export const action = async ({ request }: { request: Request }) => {
  const formData = await request.formData();
  const updates = convertToNumbers(Object.fromEntries(formData));
  await createScenario(updates);
  // console.log(updates)
  return redirect(`/inventory/scenario`);
};

export default function SnopInput() {
  const { snopInput } = useLoaderData<typeof loader>();

  return (
    <SnopForm inputData={snopInput} />
  );
}
