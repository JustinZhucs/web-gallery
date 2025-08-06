import { getImage } from "~/server/queries";

export default async function FullPageImageView( props: { id: number }) {

  const image = await getImage(props.id);
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
        <div className="w-48 flex-col border-1">
            <div className="text-xl font-bold">{image.name}</div>
        </div>
    </div>
  );
}