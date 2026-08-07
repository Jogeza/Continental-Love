/**
 * @deprecated Not currently rendered. This is Vercel Commerce's dynamic footer nav —
 * it returns null unless a Shopify `menu` prop is supplied, which app/layout.tsx never
 * did (this was the cause of the footer silently disappearing). Superseded by
 * components/layout/Footer.tsx for now. Reintroduce this as a sub-component of the CL
 * footer in Phase 2 once a Shopify footer menu is actually wired up.
 */
"use client";

import clsx from "clsx";
import { Menu } from "lib/shopify/types";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export function FooterMenuItem({ item }: { item: Menu }) {
  const pathname = usePathname();
  const [active, setActive] = useState(pathname === item.path);

  useEffect(() => {
    setActive(pathname === item.path);
  }, [pathname, item.path]);

  return (
    <li>
      <Link
        href={item.path}
        className={clsx(
          "block p-2 text-lg underline-offset-4 hover:text-black hover:underline md:inline-block md:text-sm dark:hover:text-neutral-300",
          {
            "text-black dark:text-neutral-300": active,
          },
        )}
      >
        {item.title}
      </Link>
    </li>
  );
}

export default function FooterMenu({ menu = [] }: { menu?: Menu[] }) {
  if (!menu.length) return null;

  return (
    <nav>
      <ul>
        {menu.map((item: Menu) => (
          <FooterMenuItem key={item.title} item={item} />
        ))}
      </ul>
    </nav>
  );
}