import type {Metadata} from "next";

export const baseUrl = "https://continental-love.vercel.app";

export function createPageMetadata({title, description, path, image, locale = "en"}: {title: string; description: string; path: string; image: string; locale?: string}): Metadata {
  const englishPath = path || "/";
  const italianPath = path ? `/it${path}` : "/it";
  const canonical = locale === "it" ? italianPath : englishPath;
  return {
    title,
    description,
    alternates: {canonical, languages: {en: englishPath, it: italianPath}},
    openGraph: {title, description, url: `${baseUrl}${canonical}`, siteName: "Continental Love", type: "website", locale: locale === "it" ? "it_IT" : "en_GB", images: [{url: `${baseUrl}${image}`, alt: title}]},
    twitter: {card: "summary_large_image", title, description, images: [`${baseUrl}${image}`]},
  };
}
