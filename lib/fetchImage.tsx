export default async function fetchImages(url: string) {
  try {
    const res = await fetch(url, {});

    if (!res.ok) throw new Error("Image Fetch Error");
    const images = await res.json();
    return images;
  } catch (error) {
    throw error;
  }
}
