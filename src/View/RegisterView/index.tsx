import Container from "../../components/Container";
import Title from "../../components/Title";
import FormRegister from "../../form/FormRegister";



export default function RegisterView() {

 return(
  <Container>
    <Title text="TechHelp"/>
    <Title text="Faça Login" className="text-xl text-start p-2"/>
    <FormRegister />
  </Container>
 )
}