import { Link } from "@remix-run/react";
import truck from "../../images/truck.png";
import { Icon } from "../blue/Icon";

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
];


const kpiCards = [
  {
    title: "Improved visibility",
    icon: "perform",
    to: "/",
    description: "Gain visibility into material and capacity issues sooner and easily integrate with MES systems to improve order fulfillment.",
  },
  {
    title: "Automated and AI-assisted actions",
    icon: "perform",
    to: "/",
    description: "Improve efficiency and reduce spend with automated freight consolidation, rate negotiation and AI-assisted planning.",
  },
  {
    title: "Dynamic routes and rates",
    icon: "perform",
    to: "/",
    description: "Balance supply and demand of transportation resources and automate highly manual partner processes.",
  },
  {
    title: "Optimized operations ",
    icon: "perform",
    to: "/",
    description: "Change the game with advanced routing and container optimization, which considers inventory, orders and availability.",
  },
   {
    title: "Optimized transportation costs",
    icon: "perform",
    to: "/",
    description: "Predictive modeling and integrated business analytics enable precise network performance evaluation and savings.",
  },
    {
    title: "Deliver a connected ecosystem",
    icon: "perform",
    to: "/",
    description: "Access a digitally-enabled ecosystem that provides dynamic capacity and price through a connected network.",
  },
  
];
export default function Transportation() {
  return (
    <>
      <header className="space-y-1">
        <p className="font-display text-sm font-medium text-sky-500">
          Probe - Diagnostic Engine
        </p>
      </header>
      <div className="lg:flex grid grid-cols-3 gap-2">
        <div>
          <div className="relative ">
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Transportation Diagnostic
            </p>
            <p className="mt-2 text-lg  dark:text-white text-slate-800">
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
              src={truck}
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
        <div key={kpi.title} className="rounded-xl bg-sky-50 p-6 lg:grid-cols-3 dark:bg-slate-800/60 dark:ring-1 dark:ring-slate-300/10 ">
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