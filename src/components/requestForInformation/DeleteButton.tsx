import * as AlertDialog from "@radix-ui/react-alert-dialog";
import { Delete } from "@styled-icons/fluentui-system-filled";
import { useRouter } from "next/router";
import type { MutableRefObject } from "react";
import { useDeleteRequestForInformation } from "../../hooks/requestForInformation";

const DeleteButton = ({
  requestForInformationId,
  projectId,
  pendingDeleteCountRef,
  navigateBack = false,
}: {
  requestForInformationId: string;
  projectId: string;
  pendingDeleteCountRef?: MutableRefObject<number>;
  navigateBack?: boolean;
}) => {
  const { deleteRequestForInformation } = useDeleteRequestForInformation({
    pendingDeleteCountRef: pendingDeleteCountRef,
    projectId: projectId,
  });
  const router = useRouter();
  return (
    <AlertDialog.Root>
      <AlertDialog.Trigger asChild>
        <Delete className="h-6 w-6 text-red-500" />
      </AlertDialog.Trigger>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className="fixed inset-0 animate-fade-in bg-slate-300" />
        <AlertDialog.Content className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-content-show rounded-md bg-white p-6 shadow-md focus:outline-none">
          <AlertDialog.Title className="m-0 font-medium text-gray-800">
            Are you absolutely sure?
          </AlertDialog.Title>
          <AlertDialog.Description className="mx-0 mt-3 mb-5 text-sm text-gray-400">
            This action cannot be undone. This will permanently delete this RFI
            and remove it from our servers.
          </AlertDialog.Description>
          <div className="flex justify-end gap-6">
            <AlertDialog.Cancel asChild>
              <button
                type="button"
                className="inline-flex h-9 items-center justify-center rounded-md bg-gray-100 py-0 px-4 text-sm font-medium text-gray-700 hover:bg-gray-200"
              >
                Cancel
              </button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <button
                type="button"
                onClick={() => {
                  deleteRequestForInformation({
                    requestForInformationId: requestForInformationId,
                  });
                  if (navigateBack) {
                    router.back();
                  }
                }}
                className="inline-flex h-9 items-center justify-center rounded-md bg-red-100 py-0 px-4 text-sm font-medium text-red-700 hover:bg-red-200"
              >
                Yes, delete RFI
              </button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};

export default DeleteButton;
