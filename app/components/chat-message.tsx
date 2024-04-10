import { Message } from "ai";
import { HTMLAttributes } from "react";
import { ChatMessageActions } from "~/components/chat-message-actions";
import { MemoizedReactMarkdown } from "~/components/markdown";
import { CodeBlock } from "~/components/ui/codeblock";
import { IconUser } from "~/components/ui/icons";
import { cn } from "~/lib/utils";

export interface ChatMessageProps {
  message: Message;
}

interface CodeComponentProps extends HTMLAttributes<HTMLElement> {
  node?: unknown; // Adjust the type according to your usage or the structure of your AST nodes
  inline?: boolean;
  className?: string;
  children: React.ReactNode;
}

export function ChatMessage({ message, ...props }: ChatMessageProps) {
  return (
    <div
      className={cn("group relative mb-4 flex items-start md:-ml-12")}
      {...props}
    >
      <div
        className={cn(
          "flex items-center justify-center  rounded-full shadow-lg  border",
          message.role === "user"
            ? "bg-background"
            : "bg-primary text-primary-foreground",
        )}
      >
        {message.role === "user" ? (
          <div className="relative flex  h-12 w-12  items-center justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <IconUser className="mx-auto bg-white h-11 w-11 justify-center rounded-full p-1.5" />
            </div>
          </div>
        ) : (
          <div className="relative flex  h-12 w-12  items-center justify-center rounded-full">
            <div className="flex items-center justify-center  rounded-full bg-gradient-to-t from-indigo-400 via-cyan-400 to-sky-500 shadow-lg p-0.5">
              <img
                className="mx-auto bg-white h-11 w-11 justify-center rounded-full p-1.5"
                src={"/assets/logo-4.png"}
                alt="logo"
              />
            </div>
          </div>
        )}
      </div>

      <div className="mx-2 w-full  rounded-lg flex-1 space-y-2 overflow-hidden">
        <MemoizedReactMarkdown
          className="flex w-full flex-col relative bg-white p-4 shadow rounded-lg prose break-words dark:prose-invert prose-p:leading-relaxed prose-pre:p-0 text-lg border"
          // remarkPlugins={[remarkGfm, remarkMath]}
          components={{
            p({ children }: { children: React.ReactNode }) {
              return <p className="mb-2 last:mb-0">{children}</p>;
            },
            code({
              inline,
              className,
              children,
              ...props
            }: CodeComponentProps) {
              if (Array.isArray(children) && children.length) {
                if (children[0] === "▍") {
                  return (
                    <span className="mt-1 cursor-default animate-pulse">▍</span>
                  );
                }

                children[0] = (children[0] as string).replace("`▍`", "▍");
              }

              const match = /language-(\w+)/.exec(className || "");

              if (inline) {
                return (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }

              return (
                <CodeBlock
                  key={Math.random()}
                  language={(match && match[1]) || ""}
                  value={String(children).replace(/\n$/, "")}
                  {...props}
                />
              );
            },
          }}
        >
          {message.content}
        </MemoizedReactMarkdown>
        <ChatMessageActions message={message} />
      </div>
    </div> 
  );
}
