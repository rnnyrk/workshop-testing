import * as React from 'react';

import { Accordion as AccordionComponent } from 'common/interaction';

import { AccordionContainer, AccordionHeader, AccordionTitle } from './styled';

export const Accordion = ({ accordionItems, title }: AccordionProps) => {
  return (
    <AccordionContainer>
      <AccordionHeader>
        <AccordionTitle>{title}</AccordionTitle>
      </AccordionHeader>
      <AccordionComponent
        items={accordionItems.map((item) => ({
          id: item.id,
          text: item.text,
          title: item.title,
        }))}
      />
    </AccordionContainer>
  );
};

export type AccordionProps = {
  accordionItems: {
    id: string;
    text: string;
    title: string;
  }[];
  title: string;
};
