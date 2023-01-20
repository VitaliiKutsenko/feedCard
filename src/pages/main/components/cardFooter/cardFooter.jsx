import React from 'react';
import { CardFooterWrapper } from './cardFooterStyled';

export const CardFooter = ({ select, handleSelect, ...props }) => {
  if (props.balance <= 0) {
    return (
      <CardFooterWrapper>
        <div className="disabled">{`Печалька, ${props.feedLabel} закончился.`}</div>
      </CardFooterWrapper>
    );
  }

  return (
    <CardFooterWrapper>
      {select ? (
        <div className="feedText">{props.additionalLabel}</div>
      ) : (
        <div>
          {`Чего сидишь? Порадуй котэ, `}
          <a onClick={e => handleSelect(e)} href="#">
            купи.
          </a>
        </div>
      )}
    </CardFooterWrapper>
  );
};
