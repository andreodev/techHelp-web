import { ArrowRight } from "lucide-react";
import Button from "./button";


interface CardProps {
 title: string;
 description: string;
 textButton: string;
}


export default function Card({ title, description, textButton }: CardProps) {

  return(
   <div
           id="card"
           className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md mt-10"
         >
           <h1 className="text-2xl font-bold text-gray-800 mb-2">
             {title}
           </h1>
           <p className="text-gray-600 mb-4">{description}</p>
           <Button text={textButton} icon={ArrowRight}/>
         </div>
  )
}