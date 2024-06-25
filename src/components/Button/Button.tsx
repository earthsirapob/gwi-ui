import React, { FC } from 'react'
import Button, { ButtonProps } from '@mui/material/Button'

interface MyButtonProps extends ButtonProps {
  children: React.ReactNode
  onClick?: () => void
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default MyButton
