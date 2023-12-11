import React, { HtmlHTMLAttributes, MouseEvent } from "react";
import { twMerge } from "tailwind-merge";
interface SectionHeadingProps extends React.ButtonHTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  className?: string;
};

export default function SectionHeading({ children, className, ...props }: SectionHeadingProps) {
  return (
    <h2 {...props} className={twMerge("text-3xl capitalize mb-8 text-center", className)}>
      {children}
    </h2>
  );
}