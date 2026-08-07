/**
 * @deprecated Vercel Commerce default component — superseded by components/brand/Logo.tsx
 * and the Continental Love brand identity. Kept for reference until Phase 2 is complete.
 */
import clsx from "clsx";
import LogoIcon from "./icons/logo";

export default function LogoSquare({ size }: { size?: "sm" | undefined }) {
  return (
    <div
      className={clsx(
        "flex flex-none items-center justify-center border border-neutral-200 bg-white dark:border-neutral-700 dark:bg-black",
        {
          "h-[40px] w-[40px] rounded-xl": !size,
          "h-[30px] w-[30px] rounded-lg": size === "sm",
        },
      )}
    >
      <LogoIcon
        className={clsx({
          "h-[16px] w-[16px]": !size,
          "h-[10px] w-[10px]": size === "sm",
        })}
      />
    </div>
  );
}
