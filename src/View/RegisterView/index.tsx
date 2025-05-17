import Title from "../../components/Title";
import FormRegister from "../../form/FormRegister";



export default function RegisterView() {

 return(
  <>
    <Title text="TechHelp"/>
    <Title text="Faça Login" className="text-xl text-start p-2"/>
    <FormRegister />
  </>
 )
}