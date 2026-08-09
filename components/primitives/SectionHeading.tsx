import React from "react";
import clsx from "clsx";

export interface SectionHeadingProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  alignment?: "left" | "center" | "right";
  className?: string;
  children?: React.ReactNode;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  kicker,
  title,
  subtitle,
  alignment = "left",
  className,
  children,
}) => {
  const alignmentStyles = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <div className={clsx("flex flex-col mb-10 md:mb-14 max-w-3xl", alignmentStyles[alignment], className)}>
      {kicker && (
        <span className="text-xs font-sans tracking-[0.25em] uppercase text-[var(--heritage-gold)] mb-3 font-semibold">
          {kicker}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-[var(--charcoal)] tracking-tight leading-tight mb-4">
        {title}
      </h2>
      {subtitle && (
        <p className="text-sm md:text-base font-sans text-neutral-600 leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
      {children && <div className="mt-4">{children}</div>}
    </div>
  );
};
