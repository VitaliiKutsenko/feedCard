import React, { useState } from 'react';
import { Card } from '../card/card';
import { CardListWrapper } from './cardListStyled';
import { CardFooter } from '../cardFooter/cardFooter';

export const CardList = props => {
  const [select, setSelect] = useState(false);

  const handleSelect = e => {
    e.preventDefault();
    setSelect(prev => !prev);
  };

  return (
    <CardListWrapper>
      <Card select={select} handleSelect={handleSelect} {...props} />
      <CardFooter select={select} handleSelect={handleSelect} {...props} />
    </CardListWrapper>
  );
};
