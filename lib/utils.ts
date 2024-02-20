import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateHours() {
  return Array(24)
    .fill("")
    .map((_, i) => {
      return `${i}:00`;
    });
}
