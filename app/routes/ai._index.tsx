import { LoaderFunctionArgs, json } from "@remix-run/node";

import { Chat } from "~/components/chat";
import { SidebarDesktop } from "~/components/sidebar-desktop";
import { nanoid } from "~/lib/utils";
import { getChats, shareChat } from "~/models/chat.server";
import { requireUserId } from "~/session.server";

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   const userId = await requireUserId(request);
//   const chats = await getChats(userId);

//   if (!chats) {
//     throw new Response("Not Found", { status: 404 });
//   }

//   return json({ chats });
// };
export const loader = async ({ request }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  // const chat = await getChat(id ?? "", userId);
  const chats = await getChats(userId);
  const shareChatFn = shareChat
  // if (!chat) {
  //   throw new Response("Not Found", { status: 404 });
  // }
  if (!chats) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ chats, shareChatFn});
};

export default function ChatLayout() {
  const id = nanoid();
  // console.log("id", id);
  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        <Chat id={id} />
      </div>
    </div>
  );
}
