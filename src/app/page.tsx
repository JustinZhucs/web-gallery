import { SignedOut, SignedIn } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
import Image from "next/image";
import { db } from "~/server/db";
import Link from "next/link";

export const dynamic = "force-dynamic";

async function Images() {
  /* The reason function Images is async is because we need to await the query to the database
  before we can render the images: 
  - db.query.images.findMany() returns a Promise
  - need to await the result to get the actual data from database
  - This is the server component patterm in Next.js
  */

  const images = await getMyImages();
  
  return (
    <div className="flex flex-wrap justify-center gap-4 p-4">
    {/* flex-wrap makes more than one row if needed, won't stop at one row only */}
    {images.map((image) => (
      <Link
        key={image.id}
        href={`/img/${image.id}`}
        scroll={false}
        className="block w-48 h-48"
      >
        <div className="relative w-full h-full flex items-center justify-center rounded-3xl bg-gray-800/40 p-3 pb-11 overflow-hidden">
          <Image 
            src={image.url} 
            style={{ objectFit: "cover" }}
            width={192}
            height={192}
            alt={image.name}
            className="w-full h-full rounded-2xl cursor-pointer"
          />
          {/* <div className="absolute bottom-1 left-0 w-full text-gray-200 text-center text-sm font-bold py-2 px-2">{image.name}</div> */}
          <div className="absolute bottom-1 left-0 w-full text-gray-200 text-center text-sm font-bold py-2 px-6 truncate">
            <span className="relative z-10">{image.name}</span>
            <span
              className="pointer-events-none absolute right-0 top-0 h-full w-8 bg-gradient-to-l from-gray-800/40 to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </Link>
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
