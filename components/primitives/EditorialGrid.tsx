import React from "react";
import clsx from "clsx";

export interface EditorialGridProps {
  children: React.ReactNode;
  columns?: 2 | 3 | 4 | "asymmetric";
  gap?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

export const EditorialGrid: React.FC<EditorialGridProps> = ({
  children,
  columns = 3,
  gap = "md",
  className,
}) => {
  const gapStyles = {
    sm: "gap-4 md:gap-6",
    md: "gap-6 md:gap-8",
    lg: "gap-8 md:gap-12",
    xl: "gap-10 md:gap-16",
  };

  const colStyles = {
    2: "grid grid-cols-1 md:grid-cols-2",
    3: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
    asymmetric: "grid grid-cols-1 lg:grid-cols-12",
  };

  return (
    <div
      className={clsx(
        colStyles[columns],
        gapStyles[gap],
        className
      )}
    >
      {children}
    </div>
  );
};
