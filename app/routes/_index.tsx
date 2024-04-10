import { LinksFunction } from "@remix-run/node";

import { Layout } from "../components/blue/Layout";

import layoutStylesheetUrl from "../styles/layout.css";


export const links: LinksFunction = () => [

  { rel: "stylesheet", href: layoutStylesheetUrl },
];

export default function Index() {
  return (
    <div className="h-full bg-white dark:bg-slate-900">
      <Layout />
    </div>
  );
}
