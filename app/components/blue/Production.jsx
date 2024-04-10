import { Link } from "@remix-run/react";

import { Icon } from "../blue/Icon";
import production from "../../images/productionplaning.png";

const trans = [
  {
    title: "Reduced Changeover Time",
    icon: "impact",
    to: "/",
    description: "32%%",
  },
  {
    title: "Reduced Production Scheduling",
    icon: "impact",
    to: "/",
    description: "-25%",
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "35%",
  },
];


const kpiCards = [
  {
    title: "Improved visibility",
    icon: "perform",
    to: "/",
    description:
      "Gain visibility into material and capacity issues sooner and easily integrate with MES systems to improve order fulfillment.",
  },
  {
    title: "Optimized upstream and downstream productivity",
    icon: "perform",
    to: "/",
    description:
      "Coordinate schedules among various facilities, reduce inventory and work-in-process while minimizing equipment changeovers.",
  },
  {
    title: "Faster response time",
    icon: "perform",
    to: "/",
    description:
      "Modify rules, assess different scenarios and respond in real-time to any changes on the shop floor.",
  },
  {
    title: "Improved asset efficiency",
    icon: "perform",
    to: "/",
    description:
      "Improve asset utilization and productivity with advanced simulation capabilities to test the results of what-if scenarios before implementing a plan.",
  },
  {
    title: "Faster response",
    icon: "perform",
    to: "/",
    description:
      "Re-sequence customer orders within minutes to continuously adapt to changes in the supply chain.",
  },
  {
    title: "Reduced costs",
    icon: "perform",
    to: "/",
    description:
      "Reduce operating costs with the ability to factor in complex constraints and faster response times to changing demand and supply conditions.",
  },
];
export default function Production() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Plan - Optimization Engine
        </p>
      </header>
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div className="">
          <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
            Production Planning
          </p>
          <p className="mt-2 text-lg  text-slate-800 dark:text-white">
            With shrinking product lifecycles, demand fluctuations and more
            granular customer segmentation, organizations like yours depend on
            intelligent decision support for their essential production.
          </p>
        </div>

        <div className="col-span-2 flex rounded-xl">
          <div className="not-prose flex items-center ">
            <img
              className="rounded-lg"
              src={production}
              alt=""
              width={800}
              height={100}
            />
          </div>
        </div>
      </div>

      <div className="border-b border-black my-12"></div>

      <h1 className="font-bold font-display text-3xl tracking-tight text-slate-900 dark:text-white">
        Quantitative Impact
      </h1>

      <div>
        <div className="my-6 grid grid-cols-2 gap-6 lg:grid-cols-3">
          {trans.map((truck) => (
            <div
              key={truck.title}
              className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
            >
              <div className="absolute -inset-px rounded-xl border-2 border-sky-950" />

              <div className="relative overflow-hidden rounded-xl p-4">
                <h2 className="flex justify-center font-display text-base text-slate-900 dark:text-white">
                  <Link to={truck.to}>
                    <span className="absolute -inset-px rounded-xl" />
                    {truck.title}
                  </Link>
                </h2>
                <div className="flex justify-center">
                  <p className="p-1 inline-block bg-gradient-blue bg-clip-text text-6xl font-bold text-slate-700 dark:text-transparent">
                    {truck.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
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
