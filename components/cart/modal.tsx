"use client";

import clsx from "clsx";
import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import LoadingDots from "components/loading-dots";
import { Price } from "@/components/primitives/Price";
import { DEFAULT_OPTION } from "lib/constants";
import { createUrl } from "lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import { useFormStatus } from "react-dom";
import { createCartAndSetCookie, redirectToCheckout } from "./actions";
import { useCart } from "./cart-context";
import { DeleteItemButton } from "./delete-item-button";
import { EditItemQuantityButton } from "./edit-item-quantity-button";
import OpenCart from "./open-cart";

type MerchandiseSearchParams = {
  [key: string]: string;
};

export default function CartModal() {
  const { cart, shopifyEnabled, updateCartItem } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const quantityRef = useRef(cart?.totalQuantity);
  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  useEffect(() => {
    if (!cart && shopifyEnabled) {
      createCartAndSetCookie();
    }
  }, [cart, shopifyEnabled]);

  useEffect(() => {
    if (
      cart?.totalQuantity &&
      cart?.totalQuantity !== quantityRef.current &&
      cart?.totalQuantity > 0
    ) {
      quantityRef.current = cart?.totalQuantity;
      if (!isOpen) {
        const openTimer = window.setTimeout(() => setIsOpen(true), 0);
        return () => window.clearTimeout(openTimer);
      }
    }
  }, [isOpen, cart?.totalQuantity, quantityRef]);

  return (
    <>
      <button aria-label="Open cart" onClick={openCart}>
        <OpenCart quantity={cart?.totalQuantity} />
      </button>
      <Transition show={isOpen}>
        <Dialog onClose={closeCart} className="relative z-50">
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="opacity-0 backdrop-blur-none"
            enterTo="opacity-100 backdrop-blur-[.5px]"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="opacity-100 backdrop-blur-[.5px]"
            leaveTo="opacity-0 backdrop-blur-none"
          >
            <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition-all ease-in-out duration-300"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transition-all ease-in-out duration-200"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="fixed bottom-0 right-0 top-0 flex h-full w-full flex-col border-l border-[#1C1C1C]/10 bg-[#F8F5EF]/95 p-6 text-[#1C1C1C] backdrop-blur-xl md:w-[420px]">
              <div className="flex items-center justify-between">
                <p className="font-serif text-xl">My Cart</p>
                <button aria-label="Close cart" onClick={closeCart}>
                  <CloseCart />
                </button>
              </div>

              {!cart || cart.lines.length === 0 ? (
                <div className="mt-20 flex w-full flex-col items-center justify-center overflow-hidden">
                  <ShoppingCartIcon className="h-16 text-[#0F4C3A]/30" />
                  <p className="mt-6 text-center font-serif text-2xl">
                    Your cart is empty.
                  </p>
                </div>
              ) : (
                <div className="flex h-full flex-col justify-between overflow-hidden p-1">
                  <ul className="grow overflow-auto py-4">
                    {cart.lines
                      .sort((a, b) =>
                        a.merchandise.product.title.localeCompare(
                          b.merchandise.product.title,
                        ),
                      )
                      .map((item, i) => {
                        const merchandiseSearchParams =
                          {} as MerchandiseSearchParams;

                        item.merchandise.selectedOptions.forEach(
                          ({ name, value }) => {
                            if (value !== DEFAULT_OPTION) {
                              merchandiseSearchParams[name.toLowerCase()] =
                                value;
                            }
                          },
                        );

                        const merchandiseUrl = createUrl(
                          `/product/${item.merchandise.product.handle}`,
                          new URLSearchParams(merchandiseSearchParams),
                        );

                        return (
                          <li
                            key={i}
                            className="flex w-full flex-col border-b border-[#1C1C1C]/10"
                          >
                            <div className="relative flex w-full flex-row justify-between px-1 py-4">
                              <div className="absolute z-40 -ml-1 -mt-2">
                                <DeleteItemButton
                                  item={item}
                                  optimisticUpdate={updateCartItem}
                                />
                              </div>
                              <div className="flex flex-row">
                                <div className="relative h-16 w-16 overflow-hidden rounded-md border border-[#1C1C1C]/10 bg-[#F8F5EF]">
                                  <Image
                                    className="h-full w-full object-cover"
                                    width={64}
                                    height={64}
                                    alt={
                                      item.merchandise.product.featuredImage
                                        .altText ||
                                      item.merchandise.product.title
                                    }
                                    src={
                                      item.merchandise.product.featuredImage.url
                                    }
                                  />
                                </div>
                                <Link
                                  href={merchandiseUrl}
                                  onClick={closeCart}
                                  className="z-30 ml-2 flex flex-row space-x-4"
                                >
                                  <div className="flex flex-1 flex-col text-base">
                                    <span className="leading-tight">
                                      {item.merchandise.product.title}
                                    </span>
                                    {item.merchandise.title !==
                                    DEFAULT_OPTION ? (
                                      <p className="text-sm text-[#1C1C1C]/60">
                                        {item.merchandise.title}
                                      </p>
                                    ) : null}
                                  </div>
                                </Link>
                              </div>
                              <div className="flex h-16 flex-col justify-between">
                                <Price
                                  className="flex justify-end space-y-2 text-right text-sm"
                                  amount={item.cost.totalAmount.amount}
                                  currencyCode={
                                    item.cost.totalAmount.currencyCode
                                  }
                                />
                                <div className="ml-auto flex h-9 flex-row items-center rounded-full border border-[#1C1C1C]/15">
                                  <EditItemQuantityButton
                                    item={item}
                                    type="minus"
                                    optimisticUpdate={updateCartItem}
                                  />
                                  <p className="w-6 text-center">
                                    <span className="w-full text-sm">
                                      {item.quantity}
                                    </span>
                                  </p>
                                  <EditItemQuantityButton
                                    item={item}
                                    type="plus"
                                    optimisticUpdate={updateCartItem}
                                  />
                                </div>
                              </div>
                            </div>
                          </li>
                        );
                      })}
                  </ul>
                  <div className="py-4 text-sm text-[#1C1C1C]/60">
                    <div className="mb-3 flex items-center justify-between border-b border-[#1C1C1C]/10 pb-1">
                      <p>Taxes</p>
                      <Price
                        className="text-right text-base text-[#1C1C1C]"
                        amount={cart.cost.totalTaxAmount.amount}
                        currencyCode={cart.cost.totalTaxAmount.currencyCode}
                      />
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-[#1C1C1C]/10 pb-1 pt-1">
                      <p>Shipping</p>
                      <p className="text-right">Calculated at checkout</p>
                    </div>
                    <div className="mb-3 flex items-center justify-between border-b border-[#1C1C1C]/10 pb-1 pt-1">
                      <p>Total</p>
                      <Price
                        className="text-right text-base text-[#1C1C1C]"
                        amount={cart.cost.totalAmount.amount}
                        currencyCode={cart.cost.totalAmount.currencyCode}
                      />
                    </div>
                  </div>
                  <form action={redirectToCheckout}>
                    <CheckoutButton />
                  </form>
                </div>
              )}
            </Dialog.Panel>
          </Transition.Child>
        </Dialog>
      </Transition>
    </>
  );
}

function CloseCart({ className }: { className?: string }) {
  return (
    <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#1C1C1C]/15 text-[#1C1C1C] transition-colors hover:border-[#0F4C3A]">
      <XMarkIcon
        className={clsx(
          "h-6 transition-all ease-in-out hover:scale-110",
          className,
        )}
      />
    </div>
  );
}

function CheckoutButton() {
  const { pending } = useFormStatus();

  return (
    <button
      className="block w-full rounded-full bg-[#C8A45D] p-3 text-center text-sm font-medium tracking-wide text-[#1C1C1C] transition-opacity hover:opacity-90"
      type="submit"
      disabled={pending}
    >
      {pending ? <LoadingDots className="bg-white" /> : "Proceed to Checkout"}
    </button>
  );
}
