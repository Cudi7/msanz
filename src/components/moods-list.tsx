import { type Images } from "@/app/data";
import Image from "next/image";

interface MoodsListProps {
  images: Images;
}

export default function MoodsList({ images }: MoodsListProps) {
  return (
    <div className="mx-auto max-w-2xl px-4 pb-16 sm:px-6 sm:pb-24 lg:max-w-7xl lg:px-8">
      <h2 className="text-2xl font-bold tracking-tight text-gray-900">
        Lorem, ipsum dolor.
      </h2>

      <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {images.map((image) => (
          <div key={image.id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 lg:aspect-none w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:h-80">
              <Image
                alt={image.imageAlt}
                src={image.imageSrc}
                className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                width={280}
                height={320}
                quality={100}
                priority={true}
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <h3 className="text-sm text-gray-700">
                  <a href={image.href}>
                    <span aria-hidden="true" className="absolute inset-0" />
                    {image.name}
                  </a>
                </h3>
                <p className="mt-1 text-sm text-gray-500">{image.color}</p>
              </div>
              <p className="text-sm font-medium text-gray-900">{image.mood}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
