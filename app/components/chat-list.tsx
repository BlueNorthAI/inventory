import { Message } from "ai";

import { ChatMessage } from "~/components/chat-message";
import { Separator } from "~/components/ui/separator";

interface ChatListProps {
  messages: Message[];
}

export const ChatList: React.FC<ChatListProps> = ({
  messages,
}: ChatListProps) => {
  // Code inside the component
  if (!messages.length) {
    return null;
  }

  return (
    <div className="relative mx-auto max-w-4xl px-4">
      {messages.map((message, index) => (
        <div key={index}>
          <ChatMessage message={message} />
          {/* {index < messages.length - 1 ? (
            <Separator className="my-4 md:my-8" />
          ) : null} */}
        </div>
      ))}
    </div>
  );
};
