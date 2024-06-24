import React, { FC } from 'react'
import Button from '@mui/material/Button'

interface MyButtonProps {
  children: React.ReactNode
  onClick?: () => void
  [key: string]: any
}

const MyButton: FC<MyButtonProps> = ({ children, ...props }) => {
  return <Button {...props}>{children}</Button>
}

export default MyButton
