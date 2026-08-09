import React from "react";
import clsx from "clsx";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "gold";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      isLoading = false,
      className,
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-sans tracking-widest uppercase transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer";

    const variantStyles = {
      primary:
        "bg-[var(--forest-green)] text-[var(--warm-ivory)] hover:bg-[#0B3A2C] focus-visible:ring-[var(--forest-green)] shadow-sm",
      secondary:
        "bg-[var(--charcoal)] text-[var(--warm-ivory)] hover:bg-black focus-visible:ring-[var(--charcoal)]",
      outline:
        "border border-[var(--charcoal)] text-[var(--charcoal)] hover:bg-[var(--charcoal)] hover:text-[var(--warm-ivory)] focus-visible:ring-[var(--charcoal)]",
      gold:
        "bg-[var(--heritage-gold)] text-[var(--charcoal)] hover:bg-[#B38F4D] focus-visible:ring-[var(--heritage-gold)] font-medium",
      ghost:
        "bg-transparent text-[var(--charcoal)] hover:text-[var(--forest-green)] underline-offset-4 hover:underline focus-visible:ring-[var(--forest-green)]",
    };

    const sizeStyles = {
      sm: "px-4 py-2 text-xs font-semibold tracking-wider",
      md: "px-6 py-3 text-xs font-semibold tracking-widest",
      lg: "px-8 py-4 text-sm font-semibold tracking-widest",
    };

    return (
      <button
        ref={ref}
        disabled={disabled || isLoading}
        className={clsx(
          baseStyles,
          variantStyles[variant],
          sizeStyles[size],
          className
        )}
        {...props}
      >
        {isLoading ? (
          <span className="inline-flex items-center gap-2">
            <svg
              className="animate-spin -ml-1 mr-2 h-4 w-4 text-current"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
            Processing...
          </span>
        ) : (
          children
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
