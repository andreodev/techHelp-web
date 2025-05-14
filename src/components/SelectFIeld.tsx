import { useFormContext } from "react-hook-form"

interface SelectFieldProps {
  name: string
  label: string
  options: { value: string; label: string }[]
  placeholder?: string
}

export default function SelectField({ name, label, options, placeholder }: SelectFieldProps) {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="flex flex-col gap-1 mb-8 ">
      <label htmlFor={name} className="font-medium text-sm text-white">{label}</label>
      <select
        id={name}
        {...register(name)}
        className="border border-gray-300 p-2 rounded bg-white text-gray-500 leading-tight text-sm font-normal" 
        defaultValue=""
      >
        <option value="" disabled hidden>
          {placeholder || "Selecione"}
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {errors[name] && (
        <span className="text-red-500 text-sm">
          {(errors[name]?.message as string) || "Campo obrigatório"}
        </span>
      )}
    </div>
  )
}
