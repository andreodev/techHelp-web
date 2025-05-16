import type { TitleProps } from "./types/Components";

export default function Title({ className, text }: TitleProps) {
 
 return(
    <h1 className={`font-bold font-title text-white text-7xl text-center ${className || ''}`}>{text}</h1>
 )
}