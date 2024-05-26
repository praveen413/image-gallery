import fetchImages from "@/lib/fetchImage";
import { SingleImage } from "./single-image";

export default async function Gallery() {
  const url = `https://simple-pexels-proxy.onrender.com/search?query=car&per_page=10&page=5`;

  const images = await fetchImages(url);
  return (
    <section className="px-2 my-3 grid gap-2 grid-cols-gallery">
      {images.photos.map((photo: any) => (
        <SingleImage key={photo.id} image={photo} />
      ))}
    </section>
  );
}
