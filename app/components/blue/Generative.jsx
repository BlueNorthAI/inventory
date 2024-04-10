import { Link } from "@remix-run/react";

import { Icon } from "../blue/Icon";
import ai from "../../images/generateAi.png";


const kpiCards = [
  {
    title: "Revenue lift",
    icon: "perform",
    to: "/",
    description:
      "Increase topline sales through faster reaction to market trends and power sales growth by having the right amount of products available to satisfy consumer demand.",
  },
  {
    title: "Improved margin rates",
    icon: "perform",
    to: "/",
    description:
      "Improve product mix to drive margins and preserve gross margin rates by reducing the need for clearance markdowns.",
  },
  {
    title: "Cost Savings",
    icon: "perform",
    to: "/",
    description:
      "Optimize inventory positions and improve inventory visibility to reduce logistics expenses.",
  },
  {
    title: "End-to-end visibility",
    icon: "perform",
    to: "/",
    description:
      "Visualize the entire flow of goods upstream and downstream with one version of the truth.",
  },
  {
    title: "Predict overstock",
    icon: "perform",
    to: "/",
    description:
      "With insight into when inventory will expire, predict overstocks to reduce Inventory and increase service levels for higher operational efficiency.",
  },
  {
    title: "Improved planner efficiency",
    icon: "perform",
    to: "/",
    description:
      "Leverage automation and predictive decision-making to decrease manual interventions and quicker task completion.",
  },
];

export default function Generative() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Perform - Execution Engine
        </p>
      </header>
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Generative AI Based Control Tower
            </p>
            <p className="mt-2 text-lg  text-slate-800 dark:text-white">
              Across industries, organizations like yours are pivoting to manage
              increasingly complex supply chains, while juggling delivery
              expectations and cost.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center rounded-xl">
          <div className="not-prose flex items-center ">
            <img
              className="rounded-lg"
              src={ai}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

      <div className="border-b border-black my-12"></div>

   
      <h1 className="font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Organizational Impact
      </h1>
      <div className="my-8 grid grid-cols-2 gap-4 ">
        {kpiCards.map((kpi) => (
          <div
            key={kpi.title}
            className="rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 "
          >
            <div className="flex overflow-hidden rounded-xl">
              <Icon icon={kpi.icon} className="h-10 w-10" />
              <p className="m-0 font-display text-xl text-sky-900 dark:text-sky-400">
                {kpi.title}
              </p>
            </div>
            <div className="mt-2.5 text-sky-800 dark:text-slate-300 ">
              {kpi.description}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
