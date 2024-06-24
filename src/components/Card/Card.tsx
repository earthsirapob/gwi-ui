import React, { ReactNode } from 'react'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardActions from '@mui/material/CardActions'

interface MyCardProps {
  children: ReactNode
  actions?: ReactNode
}

const Card: React.FC<MyCardProps> = ({ children, actions }) => {
  return (
    <MuiCard>
      <CardContent>{children}</CardContent>
      {actions && <CardActions>{actions}</CardActions>}
    </MuiCard>
  )
}

export default Card
