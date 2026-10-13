import { useEffect, useState } from "react";
import type { Photo } from "@/components/binder/photos";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

const frame =
  "overflow-hidden rounded-2xl border border-ink/10 bg-card shadow-[0_20px_40px_-28px_rgba(60,30,30,0.35)]";

export function PhotoGallery({
  photos,
  aspect = "aspect-[3/2]",
  className,
}: {
  photos: Photo[];
  aspect?: string;
  className?: string;
}) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    onSelect();
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  if (photos.length === 0) return null;

  if (photos.length === 1) {
    const photo = photos[0]!;
    return (
      <div className={cn(frame, aspect, className)}>
        <img
          src={photo.src}
          alt={photo.alt}
          loading="lazy"
          className="h-full w-full object-cover"
        />
      </div>
    );
  }

  return (
    <Carousel setApi={setApi} opts={{ loop: true }} className={cn("group/gallery", className)}>
      <CarouselContent>
        {photos.map((photo) => (
          <CarouselItem key={photo.src}>
            <div className={cn(frame, aspect)}>
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="left-3 border-ink/10 bg-card/90 backdrop-blur hover:bg-card" />
      <CarouselNext className="right-3 border-ink/10 bg-card/90 backdrop-blur hover:bg-card" />
      <div className="mt-3 flex items-center justify-center gap-1.5">
        {photos.map((photo, i) => (
          <button
            key={photo.src}
            type="button"
            aria-label={`Go to photo ${i + 1}`}
            onClick={() => api?.scrollTo(i)}
            className={cn(
              "h-1.5 rounded-full transition-all",
              i === current ? "w-5 bg-gold" : "w-1.5 bg-ink/20 hover:bg-ink/40",
            )}
          />
        ))}
      </div>
    </Carousel>
  );
}
