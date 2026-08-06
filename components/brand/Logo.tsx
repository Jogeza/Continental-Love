import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "primary";
  className?: string;
}

export default function Logo({
  variant = "primary",
  className = "",
}: LogoProps) {
  const isIcon = variant === "icon";

  return (
    <Image
      src={
        isIcon
          ? "/brand/logo/cl-monogram.svg"
          : "/brand/logo/continental-love-primary.svg"
      }
      alt="Continental Love"
      width={isIcon ? 40 : 140}
      height={isIcon ? 40 : 54}
      className={`h-auto w-auto ${className}`}
      priority
    />
  );
}