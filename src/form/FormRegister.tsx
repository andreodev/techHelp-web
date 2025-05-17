import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import InputField from "../components/InputField";
import FormWrapper from "../components/FormWrapper";
import SelectField from "../components/SelectFIeld";
import Button from "../components/button";
import { ArrowRight, Eye, EyeOff, Mail, User } from "lucide-react";
import { useState } from "react";
import { useCreateUser } from "./hooks/useCreateUser";
import LoadingModal from "../components/LoadingModal";
import SuccessModal from "../components/SuccessModal";
import ErrorModal from "../components/ErrorModal";

const formSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  email: z.string().email("Email inválido"),
  departamento: z.string().min(1, "O departamento é obrigatório"),
  password: z.string().min(6, "A senha deve ter pelo menos 6 caracteres"),
  confirmPassword: z
    .string()
    .min(6, "A confirmação de senha deve ter pelo menos 6 caracteres"),
});

type FormData = z.infer<typeof formSchema>;

export default function FormRegister() {
  const [passwordError, setPasswordError] = useState<string | null>(null);
  const [Loading, setLoading] = useState<boolean>(false);
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const { createUser } = useCreateUser();
  const methods = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      departamento: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    if (data.password !== data.confirmPassword) {
      setPasswordError("As senhas não coincidem!");
      return;
    }

    setPasswordError(null);
    setLoading(true);
    setError(null);
    try {
      // Simula demora de 5 segundos
      await new Promise((resolve) => setTimeout(resolve, 5000));

      if (data.email === "erro@teste.com") {
      throw new Error("Erro simulado para teste");
    }

      await createUser({
        nameUser: data.name,
        email: data.email,
        dept: data.departamento,
        password: data.password,
      });

      setSuccess(true);
      methods.reset(); // Limpa os campos do formulário
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      setError("Erro ao criar usuário. Tente novamente mais tarde.");
    } finally {
      setLoading(false);
    }
  };

  return (
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
        <InputField
          name="name"
          label="Nome"
          placeholder="Digite seu nome"
          icon={User}
          colorIcon="black"
        />
        <InputField
          name="email"
          label="Email"
          placeholder="Digite seu email"
          icon={Mail}
          colorIcon="black"
        />
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
          icon={Eye}
          colorIcon="black"
        />
        <InputField
          name="confirmPassword"
          label="Confirmar Senha"
          type="password"
          placeholder="Confirme sua senha"
          icon={EyeOff}
          colorIcon="black"
        />

        {passwordError && (
          <div className="text-red-500 text-sm mt-2">{passwordError}</div>
        )}

        <div className="flex justify-center mt-16">
          <Button
            text="Cadastrar"
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 cursor-pointer"
            icon={ArrowRight}
          />
        </div>
      </FormWrapper>
    </>
  );
}
