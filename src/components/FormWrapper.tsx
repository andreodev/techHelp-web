import { FormProvider } from "react-hook-form"
import type { FieldValues } from "react-hook-form"
import type { UseFormReturn } from "react-hook-form"

interface FormWrapperProps<T extends FieldValues> {
  methods: UseFormReturn<T>
  onSubmit: (data: T) => void
  children: React.ReactNode
}

export default function FormWrapper<T extends FieldValues>({ methods, onSubmit, children }: FormWrapperProps<T>) {
  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)} className="max-w-md w-md p-6 rounded-lg bg-blue-600 ">
        {children}
      </form>
    </FormProvider>
  )
}
