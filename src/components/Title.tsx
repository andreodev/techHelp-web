

interface TitleProps {
 className?: string;
 text: string
}

export default function Title({ className, text }: TitleProps) {
 
 return(
    <h1 className={`font-bold text-white text-7xl mb-4 text-center ${className || ''}`}>{text}</h1>
 )
}