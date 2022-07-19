import { Grid, Typography } from '@mui/material'
import React from 'react'

const About: React.FC = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h3" color="primary">
          Sobre Nós
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" color="primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque
          eligendi non expedita animi optio velit harum minima praesentium, quam
          aut nostrum ipsam tempore! Iusto nostrum ex placeat error voluptate?{' '}
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Typography variant="body1" color="primary">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo itaque
          eligendi non expedita animi optio velit harum minima praesentium, quam
          aut nostrum ipsam tempore! Iusto nostrum ex placeat error voluptate?{' '}
        </Typography>
      </Grid>
    </Grid>
  )
}

export default About
