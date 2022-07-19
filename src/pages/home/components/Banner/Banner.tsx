import { Typography } from '@mui/material'
import React from 'react'
import { BoxStyled } from './Styleds'

interface BannerPros {
  title?: string
  size: 'h1' | 'h2' | 'h3'
}

const Banner: React.FC<BannerPros> = ({ size, title }) => {
  return (
    <BoxStyled component="div">
      <Typography color="white" variant={size}>
        {title}
      </Typography>
    </BoxStyled>
  )
}

export default Banner
