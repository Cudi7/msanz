import { z } from "zod";

const ImageSchema = z.object({
  id: z.number(),
  name: z.string(),
  href: z.string(),
  imageSrc: z.string().url(),
  imageAlt: z.string(),
  mood: z.string(),
  color: z.string(),
});

export const ImagesArraySchema = z.array(ImageSchema);

export type Images = z.infer<typeof ImagesArraySchema>;
