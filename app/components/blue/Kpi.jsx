import { Link } from "@remix-run/react";

import kpi from "../../images/kpicard.png";

const trans = [
  {
    title: "Administrative Cost Reduction",
    icon: "impact",
    to: "/",
    description: "7%",
  },
  {
    title: "Annual Cost Reduction",
    icon: "impact",
    to: "/",
    description: "10%",
  },
  {
    title: "Improved Service Levels",
    icon: "impact",
    to: "/",
    description: "35%",
  },
  {
    title: "Cost Reduction",
    icon: "impact",
    to: "/",
    description: "45%",
  },
  {
    title: "Increased Productivity",
    icon: "impact",
    to: "/",
    description: "10%",
  },
  {
    title: "Improved Accuracy",
    icon: "impact",
    to: "/",
    description: "90%",
  },
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%",
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%",
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45",
  },
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
  {
    title: "Improved Margin",
    icon: "impact",
    to: "/",
    description: "8%",
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%",
  },
  {
    title: "Reduced Reporting Time",
    icon: "impact",
    to: "/",
    description: "20%",
  },
  {
    title: "Inventory Reduction",
    icon: "impact",
    to: "/",
    description: "5%",
  },
  {
    title: "Productivity Improvement",
    icon: "impact",
    to: "/",
    description: "50%",
  },
  {
    title: "Increase in Allocation Accuracy",
    icon: "impact",
    to: "/",
    description: "25%",
  },
  {
    title: "Return on Investment",
    icon: "impact",
    to: "/",
    description: "250%",
  },
  {
    title: "Faster Approval Times",
    icon: "impact",
    to: "/",
    description: "50%",
  },
  {
    title: "Reduced Inventory",
    icon: "impact",
    to: "/",
    description: "45%",
  },
];



export default function Kpi() {
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
              Cascaded KPI Scorecard
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
              src={kpi}
              alt=""
              width={800}
              height={800}
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

     
    </>
  );
}
