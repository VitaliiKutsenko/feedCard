import styled from 'styled-components';
import { theme } from '../../../../style/theme';

export const CardFooterWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 15px;
  color: #ffffff;
  & a {
    color: #22a7e9;
    border-bottom: 1px dashed;
    text-decoration: none;
  }
  & .feedText {
    justify-content: flex-start;
    align-items: center;
  }
  & .disabled {
    color: ${theme.textColor.disabled};
  }
`;
