import { Typography } from '@mui/material';
import React from 'react';
import { PaperStyled } from './Styleds';

interface PaperDefaultProps {
  title: string;
  body: string;
  elevation: number;
}
const PaperDefault: React.FC<PaperDefaultProps> = ({
  title,
  body,
  elevation,
}) => {
  return (
    <PaperStyled elevation={elevation}>
      <Typography variant="h4">{title}</Typography>
      <Typography variant="body2" textAlign="justify">
        {body}
      </Typography>
    </PaperStyled>
  );
};

export default PaperDefault;
