import MoodsList from "@/components/moods-list";
import { getStaticImages } from "@/lib/fetchImages";

export default async function MoodPage() {
  const images = await getStaticImages();

  return (
    <div>
      <MoodsList images={images} />
    </div>
  );
}
