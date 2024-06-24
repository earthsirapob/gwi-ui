import React, { FC, ReactNode } from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

interface MyCardProps {
  children: ReactNode
  actions?: ReactNode
}

const MyCard: FC<MyCardProps> = ({ children, actions }) => {
  return (
    <Card>
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </Card>
  )
}

export default MyCard
