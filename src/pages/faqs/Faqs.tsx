import { Grid, Typography } from '@mui/material'
import React from 'react'
import DynamicAccordion from '../../components/DynamicAccordion/DynamicAccordion'

const Faqs: React.FC = () => {
  const items = [
    {
      id: 1,
      title: 'Sei la',
      text: 'aqui vai o conteudo',
    },
    {
      id: 2,
      title: 'Sei la 2',
      text: 'aqui vai o conteudo 2',
    },
    {
      id: 3,
      title: 'Sei la 3',
      text: 'aqui vai o conteudo 3',
    },
  ]

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Faqs
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <DynamicAccordion items={items} />
      </Grid>
    </Grid>
  )
}

export default Faqs
