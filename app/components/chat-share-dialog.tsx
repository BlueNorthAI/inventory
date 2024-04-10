// "use client";

import { type DialogProps } from "@radix-ui/react-dialog";
import { useFetcher } from "@remix-run/react";
import * as React from "react";
import { toast } from "react-hot-toast";

import { Button } from "~/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "~/components/ui/dialog";
import { IconSpinner } from "~/components/ui/icons";
import { useCopyToClipboard } from "~/lib/hooks/use-copy-to-clipboard";
import { type JsonifyChat } from "~/lib/types";
import { useUser } from "~/utils";

interface ChatShareDialogProps extends DialogProps {
  chat: Pick<JsonifyChat, "id" | "title" | "messages">;
  // shareChat: (id: string, userId: string) => ServerActionResult<JsonifyChat>;
  onCopy: () => void;
}

export function ChatShareDialog({
  chat,
  // shareChat,
  onCopy,
  ...props
}: ChatShareDialogProps) {
  const { copyToClipboard } = useCopyToClipboard({ timeout: 1000 });
  const user = useUser();
  const fetcher = useFetcher();
  const isSharePending = fetcher.state === "submitting";
  const result = fetcher.data?.result;
  const prevDataRef = React.useRef();
  // const data = fetcher.data;

  // console.log(result, "result");

  // const copyShareLink = React.useCallback(
  //   async (chat: JsonifyChat) => {
  //     if (!chat.sharePath) {
  //       return toast.error("Could not copy share link to clipboard");
  //     }

  //     const url = new URL(window.location.href);
  //     url.pathname = `/ai${chat.sharePath}`;
  //     copyToClipboard(url.toString());
  //     onCopy();
  //     toast.success("Share link copied to clipboard", {
  //       style: {
  //         borderRadius: "10px",
  //         background: "#333",
  //         color: "#fff",
  //         fontSize: "14px",
  //       },
  //       iconTheme: {
  //         primary: "white",
  //         secondary: "black",
  //       },
  //     });
  //   },
  //   [copyToClipboard, onCopy],
  // );

  React.useEffect(() => {
    const prevData = prevDataRef.current;
    const hasNewData = fetcher.data && fetcher.data !== prevData;
    // if (!fetcher.data) return;
    if (hasNewData) {
      // prevDataRef.current = fetcher.data;
      if ("error" in fetcher.data) {
        // If there's an error in the fetcher data, display an error toast
        toast.error("Error while sharing chat");
      } else if (fetcher.data.result && fetcher.data.result.sharePath) {
        console.log(
          "inside else if of useEffect for fetcher data",
          fetcher.data.result,
        );
        // Assuming fetcher.data.result contains the sharePath
        const { sharePath } = fetcher.data.result;
        const url = new URL(window.location.href);
        url.pathname = `/ai${sharePath}`;

        // Copy the share link to the clipboard
        copyToClipboard(url.toString());

        // Optionally, call onCopy if there's additional logic to execute upon copying
        onCopy();

        // Display a success toast
        toast.success("Share link copied to clipboard", {
          style: {
            borderRadius: "10px",
            background: "#333",
            color: "#fff",
            fontSize: "14px",
          },
          iconTheme: {
            primary: "white",
            secondary: "black",
          },
        });
      }
    }
    prevDataRef.current = fetcher.data;
  }, [fetcher.data, copyToClipboard, onCopy]);

  return (
    <Dialog {...props}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Share link to chat</DialogTitle>
          <DialogDescription>
            Anyone with the URL will be able to view the shared chat.
          </DialogDescription>
        </DialogHeader>
        <div className="p-4 space-y-1 text-sm border rounded-md">
          <div className="font-medium">{chat.title}</div>
          <div className="text-muted-foreground">
            {chat.messages.length} messages
          </div>
        </div>
        <DialogFooter className="items-center">
          <Button
            disabled={isSharePending}
            onClick={() => {
              fetcher.submit(
                {
                  id: chat.id,
                  // path: chat.path,
                  userId: user.id,
                  intent: "share",
                }, // Adjust according to your data structure
                { method: "post", action: "/ai" }, // Adjust the action path
              );
            }}
          >
            {isSharePending ? (
              <>
                <IconSpinner className="mr-2 animate-spin" />
                Copying...
              </>
            ) : (
              <>Copy link</>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
