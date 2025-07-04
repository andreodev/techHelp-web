import { type LucideIcon } from "lucide-react";
import type { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;           
  className?: string;
  type?: "button" | "submit" | "reset";
  icon?: LucideIcon;
}

export default function Button({ children, className, type = "button", icon }: ButtonProps) {
  const Icon = icon;

  return (
    <button
      type={type}
      className={` ${className} text-white text-2xl font-bold transition-transform duration-300 hover:scale-105 rounded-md  cursor-pointer`}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
}
