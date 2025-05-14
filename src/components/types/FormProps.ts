export interface FormValues {
  email: string
  password: string
}

export interface FormProps {
  onSubmit: (data: FormValues) => void
}
