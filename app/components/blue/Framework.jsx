import trianglepng from "../../images/trianglepng.png";

import { Link } from "@remix-run/react";

import { Icon } from "./Icon";

export default function Framework() {
  return (
    <>
      <div className="flex">
        <div className="not-prose ml-4 flex items-center justify-start">
          <img src={trianglepng} alt="" width={1000} height={1000} />
        </div>
        <div className="my-6 py-4">
          <div className="m-2 mb-4 grid grid-cols-2 gap-2 lg:grid-cols-1">
            <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-4">
                <Icon icon="probe" className="h-16 w-16" />

                <h2 className="not-prose font-display text-base text-slate-900 dark:text-white">
                  <Link to="/home/transport">
                    <span className="absolute -inset-px rounded-xl" />
                    Probe
                  </Link>
                </h2>
                <p className="not-prose mt-1 text-sm text-slate-700 dark:text-slate-400">
                  Step-by-step guides to setting up your system and installing
                  the library.
                </p>
              </div>
            </div>

            <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-4">
                <Icon icon="plan" className="h-16 w-16" />

                <h2 className="not-prose font-display text-base text-slate-900 dark:text-white">
                  <Link to="/home/production">
                    <span className="absolute -inset-px rounded-xl" />
                    Plan
                  </Link>
                </h2>
                <p className="not-prose mt-1 text-sm text-slate-700 dark:text-slate-400">
                  Learn how the internals work and contribute.
                </p>
              </div>
            </div>

            <div className="group relative rounded-xl border border-slate-200 dark:border-slate-800">
              <div className="absolute -inset-px rounded-xl border-2 border-transparent opacity-0 [background:linear-gradient(var(--quick-links-hover-bg,theme(colors.sky.50)),var(--quick-links-hover-bg,theme(colors.sky.50)))_padding-box,linear-gradient(to_top,theme(colors.indigo.400),theme(colors.cyan.400),theme(colors.sky.500))_border-box] group-hover:opacity-100 dark:[--quick-links-hover-bg:theme(colors.slate.800)]" />
              <div className="relative overflow-hidden rounded-xl p-4">
                <Icon icon="perform" className="h-16 w-16" />

                <h2 className="not-prose font-display text-base text-slate-900 dark:text-white">
                  <Link to="/home/production">
                    <span className="absolute -inset-px rounded-xl" />
                    Perform
                  </Link>
                </h2>
                <p className="not-prose mt-1 text-sm text-slate-700 dark:text-slate-400">
                  Extend the library with third-party plugins or write your own.
                </p>
              </div>
            </div>
          </div>
        </div>
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
