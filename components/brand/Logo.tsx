import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "primary";
}

export default function Logo({
  variant = "primary",
}: LogoProps) {
  if (variant === "icon") {
    return (
      <Image
        src="/brand/logo/cl-monogram.svg"
        alt="Continental Love"
        width={48}
        height={48}
        priority
      />
    );
  }

  return (
    <Image
      src="/brand/logo/continental-love-primary.svg"
      alt="Continental Love"
      width={180}
      height={70}
      priority
    />
  );
}