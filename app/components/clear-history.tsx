
import { useFetcher, useNavigate } from "@remix-run/react";
import * as React from "react";
import { toast } from "react-hot-toast";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "~/components/ui/alert-dialog";
import { Button } from "~/components/ui/button";
import { IconSpinner } from "~/components/ui/icons";
// import { ServerActionResult } from '~/lib/types'

interface ClearHistoryProps {
  // clearChats: () => Promise<{ error?: string; success?: boolean }>;
  isEnabled: boolean;
}

export function ClearHistory({
  isEnabled = false, // clearChats,
}: ClearHistoryProps) {
  const [open, setOpen] = React.useState(false);
  const fetcher = useFetcher();
  const isPending = fetcher.state === "submitting";
  // const [isPending, startTransition] = React.useTransition();
  const navigate = useNavigate();
  // const location = useLocation();

  React.useEffect(() => {
    // Check if there's a response and the operation is not pending
    if (fetcher.data && !isPending) {
      if (fetcher.data.error) {
        // If there's an error in the response, show an error toast
        toast.error(fetcher.data.error);
      } else {
        // If the operation was successful, show a success toast
        // Close the dialog and navigate as needed
        setOpen(false);
        navigate("/ai", { state: { showSuccessToast: true } });

        toast.success("Chat history cleared successfully.", {
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
  }, [fetcher.data, isPending, navigate]);

  // React.useEffect(() => {
  //   if (location.state?.showSuccessToast) {
  //     toast.success("Chat history cleared successfully.");
  //   }
  // }, [location.state]);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogTrigger asChild>
        <Button className="bg-blue-600" disabled={!isEnabled || isPending}>
          {isPending ? <IconSpinner className="mr-2" /> : null}
          Clear history
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This will permanently delete your chat history and remove your data
            from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel disabled={isPending}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isPending}
            onClick={(event) => {
              event.preventDefault();
              fetcher.submit(
                {
                  intent: "clear",
                }, // Adjust according to your data structure
                { method: "post", action: "/ai" }, // Adjust the action path
              );
              // navigate("/ai");
              // startTransition(() => {
              //   clearChats().then((result) => {
              //     if (result && "error" in result) {
              //       toast.error(
              //         "Couldn't clear chat history. Please try again later.",
              //       );
              //       return;
              //     }

              //     setOpen(false);
              //     navigate("/");
              //   });
              // });
            }}
          >
            {isPending ? <IconSpinner className="mr-2 animate-spin" /> : null}
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
