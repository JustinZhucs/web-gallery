import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://uh0nthrbtq.ufs.sh/f/7t6GinQRTocOUvU2SNnxDoAc6gV5juMm7QGWbTa2LUzKfneB",
  "https://uh0nthrbtq.ufs.sh/f/7t6GinQRTocOegBdiFOfBAVLjy7JMuEK9t1lgUXkPmN4x6hz",
  "https://uh0nthrbtq.ufs.sh/f/7t6GinQRTocOitylHfo2rMNp4PAjC1y8k6dVJYHxSKz0EtTI", 
  "https://uh0nthrbtq.ufs.sh/f/7t6GinQRTocOzOZYABj0DZGvFNnht5e742om8gICOdwKuxRA"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));


// This component only runs on the server. It does not contain any client-side
export default async function HomePage() {

  const posts = await db.query.posts.findMany();

  console.log(posts);

  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {/* flex-wrap makes more than one row if needed, won't stop at one row only */}
        {posts.map((post) => (
          <div key={post.id}>{post.name}</div>
        ))}
        {[...mockImages, ...mockImages, ...mockImages].map((image, index) => (
          <div key={image.id + "-" + index} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
