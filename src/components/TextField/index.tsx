import React from 'react';
import { useFormContext } from 'react-hook-form';

interface TextFieldProps {
  label?: string;
  placeholder?: string;
  value?: string;
  name: string;
  rows?: number;
  cols?: number;
}

const TextField: React.FC<TextFieldProps> = ({
  label,
  placeholder,
  name,
  rows = 5, // Valor padrão de 5 linhas
  cols = 30, // Valor padrão de 30 colunas
}) => {
  const { register, formState: { errors } } = useFormContext();

  return (
    <div className="flex flex-col gap-2 w-full">
      {label && <label className="font-medium text-sm text-white">{label}</label>}
      <textarea
        id={name}
        placeholder={placeholder}
        rows={rows}
        cols={cols}
        {...register(name)} 
        className="border border-gray-400 bg-white rounded-xl px-5 py-4 text-base focus:outline-none focus:ring-2 focus:ring-blue-600 shadow-sm"
      />

      {errors[name] && (
        <span className="text-red-500 text-sm">
          {(errors[name]?.message as string) || "Campo inválido"}
        </span>
      )}
    </div>
  );
};

export default TextField;
