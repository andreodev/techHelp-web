import { FormProvider } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import type { UseFormReturn } from "react-hook-form"

interface FormWrapperProps<T extends FieldValues> {
  methods: UseFormReturn<T>
  onSubmit: (data: T) => void
  children: React.ReactNode
  className?: string
}

export default function FormWrapper<T extends FieldValues>({ methods, onSubmit, children, className }: FormWrapperProps<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className={`  ${className}`}>
        {children}
      </form>
    </FormProvider>
  )
}
