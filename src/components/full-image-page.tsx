import { clerkClient } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";
import { BackToGalleryButton } from "./back-to-gallery-button";

export default async function FullPageImageView({ id }: { id: number }) {
  const image = await getImage(id);
  if (!image) {
    return redirect("/");
  }

  const clerk = await clerkClient();
  const uploaderInfo = await clerk.users.getUser(image.userId);
  const createdLabel = new Intl.DateTimeFormat(undefined, {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(image.createdAt);

  return (
    <div className="flex h-full w-full items-center justify-center p-4">
      <div className="flex w-full max-w-lg flex-col items-center gap-6 rounded-3xl bg-zinc-900/90 p-6 shadow-2xl backdrop-blur">
        <div className="flex w-full items-center justify-center">
          <div className="relative flex h-[420px] w-full max-w-[520px] items-center justify-center overflow-hidden rounded-2xl bg-zinc-950/70">
            <img
              src={image.url}
              alt={image.name}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-1 text-center text-zinc-100">
          <h2
            className="w-full truncate text-xl font-semibold"
            title={image.name}
          >
            {image.name}
          </h2>
          <p className="text-sm text-zinc-300">
            Uploaded by {uploaderInfo.fullName ?? "Unknown user"}
          </p>
          <p className="text-sm text-zinc-400">Created on {createdLabel}</p>
        </div>

        <div className="flex w-full flex-col gap-3">
          <form
            action={async () => {
              "use server";
              await deleteImage(id);
            }}
            className="w-full"
          >
            <Button
              type="submit"
              className="w-full cursor-pointer text-base"
              variant="destructive"
            >
              Delete Photo
            </Button>
          </form>
          <BackToGalleryButton />
        </div>
      </div>
    </div>
  );
}
