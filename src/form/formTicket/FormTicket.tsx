import { ArrowRight } from "lucide-react";
import SelectField from "../../components/SelectFIeld";
import LoadingModal from "../../components/LoadingModal";
import SuccessModal from "../../components/SuccessModal";
import ErrorModal from "../../components/ErrorModal";
import FormWrapper from "../../components/FormWrapper";
import Button from "../../components/button";
import { z } from "zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TextField from "../../components/TextField";

const formSchema = z.object({
  departamento: z.string().min(1, "O departamento é obrigatório"),
  TypeTicket: z.string().min(1, "O departamento é obrigatório"),
  description: z.string().min(1, "A descrição é obrigatório")
});

type FormData = z.infer<typeof formSchema>;


export default function FormTicket() {

   const [Loading, setLoading] = useState<boolean>(false);
   const [success, setSuccess] = useState<boolean>(false);
   const [error, setError] = useState<string | null>(null);
   
 
   const methods = useForm<FormData>({
     resolver: zodResolver(formSchema),
     defaultValues: {
       departamento: "",
       TypeTicket: "",
       description: "",
     },
   });
 
   const onSubmit = async (data: FormData) => {
     setLoading(true);
     setError(null);
     console.log(data)
     try {
       // Simula demora de 5 segundos
       await new Promise((resolve) => setTimeout(resolve, 5000));
 
 
       setSuccess(true);
       methods.reset(); // Limpa os campos do formulário
     } catch (error) {
       console.error("Erro ao criar usuário:", error);
       setError("Erro ao criar usuário. Tente novamente mais tarde.");
     } finally {
       setLoading(false);
     }
   };

 return(
  <>
      <LoadingModal isOpen={Loading} />
      <SuccessModal
        isOpen={success}
        onClose={() => setSuccess(false)}
        message="Usuário cadastrado com sucesso!"
      />
      <ErrorModal
        isOpen={!!error}
        message={error || ""}
        onClose={() => setError(null)}
      />
      <FormWrapper methods={methods} onSubmit={onSubmit}>
        <SelectField
          name="departamento"
          label="Departamento"
          placeholder="Selecione o departamento"
          options={[
            { value: "financeiro", label: "Financeiro" },
            { value: "tecnico", label: "Técnico" },
            { value: "marketing", label: "Marketing" },
          ]}
        />

        <SelectField
          name="TypeTicket"
          label="Tipo de chamado"
          placeholder="Categoria de chamado"
          options={[
            { value: "financeiro", label: "Financeiro" },
            { value: "tecnico", label: "Técnico" },
            { value: "marketing", label: "Marketing" },
          ]}
        />

        <TextField name="description" label="Descrição" type="text" value="" />

        <div className="flex justify-center mt-16">
          <Button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            icon={ArrowRight}>
              Criar o chamado
            </Button>
        </div>
      </FormWrapper>
    </>
 )
}