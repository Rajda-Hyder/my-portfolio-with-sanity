import imageUrlBuilder from "@sanity/image-url";
import { client } from "@/sanity/lib/client";

// Configure the builder
const builder = imageUrlBuilder(client);

// Utility function to get image URL
export function urlFor(source: any) {
  return builder.image(source);
}
