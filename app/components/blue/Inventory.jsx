import inventory from "../../images/inventory.png"
import { Icon } from "../blue/Icon";
import { Link } from "@remix-run/react";

const trans = [
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
];

const kpiCards = [
  {
    title: "Increased forecast accuracy",
    icon: "perform",
    to: "/",
    description:
      "Dynamic segmentation enables increased forecast accuracy, allowing you to achieve more accurate inventory positioning in the network and higher fill rates.",
  },
  {
    title: "Strategic plan alignment",
    icon: "perform",
    to: "/",
    description:
      "Align inventory planning, inventory strategy, and inventory execution with your strategic business goals for service, production, and distribution.",
  },
  {
    title: "Reduced inventory and waste",
    icon: "perform",
    to: "/",
    description:
      "Eliminate excess inventory and reduce obsolescence costs while maintaining a high level of customer service.",
  },
  {
    title: "Improved customer service",
    icon: "perform",
    to: "/",
    description:
      "Service-level aware inventory positioning combined with predict and pivot capabilities ensures higher fill rates and better OTIF.",
  },
  {
    title: "Improved flexibility and accuracy",
    icon: "perform",
    to: "/",
    description:
      "Quickly adapt inventory policies and stocking strategies to address changing market conditions.",
  },
  {
    title: "Optimized inventory investment",
    icon: "perform",
    to: "/",
    description:
      "Reduce inventory investment through multi-echelon inventory optimization and dynamic segmentation.",
  },
];

export default function Inventory() {
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
            <p className="inline bg-gradient-to-r from-indigo-200 via-sky-400 to-indigo-200 bg-clip-text font-display text-5xl font-bold tracking-tight dark:text-transparent text-slate-900">
              Inventory
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
              src={inventory}
              alt=""
              width={800}
              height={300}
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

// export function CardLink() {
//   return (
//     <div className="not-prose my-12 grid grid-cols-2 gap-6 lg:grid-cols-3">
//       {stats.map((item) => (
//         <div
//           key={item.id}
//           className="group relative rounded-xl border border-slate-200 dark:border-slate-800"
//         >
//           <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
//           <div className="relative overflow-hidden rounded-xl p-6">
//             <item.icon className="h-16 w-16" />
//             <h2 className="font-display text-base text-slate-900 dark:text-white">
//               <Link href={item.href}>
//                 <span className="absolute -inset-px rounded-xl" />
//                 {item.title}
//               </Link>
//             </h2>
//             <p className="mt-1 text-sm text-slate-700 dark:text-slate-400">
//               {item.description}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
