import type { LoaderFunctionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

// import { auth } from '@/auth'
import { Chat } from "~/components/chat";
import { SidebarDesktop } from "~/components/sidebar-desktop";
import { getChat, getChats } from "~/models/chat.server";
import { requireUserId } from "~/session.server";

export interface ChatPageProps {
  params: {
    id: string;
  };
}

export const loader = async ({ request, params }: LoaderFunctionArgs) => {
  const userId = await requireUserId(request);
  const id = params.id;
  const chat = await getChat(id ?? "", userId);
  const chats = await getChats(userId);
  // console.log("Inside chat id page", chat);
  if (!chat) {
    throw new Response("Not Found", { status: 404 });
  }
  if (!chats) {
    throw new Response("Not Found", { status: 404 });
  }

  return json({ chat, chats });
};

// export async function generateMetadata({
//   params
// }: ChatPageProps): Promise<Metadata> {
//   const session = await auth()

//   if (!session?.user) {
//     return {}
//   }

//   const chat = await getChat(params.id, session.user.id)
//   return {
//     title: chat?.title.toString().slice(0, 50) ?? 'Chat'
//   }
// }

export default function ChatPage() {
  const { chat } = useLoaderData<typeof loader>();

  const messages = chat.messages.map((message) => ({
    ...message,
    createdAt: message.createdAt ? new Date(message.createdAt) : undefined,
    ui: message.ui ? JSON.stringify(message.ui) : undefined, // Convert ui to string
  }));

  return (
    <div className="relative flex h-[calc(100vh_-_theme(spacing.16))] overflow-hidden">
      <SidebarDesktop />
      <div className="group w-full overflow-auto pl-0 animate-in duration-300 ease-in-out peer-[[data-state=open]]:lg:pl-[250px] peer-[[data-state=open]]:xl:pl-[300px]">
        <Chat id={chat.id} initialMessages={messages} />
      </div>
    </div>
  );
}
