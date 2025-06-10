import Title from "../../components/Title";
import FormTicket from "../../form/formTicket/FormTicket";


export default function TicketView() {

 return(
    <div className="justify-items-center">
      <Title text="Abertura de Chamado" className="mt-10"/>
      <div className="flex justify-center items-center p-5">
       <FormTicket />
      </div>
    </div>
 )
}