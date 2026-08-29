import Image from "next/image";

interface LogoProps {
  variant?: "icon" | "primary" | "light";
  className?: string;
}

export default function Logo({
  variant = "primary",
  className = "",
}: LogoProps) {
  const isIcon = variant === "icon";
  const source = isIcon
    ? "/brand/logo/cl-monogram.svg"
    : variant === "light"
      ? "/brand/logo/continental-love-light.svg"
      : "/brand/logo/continental-love-primary.svg";

  return (
    <Image
      src={source}
      alt="Continental Love"
      width={isIcon ? 40 : 140}
      height={isIcon ? 40 : 54}
      className={className}
      priority
    />
  );
}
