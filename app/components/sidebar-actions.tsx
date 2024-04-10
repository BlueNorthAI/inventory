"use client";

import { useFetcher, useNavigate } from "@remix-run/react";
// import { useNavigate } from '@remix-run/react'
import * as React from "react";
import { toast } from "react-hot-toast";

import { ChatShareDialog } from "~/components/chat-share-dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { IconShare, IconTrash, IconSpinner } from "~/components/ui/icons";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { ServerActionResult, JsonifyChat } from "~/lib/types";

interface SidebarActionsProps {
  chat: JsonifyChat;
  // removeChat: (args: { id: string; path: string }) => ServerActionResult<void>
  shareChat: (id: string, userId: string) => ServerActionResult<JsonifyChat>;
}

export function SidebarActions({
  chat,
  // removeChat,
  shareChat,
}: SidebarActionsProps) {
  const fetcher = useFetcher();
  const isRemovePending = fetcher.state === "submitting";
  const [deleteDialogOpen, setDeleteDialogOpen] = React.useState(false);
  const [shareDialogOpen, setShareDialogOpen] = React.useState(false);
  const navigate = useNavigate();
  const fetcherDataRef = React.useRef();

  React.useEffect(() => {
    console.log("fetcher data for delete", fetcher.data);

    // Check if the current fetcher data is the same as the last time this effect ran
    if (fetcher.data === fetcherDataRef.current) {
      return; // If it's the same, exit early
    }

    // Update the ref to the current fetcher data
    fetcherDataRef.current = fetcher.data;

    // Proceed with your logic only if fetcher.data is not null/undefined
    if (fetcher.data) {
      if (fetcher.data.error) {
        toast.error(fetcher.data.error);
      } else {
        setDeleteDialogOpen(false); // Close the delete dialog on success
        toast.success("Chat deleted successfully.");
        navigate("/ai");
      }
    }
  }, [fetcher, navigate]);

  return (
    <>
      <div className="space-x-1">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="size-6 p-0 hover:bg-background"
              onClick={() => setShareDialogOpen(true)}
            >
              <IconShare />
              <span className="sr-only">Share</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Share chat</TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              variant="ghost"
              className="size-6 p-0 hover:bg-background"
              disabled={isRemovePending}
              onClick={() => setDeleteDialogOpen(true)}
            >
              <IconTrash />
              <span className="sr-only">Delete</span>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Delete chat</TooltipContent>
        </Tooltip>
      </div>
      <ChatShareDialog
        chat={chat}
        // shareChat={(id, userId) => shareChat(id, userId)}
        open={shareDialogOpen}
        onOpenChange={setShareDialogOpen}
        onCopy={() => setShareDialogOpen(false)}
      />
      <AlertDialog open={deleteDialogOpen} onOpenChange={setDeleteDialogOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your chat message and remove your
              data from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isRemovePending}>
              Cancel
            </AlertDialogCancel>
            <AlertDialogAction
              disabled={isRemovePending}
              name="intent"
              onClick={(event) => {
                event.preventDefault();
                fetcher.submit(
                  {
                    id: chat.id,
                    // path: chat.path,
                    userId: chat.userId,
                    intent: "delete",
                  }, // Adjust according to your data structure
                  { method: "post", action: "/ai" }, // Adjust the action path
                );
              }}
            >
              {isRemovePending ? (
                <IconSpinner className="mr-2 animate-spin" />
              ) : null}
              Delete
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
