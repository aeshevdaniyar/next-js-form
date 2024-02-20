"use client"
import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";
export interface FormContainerProps extends HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const FormContainer: FC<FormContainerProps> = ({
  className,
  title,
  children,
  ...props
}) => {
  return (
    <div className={cn(className, "p-4 rounded-lg shadow-lg")} {...props}>
      <h1>{title}</h1>
      <div className="py-4">{children}</div>
    </div>
  );
};
