import { SignedOut, SignedIn } from "@clerk/nextjs";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
    {/* flex-wrap makes more than one row if needed, won't stop at one row only */}
    {images.map((image) => (
      <div key={image.id} className="flex w-48 flex-col">
        <img src={image.url} />
        <div>{image.name}</div>
      </div>
    ))}
  </div>
  );
}

// This component only runs on the server. It does not contain any client-side
export default async function HomePage() {

  return (
    <main className="">

      <SignedOut>
        <div className="w-full h-full text-2xl text-center">Please sign in to view the gallery</div>
      </SignedOut>
      <SignedIn>
        <Images/>
      </SignedIn>

    </main>
  );
}
