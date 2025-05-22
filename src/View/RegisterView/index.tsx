import Title from "../../components/Title";
import FormRegister from "../../form/formRegister/FormRegister";



export default function RegisterView() {

 return(
  <div className="justify-items-center">
    <Title text="TechHelp"/>
    <Title text="Faça Login" className="text-xl text-start p-2"/>
    <FormRegister />
  </div>
 )
}