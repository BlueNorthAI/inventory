import { useLoaderData } from "@remix-run/react";
import { json } from "@remix-run/node";

import { getScenarioById } from "~/models/scenario.server";
import SnopForm from "~/components/snop/SnopForm";

export const loader = async ({ params }) => {
  // console.log(params.scenId);
  const scenarioData = await getScenarioById(params.scenId);
  // console.log(scenarioData);

  return json({ scenarioData });
};

export const action = async ({ request }) => {
  const body = new URLSearchParams(await request.text());
  // console.log(body);
  return json({ body });
}

export default function UpdateScenario() {

  const { scenarioData } = useLoaderData<typeof loader>();


  return (
    <SnopForm inputData={scenarioData}/>
      );
}