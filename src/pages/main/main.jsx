import React from 'react';
import { MainWrapper } from './mainStyled';
import { feedSchema } from '../../schema/feedSchema';
import { CardList } from './components/cardList/cardList';

export const Main = ({}) => {
  const renderCards = feedSchema => {
    return feedSchema.map(card => {
      return <CardList key={card.id} {...card} />;
    });
  };

  return (
    <MainWrapper>
      <h2>Ты сегодня покормил кота?</h2>
      <ul>{renderCards(feedSchema)}</ul>
    </MainWrapper>
  );
};
