"use client";

import { PlusIcon } from "@heroicons/react/24/outline";
import { addItem } from "components/cart/actions";
import { Button } from "@/components/primitives/Button";
import { Product, ProductVariant } from "lib/shopify/types";
import { useSearchParams } from "next/navigation";
import { useActionState } from "react";
import { useCart } from "./cart-context";

function SubmitButton({
  availableForSale,
  selectedVariantId,
  commerceEnabled,
}: {
  availableForSale: boolean;
  selectedVariantId: string | undefined;
  commerceEnabled: boolean;
}) {
  if (!commerceEnabled) {
    return (
      <Button variant="outline" disabled className="w-full">
        Preview Only
      </Button>
    );
  }

  if (!availableForSale) {
    return (
      <Button variant="outline" disabled className="w-full">
        Out Of Stock
      </Button>
    );
  }

  if (!selectedVariantId) {
    return (
      <Button
        variant="outline"
        aria-label="Please select an option"
        disabled
        className="w-full"
      >
        <PlusIcon className="mr-2 h-4 w-4" />
        Add To Cart
      </Button>
    );
  }

  return (
    <Button variant="primary" aria-label="Add to cart" className="w-full">
      <PlusIcon className="mr-2 h-4 w-4" />
      Add To Cart
    </Button>
  );
}

export function AddToCart({
  product,
  commerceEnabled,
}: {
  product: Product;
  commerceEnabled: boolean;
}) {
  const { variants, availableForSale } = product;
  const { addCartItem } = useCart();
  const searchParams = useSearchParams();
  const [message, formAction] = useActionState(addItem, null);

  const variant = variants.find((variant: ProductVariant) =>
    variant.selectedOptions.every(
      (option) => option.value === searchParams.get(option.name.toLowerCase()),
    ),
  );
  const defaultVariantId = variants.length === 1 ? variants[0]?.id : undefined;
  const selectedVariantId = variant?.id || defaultVariantId;
  const addItemAction = formAction.bind(null, selectedVariantId);
  const finalVariant = variants.find(
    (variant) => variant.id === selectedVariantId,
  )!;

  return (
    <form
      action={async () => {
        addCartItem(finalVariant, product);
        addItemAction();
      }}
    >
      <SubmitButton
        availableForSale={availableForSale}
        selectedVariantId={selectedVariantId}
        commerceEnabled={commerceEnabled}
      />
      {!commerceEnabled && (
        <p className="mt-3 text-center text-xs text-neutral-500">
          Purchasing is unavailable in preview mode.
        </p>
      )}
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </form>
  );
}
