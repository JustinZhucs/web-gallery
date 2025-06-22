import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

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