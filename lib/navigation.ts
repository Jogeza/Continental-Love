export type NavigationItem = {
  label: string;
  translationKey: "home" | "coffee" | "apparel" | "jewelry" | "discover" | "story";
  href: string;
  legacyHref?: string;
};

export const collectionRoutes = {
  coffee: "/coffee",
  apparel: "/apparel",
  jewelry: "/jewelry",
  charcoal: "/charcoal",
} as const;

export const primaryNavigation: NavigationItem[] = [
  { label: "Home", translationKey: "home", href: "/" },
  { label: "Coffee", translationKey: "coffee", href: collectionRoutes.coffee, legacyHref: "/search/coffee" },
  { label: "Apparel", translationKey: "apparel", href: collectionRoutes.apparel, legacyHref: "/search/apparel" },
  { label: "Jewelry", translationKey: "jewelry", href: collectionRoutes.jewelry, legacyHref: "/search/jewelry" },
  { label: "Discover Uganda", translationKey: "discover", href: "/discover-uganda" },
  { label: "Story", translationKey: "story", href: "/story" },
];

export function getCollectionPath(handle: string): string {
  return collectionRoutes[handle as keyof typeof collectionRoutes] ?? `/search/${handle}`;
}

export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
): boolean {
  const normalizedPathname = pathname.replace(/^\/it(?=\/|$)/, "") || "/";
  return (
    normalizedPathname === item.href ||
    (item.href !== "/" &&
    normalizedPathname.startsWith(`${item.href}/`) ||
    normalizedPathname === item.legacyHref)
  );
}
