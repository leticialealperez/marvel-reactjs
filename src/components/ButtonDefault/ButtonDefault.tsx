import React from 'react';
import { ButtonStyled } from './Styleds';

interface ButtonDefaultPros {
  name: string;
}
const ButtonDefault: React.FC<ButtonDefaultPros> = ({ name }) => {
  return <ButtonStyled variant="contained">{name}</ButtonStyled>;
};

export default ButtonDefault;
