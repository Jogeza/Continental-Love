import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { CartProvider } from "components/cart/cart-context";
import { getCart } from "lib/shopify";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-ui",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Continental Love",
  description:
    "A luxury lifestyle house connecting Uganda and Italy.",
  openGraph: {
    title: "Continental Love",
    description:
      "A luxury lifestyle house connecting Uganda and Italy.",
    siteName: "Continental Love",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Continental Love",
    description:
      "A luxury lifestyle house connecting Uganda and Italy.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Shopify credentials aren't configured in every environment yet (see
  // .env.example). Falling back to an empty cart keeps the app usable and
  // the build green until real store credentials are added, without
  // touching lib/shopify itself.
  const shopifyEnabled = !!process.env.SHOPIFY_STORE_DOMAIN;
  const cartPromise = shopifyEnabled
    ? getCart()
    : Promise.resolve(undefined);

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable}`}
      >
        <CartProvider cartPromise={cartPromise} shopifyEnabled={shopifyEnabled}>
          <Navbar />
          {children}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}

