import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputField from "../components/InputField";
import FormWrapper from "../components/FormWrapper";
import SelectField from "../components/SelectFIeld";
import Button from "../components/button";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  departamento: z.string().min(1, "O departamento é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormRegister() {
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      departamento: "",
      password: "",
    },
  });

  const onSubmit = (data: FormData) => {
    console.log("Dados enviados:", data);
    alert(
      `Nome: ${data.name}, departamento: ${data.departamento}, password: ${data.password}`
    );
  };

  return (
    <FormWrapper methods={methods} onSubmit={onSubmit}>
      <InputField name="name" label="Nome" placeholder="Digite seu nome" />
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
      <InputField
        name="password"
        label="Senha"
        type="password"
        placeholder="Digite sua senha"
      />
      <InputField
        name="confirmPassword"
        label="Confirmar Senha"
        type="password"
        placeholder="Confirme sua senha"
      />
      <div className="flex justify-center mt-16">
        <Button
          text="Cadastrar"
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
        />
      </div>
    </FormWrapper>
  );
}
