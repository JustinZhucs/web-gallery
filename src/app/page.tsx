import Link from "next/link";

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

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {/* flex-wrap makes more than one row if needed, won't stop at one row only */}
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
    </main>
  );
}
