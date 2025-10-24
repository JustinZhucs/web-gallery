import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";
import { images } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import analyticsServerClient from "./analytics";

export async function getMyImages() {

  const user = await auth();

  if (!user.userId) throw new Error("Unauthorized");
  /* it ensures that only authenticated users can access their images.
    If a user is not signed in, user.userId will be undefined or null.
    
    if don't throw error: 
    - The function would continue and try to query the database with an invalid or missing user ID.
    - This could result in returning all images, no images, or even a security issue.*/

  const images = await db.query.images.findMany({
      where: (model, { eq }) => eq(model.userId, user.userId),
      orderBy: (model, { desc }) => desc(model.id),
    });
  
  return images;
}

export async function getImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  const image = await db.query.images.findFirst({
    where: (model, { eq }) => eq(model.id, id),
  });

  if (!image) return null;
  if (image.userId !== user.userId) return null;

  return image;
}

export async function deleteImage(id: number) {
  const user = await auth();
  if (!user.userId) throw new Error("Unauthorized");

  await db
    .delete(images)
    .where(and(eq(images.id, id), eq(images.userId, user.userId)));

    analyticsServerClient.capture({
      distinctId: user.userId,
      event: "delete image",
      properties: {
        imageId: id,
      },
    });
  
  revalidatePath("/");
  return redirect("/");  
}
