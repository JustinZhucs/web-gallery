import { getImage } from "~/server/queries";
import { Modal } from "./modal";

export default async function PhotoModal({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  const image = await getImage(idAsNumber);
  return (
    <Modal>
      <img src={image.url} className="w-96"/>
    </Modal>
  );
}