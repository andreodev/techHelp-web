import Title from "../../components/Title";
import FormRegister from "../../form/formRegister/FormRegister";



export default function RegisterView() {

 return(
  <div className="justify-items-center">
    <Title text="TechHelp"/>
    <div className="flex justify-center items-center p-5">
      <FormRegister />

    </div>
  </div>
 )
}