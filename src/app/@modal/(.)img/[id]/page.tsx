import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

type Params = { id: string };

export default async function PhotoModal({
  params,
}: {
  params: Params | Promise<Params>;
}) {
  const { id: photoId } = await params;
  const idAsNumber = Number(photoId);
  if (isNaN(idAsNumber)) throw new Error("Invalid photo ID");

  return (
    <Modal>
      <FullPageImageView id={idAsNumber}/>
    </Modal>
  );
}
