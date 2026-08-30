import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";
import { isShopifyConfigured } from "@/lib/commerce/config";
import {NextIntlClientProvider} from "next-intl";
import {getLocale, getMessages} from "next-intl/server";
import {createPageMetadata} from "@/lib/seo";

export const instant = false;

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  return createPageMetadata({title: "Continental Love", description: "A lifestyle catalog connecting Uganda and Italy.", path: "", image: "/images/coffee/coffee-hero-origin.png", locale});
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Shopify credentials aren't configured in every environment yet (see
  // .env.example). Falling back to an empty cart keeps the app usable and
  // the build green until real store credentials are added.
  const [locale, messages] = await Promise.all([getLocale(), getMessages()]);
  const shopifyEnabled = isShopifyConfigured();
  const cartPromise = shopifyEnabled
    ? getCart()
    : Promise.resolve(undefined);

  return (
    <html lang={locale}>
      <body
        className={`${inter.variable} ${playfair.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CartProvider cartPromise={cartPromise} shopifyEnabled={shopifyEnabled}>
            <Navbar />
            {children}
            <Footer />
          </CartProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

