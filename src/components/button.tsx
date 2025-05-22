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
      className={`bg-blue-700 ${className} text-white text-base font-medium rounded-md w-[241px] h-[52px] flex items-center justify-center gap-2 cursor-pointer`}
    >
      {children}
      {Icon && <Icon />}
    </button>
  );
}
