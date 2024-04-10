// import { type Metadata } from 'next'
// import { notFound } from 'next/navigation'
import { type LoaderFunctionArgs, json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

import { ChatList } from "~/components/chat-list";
import { FooterText } from "~/components/footer";
import { formatDate } from "~/lib/utils";
import { getSharedChat } from "~/models/chat.server";

// interface SharePageProps {
//   params: {
//     id: string
//   }
// }

// export async function generateMetadata({
//   params
// }: SharePageProps): Promise<Metadata> {
//   const chat = await getSharedChat(params.id)

//   return {
//     title: chat?.title.slice(0, 50) ?? 'Chat'
//   }
// }

export const loader = async ({ params }: LoaderFunctionArgs) => {
  const chat = await getSharedChat(params.id ?? "");

  if (!chat || !chat?.sharePath) {
    return {
      error: "No chat found",
    };
  }
  return json(chat);
};

export default function SharePage() {
  const chat = useLoaderData<typeof loader>();

  return (
    <>
      <div className="flex-1 space-y-6">
        <div className="px-4 py-6 border-b bg-background md:px-6 md:py-8">
          <div className="max-w-2xl mx-auto md:px-6">
            <div className="space-y-1 md:-mx-8">
              {chat && "title" in chat ? (
                <h1 className="text-2xl font-bold">{chat.title}</h1>
              ) : null}
              <div className="text-sm text-muted-foreground">
                {chat && "createdAt" in chat && "messages" in chat ? (
                  <>
                    {formatDate(chat.createdAt)} · {chat.messages.length}{" "}
                    messages
                  </>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        {chat && "messages" in chat ? (
          <ChatList messages={chat.messages} />
        ) : null}
      </div>
      <FooterText className="py-8" />
    </>
  );
}
