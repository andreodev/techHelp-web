import Title from "../../components/Title";
import FormTicket from "../../form/formTicket/FormTicket";


export default function TicketView() {

 return(
    <div className="justify-items-center">
      <Title text="Abertura de Chamado" className="mt-10"/>
      <div className="mt-10">
       <FormTicket />
      </div>
    </div>
 )
}