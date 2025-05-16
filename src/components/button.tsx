import { type LucideIcon } from "lucide-react"

interface ButtonProps {
  text: string
  className?: string | undefined
  type?: "button" | "submit" | "reset"
  icon?: LucideIcon
}

export default function Button({ text, className, type, icon }: ButtonProps) {

  const Icon = icon
  return (
    <button
      type={type}
      className={`bg-blue-700 ${className} text-white text-base font-medium rounded-md w-[241px] h-[52px] flex items-center   justify-center gap-2`}
    >
      {Icon && (
        <span className="flex gap-2">{text}
        <Icon />
        </span>
      )}
    </button>
  )
}
