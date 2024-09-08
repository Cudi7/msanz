import "server-only";

import { type Images, ImagesArraySchema } from "@/app/data";

export async function getStaticImages(): Promise<Images> {
  const imageData = [
    {
      url: "https://utfs.io/f/e1b63a85-d141-4345-8396-8016b6b0225f-bzuiy8.jpg",
      name: "romantico-shabbi-chic-portada",
      sanitizedName: "Romántico Shabbi Chic",
      mood: "Acogedor",
    },
    {
      url: "https://utfs.io/f/b96380c9-dd68-47bf-b9b7-aae4c9e5a076-ldvh4x.jpg",
      name: "wabi-sabi-portada",
      sanitizedName: "Wabi Sabi",
      mood: "Tranquilo",
    },
    {
      url: "https://utfs.io/f/fb01019e-587e-4896-9b1a-4fb177915cf3-3rajpb.jpg",
      name: "rustico-portada",
      sanitizedName: "Rústico",
      mood: "Cálido",
    },
    {
      url: "https://utfs.io/f/aeecac9d-7a15-46a5-9193-b3e61f21052a-leyw9.jpg",
      name: "industrial-portada",
      sanitizedName: "Industrial",
      mood: "Urbano",
    },
    {
      url: "https://utfs.io/f/aeecac9d-7a15-46a5-9193-b3e61f21052a-leyw9.jpg",
      name: "mediterraneo-portada",
      sanitizedName: "Mediterráneo",
      mood: "Luminoso",
    },
    {
      url: "https://utfs.io/f/29c7758c-23ae-4fcc-98c0-b8a13ae2d98b-t5c4ez.jpg",
      name: "japandi-minimalismo-portada",
      sanitizedName: "Japandi Minimalismo",
      mood: "Sereno",
    },
  ];

  const images = imageData.map((image, index) => ({
    id: index + 1,
    name: image.sanitizedName,
    href: "#",
    imageSrc: image.url,
    imageAlt: `Image of ${image.sanitizedName}`,
    mood: image.mood,
    color: index % 2 === 0 ? "White" : "Green",
  }));

  const validatedImages: Images = ImagesArraySchema.parse(images);

  return validatedImages;
}
