import * as React from 'react'

import type { FieldError, Merge } from 'react-hook-form'
import type { TextFieldVariants } from '@mui/material'

export interface InputPropsTypes {
	value: string | null
	name: string
	ref: React.Ref<any>
	onBlur: () => void
	label?: string
	autoComplete?: string | false
	type?: string
	placeholder?: string
	multiline?: boolean
	rows?: number
	variant?: TextFieldVariants | null
	onChange: (value: InputPropsTypes['value']) => void
	errorZod?: Merge<FieldError, (FieldError | undefined)[]> | null
}
