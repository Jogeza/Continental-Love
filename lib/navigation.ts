export type NavigationItem = {
  label: string;
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
  { label: "Home", href: "/" },
  { label: "Coffee", href: collectionRoutes.coffee, legacyHref: "/search/coffee" },
  { label: "Apparel", href: collectionRoutes.apparel, legacyHref: "/search/apparel" },
  { label: "Jewelry", href: collectionRoutes.jewelry, legacyHref: "/search/jewelry" },
  { label: "Discover Uganda", href: "/discover-uganda" },
  { label: "Story", href: "/story" },
];

export function getCollectionPath(handle: string): string {
  return collectionRoutes[handle as keyof typeof collectionRoutes] ?? `/search/${handle}`;
}

export function isNavigationItemActive(
  pathname: string,
  item: NavigationItem,
): boolean {
  return (
    pathname === item.href ||
    (item.href !== "/" &&
    pathname.startsWith(`${item.href}/`) ||
    pathname === item.legacyHref)
  );
}
