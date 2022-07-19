import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export interface ItemAccordionI {
  id: number;
  title: string;
  text: string;
}

interface DynamicAccordionPros {
  items: Array<ItemAccordionI>;
}
const DynamicAccordion: React.FC<DynamicAccordionPros> = ({ items }) => {
  return (
    <>
      {items.map((item) => {
        return (
          <Accordion key={item.id}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography color="secondary">{item.title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.text}</Typography>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default DynamicAccordion;
