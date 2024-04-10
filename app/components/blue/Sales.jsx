import sales from '../../images/salesopplanning.png'
import { Link } from "@remix-run/react";

import { Icon } from "../blue/Icon";

const trans = [
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
];

const kpiCards = [
  {
    title: "Mature S&OP process",
    icon: "perform",
    to: "/",
    description:
      "Continuously improve S&OP processes by moving toward an advanced Integrated Business Planning (IBP) paradigm.",
  },
  {
    title: "Optimized decision making",
    icon: "perform",
    to: "/",
    description:
      "Develop a digital twin capable of taking real-time inputs to run scenarios that accurately mirror the performance of the network, enabling more accurate decision making.",
  },
  {
    title: "Improved business alignment",
    icon: "perform",
    to: "/",
    description:
      "Cascade S&OP/IBP outputs across the supply chain to ensure strategic alignment and outcome-oriented decision making.",
  },
  {
    title: "Strategic conformance to business plan",
    icon: "perform",
    to: "/",
    description:
      "Implement systems that drive long term alignment to help advance strategic goals.",
  },
  {
    title: "Profitable decision making",
    icon: "perform",
    to: "/",
    description:
      "Profitable decision making",
  },
  {
    title: "Financial plan support",
    icon: "perform",
    to: "/",
    description:
      "Ensure planning and re-alignment drive toward revenue and margin targets while optimizing free cash flow.",
  },
];


export default function Sales() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Plan - Optimization Engine
        </p>
      </header>
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Sales & Operations Planning
            </p>
            <p className="mt-2 text-lg  text-slate-800 dark:text-white">
              When potential risks, opportunities or threats change your supply
              chain plan, organizations like yours must act quickly and
              decisively to get back on track.
            </p>
          </div>
        </div>
        <div className="col-span-2 flex items-center rounded-xl">
          <div className="not-prose flex items-center ">
            <img
              className="rounded-lg"
              src={sales}
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
