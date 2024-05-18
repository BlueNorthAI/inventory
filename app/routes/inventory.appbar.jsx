import {
  BanknotesIcon,
  DocumentMagnifyingGlassIcon,
  PresentationChartLineIcon,
  CubeIcon,
  ArchiveBoxArrowDownIcon,
  ShoppingCartIcon,
  SpeakerWaveIcon,
  ArrowUpRightIcon,
  ScaleIcon,
  ArrowTrendingUpIcon
} from "@heroicons/react/20/solid";
import { Link } from "@remix-run/react";

const actions = [
  {
    icon: DocumentMagnifyingGlassIcon,
    name: "Overview",
    to: "/snop/dashboard/overview",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
    description:
      "Get a comprehensive overview of your dashboard metrics and performance indicators.",
  },
  {
    icon: PresentationChartLineIcon,
    name: "Demand",
    to: "/snop/dashboard/demand",
    iconForeground: "text-green-700",
    iconBackground: "bg-green-100",
    description:
      "Analyze demand forecasts and trends to optimize your supply chain and inventory levels.",
  },
  {
    icon: CubeIcon,
    name: "Supply",
    to: "/snop/dashboard/supply",
    iconForeground: "text-rose-500",
    iconBackground: "bg-rose-100",
    description:
      "Monitor your supply chain operations, including supplier performance and material availability.",
  },
  {
    icon: ArchiveBoxArrowDownIcon,
    name: "Inventory",
    to: "/snop/dashboard/inventory",
    iconForeground: "text-yellow-600",
    iconBackground: "bg-yellow-100",
    description:
      "Manage your inventory levels efficiently to meet demand without overstocking.",
  },
  {
    icon: ShoppingCartIcon,
    name: "Spend",
    to: "/snop/dashboard/spend",
    iconForeground: "text-gray-700",
    iconBackground: "bg-gray-300",
    description:
      "Track and analyze your company's spending to identify cost-saving opportunities.",
  },
  {
    icon: BanknotesIcon,
    name: "Finance",
    to: "/snop/dashboard/finance",
    iconForeground: "text-blue-700",
    iconBackground: "bg-blue-100",
    description:
      "Gain insights into financial performance, including revenue, expenses, and profitability.",
  },
  {
    icon: ArrowTrendingUpIcon,
    name: "Sales & Marketing",
    to: "/snop/dashboard/sales",
    iconForeground: "text-sky-600",
    iconBackground: "bg-sky-100",
    description:
      "Evaluate the effectiveness of sales and marketing campaigns and strategies.",
  },
  {
    icon: SpeakerWaveIcon,
    name: "Campaign",
    to: "/snop/dashboard/campaign",
    iconForeground: "text-violet-700",
    iconBackground: "bg-violet-100",
    description:
      "Plan and monitor marketing campaigns to enhance brand visibility and lead generation.",
  },
  {
    icon: ScaleIcon,
    name: "Balance Sheet",
    to: "/snop/dashboard/balance",
    iconForeground: "text-orange-700",
    iconBackground: "bg-orange-100",
    description:
      "Review the balance sheet for a snapshot of the company's financial health at a specific point in time.",
  },
  {
    icon: BanknotesIcon,
    name: "Manufacturing Analytics",
    to: "/snop/dashboard/mfg",
    iconForeground: "text-lime-700",
    iconBackground: "bg-lime-100",
    description:
      "Analyze manufacturing processes and metrics to improve efficiency and product quality.",
  },
  {
    icon: BanknotesIcon,
    name: "My P&L",
    to: "/snop/dashboard/mypl",
    iconForeground: "text-purple-700",
    iconBackground: "bg-purple-100",
    description:
      "Personalize profit and loss statements to understand your impact on the company's bottom line.",
  },
  {
    icon: BanknotesIcon,
    name: "Order-to-Cash",
    to: "/snop/dashboard/order",
    iconForeground: "text-pink-700",
    iconBackground: "bg-pink-100",
    description:
      "Optimize the order-to-cash process to improve cash flow and customer satisfaction.",
  },
  {
    icon: BanknotesIcon,
    name: "Payables",
    to: "/snop/dashboard/payables",
    iconForeground: "text-indigo-700",
    iconBackground: "bg-indigo-100",
    description:
      "Manage accounts payable to maintain good supplier relationships and manage cash flow.",
  },
  {
    icon: BanknotesIcon,
    name: "Profit",
    to: "/snop/dashboard/profit",
    iconForeground: "text-red-700",
    iconBackground: "bg-red-100",
    description:
      "Focus on profitability metrics to drive financial success and operational improvements.",
  },
];


function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
export default function Appbar() {
  return (
    <>
      <div className="mx-4 mt-2 rounded-lg bg-white shadow  ">
        <div className="flex items-center justify-between p-2  ">
          <div className="m-2 flex-1">
            <h2 className="text-3xl font-bold leading-7 text-gray-800 ">
              Appbar
            </h2>
          </div>
        </div>
      </div>

      <div className="m-4 ">
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-4 ">
          {actions.map((action) => (
            <li
              key={action.name}
              className="overflow-hidden rounded-xl border border-gray-200 bg-white hover:bg-gray-100 "
            >
              <Link to={action.to} className="focus:outline-none">
                <div className="flex items-center border-b border-gray-900/5 p-6">
                  <span
                    className={classNames(
                      action.iconBackground,
                      action.iconForeground,
                      "inline-flex rounded-lg p-2",
                    )}
                  >
                    <action.icon
                      className="h-8 w-8 flex-none rounded-lg"
                      aria-hidden="true"
                    />
                  </span>
                  <div className="ml-4 text-xl font-semibold text-gray-900">
                    {action.name}
                  </div>
                  <div className="relative ml-auto">
                    <button className="-m-2.5 block p-2.5 text-gray-400 hover:text-gray-500">
                      <ArrowUpRightIcon
                        className="h-6 w-6"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </div>

                <div className="px-6 py-4">
                  <p className="text-base text-gray-500">
                    {action.description}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
