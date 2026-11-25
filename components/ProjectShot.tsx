import Image from "next/image";

export function ProjectShot({ src, alt, caption, width, height }: { src: string; alt: string; caption: string; width: number; height: number }) {
  return (
    <figure className="shot">
      <a href={src} target="_blank" rel="noopener" aria-label={`Open full-size screenshot: ${caption}`}>
        <Image src={src} alt={alt} width={width} height={height} sizes="(max-width: 900px) 100vw, 680px" />
      </a>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
