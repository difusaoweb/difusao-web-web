import type { InputProps, TextFieldVariants } from '@mui/material'
import type { FieldError } from 'react-hook-form'

export interface CustomInputComponentPropsTypes {
	name: string
	onChange: (event: { target: { name: string; value: string | null } }) => void
}
export interface InputPhoneNumberPropsTypes extends InputProps {
	label: string
	variant?: TextFieldVariants | null
	onChange: (value: InputPhoneNumberPropsTypes['value']) => void
	errorZod?: FieldError | null
}
