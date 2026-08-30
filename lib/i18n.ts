export const locales = ["en", "it"] as const;
export type AppLocale = (typeof locales)[number];

export function localizeHref(href: string, locale: string) {
  if (locale !== "it") return href;
  if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/it")) return href;
  if (href === "/") return "/it";
  return `/it${href}`;
}
