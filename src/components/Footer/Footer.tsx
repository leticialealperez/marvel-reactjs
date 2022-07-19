import React from 'react';

import { Grid, Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: 'secondary.main',
        padding: '20px',
        color: 'white',
        minHeight: '120px',
      }}
    >
      <Grid container>
        <Grid item xs={12}>
          <Typography>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reiciendis
            quidem fugiat aliquid perferendis, voluptates rem corporis maiores
            eius fugit minima eaque eligendi autem tempora minus quia vitae
            architecto, iusto maxime!
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;
