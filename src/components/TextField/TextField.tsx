import React, { FC } from 'react'
import TextField from '@mui/material/TextField'

interface MyTextFieldProps {
  label: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  [key: string]: any
}

const MyTextField: FC<MyTextFieldProps> = ({
  label,
  value,
  onChange,
  ...props
}) => {
  return (
    <TextField label={label} value={value} onChange={onChange} {...props} />
  )
}

export default MyTextField
