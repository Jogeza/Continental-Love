import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "primary";
  className?: string;
}

export default function Logo({
  variant = "primary",
  className = "",
}: LogoProps) {
  const logo =
    variant === "icon"
      ? "/brand/logo/cl-monogram.svg"
      : "/brand/logo/continental-love-primary.svg";

  const size =
    variant === "icon"
      ? { width: 48, height: 48 }
      : { width: 180, height: 70 };

  return (
    <Image
      src={logo}
      alt="Continental Love"
      width={size.width}
      height={size.height}
      className={`h-auto w-auto ${className}`}
      priority
    />
  );
}