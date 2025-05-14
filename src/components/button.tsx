import { ArrowRight } from "lucide-react"

interface ButtonProps {
  text: string
  className?: string | undefined
  type?: "button" | "submit" | "reset"
}

export default function Button({ text, className, type }: ButtonProps) {
  return (
    <button
      type={type}
      className={`bg-blue-700 ${className} text-white text-base font-medium rounded-md w-[241px] h-[52px] flex items-center justify-center gap-2`}
    >
      <span>{text}</span>
      <ArrowRight />
    </button>
  )
}
