import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView( props: { id: number }) {

  const image = await getImage(props.id);

  const clerk = await clerkClient();
  const uploaderInfo = await clerk.users.getUser(image.userId);
  return (
    <div className="flex w-full h-full min-w-0">
        <div className="flex-shrink flex justify-center items-center">
            <img src={image.url} className="flex-shrink object-contain"/>
            {/* 
            Use the <Image> component from next/image to display the image
            would generate fake elements in order to try and take up the 
            right amount of space, although it would be better to use the 
            Image component from next/image
            */}
        </div>
        <div className="w-48 flex-col gap-2 border-1">
            <div className="border-b text-center text-lg font-bold p-2">{image.name}</div>
            <div className="flex flex-col p-2">
                <span>Uploaded By:</span>
                <span className="text-lg">{uploaderInfo.fullName}</span>
            </div>
            <div className="flex flex-col p-2">
                <span>Created On:</span>
                <span className="text-lg">{new Date(image.createdAt).toLocaleDateString()}</span>
            </div>
            <div className="flex flex-col p-2">
                <form action={async() => {
                    "use server";

                    await deleteImage(props.id);
                }}>
                    <Button type="submit" className="text-lg cursor-pointer" variant="destructive">
                        Delete
                    </Button>
                </form>
            </div>
        </div>
    </div>
  );
}