import type { ActionFunctionArgs, LinksFunction } from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import { Outlet } from "@remix-run/react";
import { Toaster } from "react-hot-toast";

import { Header } from "~/components/header";
import { Providers } from "~/components/providers";
import { nanoid } from "~/lib/utils";
import { clearChats, removeChat, shareChat } from "~/models/chat.server";
import { requireUserId } from "~/session.server";



// // eslint-disable-next-line import/no-unresolved
// import tailwindStylesheetUrl from "./tailwind.css";

// export const links: LinksFunction = () => [
//   { rel: "stylesheet", href: tailwindStylesheetUrl },

//   // { rel: "stylesheet", href: layoutStylesheetUrl },
// ];
export const action = async ({ request }: ActionFunctionArgs) => {
  const userId = await requireUserId(request);
  const formData = await request.formData();
  const id = String(formData.get("id"));
  // const path = String(formData.get("path"));
  const intent = String(formData.get("intent"));

  if (intent === "delete") {
    const result = await removeChat({ id, userId: userId });
    return json({ result });
  }

  if (intent === "share") {
    const result = await shareChat(id, userId);
    console.log("result", result);
    return json({ result });
  }

  if (intent === "clear") {
    const result = await clearChats(userId);
    return json({ result });
  }

  // Return a success response
  return redirect("/ai");
};

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const userId = await requireUserId(request);
//   const chats = await getChats(userId);
//   console.log("chats", chats, userId);

//   return json({ chats });
// };

// export const action = async ({ request }: LoaderFunctionArgs) => {
//   const userId = await requireUserId(request);
//   const formData = await request.formData();
//   const id = String(formData.get("id"));
//   const intent = String(formData.get("intent"));

//   if (intent === "delete") {
//     const result = await removeChat({ id, userId: userId });
//     if (result && "error" in result) {
//       return json({ error: result.error }, { status: 400 });
//     }
//   }

//   if (intent === "share") {
//     const result = await shareChat(id, userId);
//     if (result && "error" in result) {
//       return json({ error: result.error }, { status: 400 });
//     }
//   }
//   return redirect("/");
// }

export default function Ai() {
  // const user = useUser();
  const id = nanoid();
  console.log("id", id);
  return (
    <div>
      <Toaster />
      <Providers
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex flex-col flex-1 bg-muted/50">
            <Outlet />
          </main>
        </div>
      </Providers>
    </div>
  );
}
