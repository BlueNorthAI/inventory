import warehousing from "../../images/warehousing.png";
import { Link } from "@remix-run/react";
import { Icon } from "../blue/Icon";

const trans = [
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
];

const kpiCards = [
  {
    title: "Optimized customer service",
    icon: "perform",
    to: "/",
    description:
      "Support multiple pick methods for travel time reduction and pick efficiency.",
  },
  {
    title: "Maximized control and visibility",
    icon: "perform",
    to: "/",
    description:
      "Gain end-to-end control and visibility with improved management of inventory, quality, date/lot, and assets.",
  },
  {
    title: "Optimized receipt processing and storage",
    icon: "perform",
    to: "/",
    description:
      "Cross dock to identify opportunities and critical loads with priority inventory.",
  },
  {
    title: "Improved inbound and outbound processing",
    icon: "perform",
    to: "/",
    description:
      "Gain shipment visibility to ensure accuracy, timeliness, efficiency and compliance.",
  },
  {
    title: "Optimized operation efficiency",
    icon: "perform",
    to: "/",
    description:
      "Digitize distribution centers and optimize operation steps to ensure accuracy, efficiency, compliance and service.",
  },
  {
    title: "Streamlined processes",
    icon: "perform",
    to: "/",
    description:
      "Manage all aspects of the yard, from gate check-in and check-out to yard and dock location assignments from wireless devices.",
  },
];

export default function Warehousing() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Probe - Diagnostic Engine
        </p>
      </header>
      <div className="grid grid-cols-3 gap-2 lg:flex">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight text-slate-900 dark:text-transparent">
              Warehousing
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
              src={warehousing}
              alt=""
              width={800}
              height={800}
            />
          </div>
        </div>
      </div>

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
