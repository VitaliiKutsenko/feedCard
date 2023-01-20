import React, { useState } from 'react';
import { CardWrapper, ContentCardWrapper } from './cardStyled';
import animal from '../../../../../public/images/48adbc37d59237857a6426336594778117f9b08e.png';

export const Card = ({ count, select, handleSelect, ...props }) => {
  const [toggle, setToggle] = useState(false);

  const handleLeaveHover = () => {
    if (select) {
      setToggle(true);
    }
  };

  const handleEnterHover = () => {
    if (toggle) {
      setToggle(false);
    }
  };

  return (
    <CardWrapper
      className={`${toggle ? 'toggle' : ''} ${select ? 'select' : ''}`}
      disabled={props.balance <= 0}
      onMouseLeave={handleLeaveHover}
      onMouseEnter={handleEnterHover}
      onClick={handleSelect}
    >
      <div className="wrapper">
        <ContentCardWrapper toggle={toggle}>
          <p>{toggle ? 'Котэ не одобряет?' : props.headTitle}</p>
          <h2>{props.brand}</h2>
          <h3>{props.feedLabel}</h3>
          <div className="additionalFields">
            {props.portion ? <p>{props.portion}</p> : null}
            {props.presents ? <p>{props.presents}</p> : null}
            {props.reviews ? <p>{props.reviews}</p> : null}
          </div>
        </ContentCardWrapper>
        <img src={animal} alt="Animal" />
        <div className="counter">
          <div>{props.weight}</div>
          <div>кг</div>
        </div>
      </div>
    </CardWrapper>
  );
};
