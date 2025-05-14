import { useFormContext } from "react-hook-form";
import { User } from "lucide-react";

interface InputFieldProps {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
}

export default function InputField({ name, label, type = "text", placeholder }: InputFieldProps) {
  const {
    register,
    formState: { errors }
  } = useFormContext();

  return (
    <div className="flex flex-col gap-1 mb-8">
      <label htmlFor={name} className="font-medium text-sm text-white">{label}</label>

      <div className="relative">
        <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <User size={16} />
        </span>

        <input
          id={name}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          className="pl-10 border border-gray-300 p-2 rounded bg-white text-gray-500 leading-tight text-sm font-normal w-full"
        />
      </div>

      {errors[name] && (
        <span className="text-red-500 text-sm">
          {(errors[name]?.message as string) || "Campo inválido"}
        </span>
      )}
    </div>
  );
}
