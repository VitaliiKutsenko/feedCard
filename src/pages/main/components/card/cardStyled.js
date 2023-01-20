import styled from 'styled-components';
import { theme } from '../../../../style/theme';

export const CardWrapper = styled.div`
  &[disabled] {
    pointer-events: none;
    color: ${theme.textColor.disableAdditional};
    & .wrapper {
      border: 4px solid ${theme.color.disabledTheme};
      & .counter {
        background: ${theme.color.disabledTheme};
      }
      &:after {
        border-top: 4px solid ${theme.color.disabledTheme};
      }
      &:before {
        content: '';
        width: 100%;
        height: 100%;
        clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0 100%, 0 8%);
        background: rgba(242, 242, 242, 0.7);
        position: absolute;
        transform: rotate(0);
        top: 0;
        left: 0;
        border: none;
        z-index: 1;
      }
    }
  }

  & .wrapper {
    cursor: pointer;
    background: #ffffff;
    border-radius: 12px;
    width: 320px;
    height: 480px;
    overflow: hidden;
    position: relative;
    clip-path: polygon(12% 0%, 100% 0%, 100% 100%, 0 100%, 0 8%);
    border: 4px solid ${theme.color.defaultTheme};
    transition: 0.5s linear;

    &:after {
      transition: 0.5s linear;
      content: '';
      position: absolute;
      width: 70px;
      height: 0;
      transform: rotate(135deg);
      top: 14px;
      left: -18px;
      border-top: 4px solid ${theme.color.defaultTheme};
    }
  }

  & .counter {
    position: absolute;
    bottom: 0;
    right: 0;
    transform: translate(-16px, -16px);
    width: 80px;
    height: 80px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background: ${theme.color.defaultTheme};
    font-style: normal;
    font-weight: 400;
    transition: 0.5s linear;

    & div:nth-child(1) {
      color: white;
      font-size: 42px;
      line-height: 22px;
    }

    & div:nth-child(2) {
      color: white;
      font-size: 24px;
      line-height: 22px;
      transform: translateY(10px);
    }
  }

  &.select {
    & .wrapper {
      border-color: ${theme.color.selectTheme};

      &:after {
        border-color: ${theme.color.selectTheme};
      }
    }

    & .counter {
      background: ${theme.color.selectTheme};
    }
  }

  &:hover {
    & .wrapper {
      border-color: ${theme.color.hoverDefaultTheme};

      &:after {
        border-color: ${theme.color.hoverDefaultTheme};
      }
    }

    & .counter {
      background: ${theme.color.hoverDefaultTheme};
    }
  }

  &.select:hover {
    & .wrapper {
      border-color: ${theme.color.hoverSelectTheme};

      &:after {
        border-color: ${theme.color.hoverSelectTheme};
      }
    }

    & .counter {
      background: ${theme.color.hoverSelectTheme};
    }
  }

  & img {
    bottom: -20%;
    left: -10%;
    position: absolute;
    width: 368px;
    object-fit: cover;
  }
`;
export const ContentCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 45px;

  &* {
    font-style: normal;
  }

  & p {
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    color: ${({ toggle }) => (toggle ? theme.textColor.warning : '')};
  }

  & h2 {
    font-weight: 700;
    font-size: 48px;
    line-height: 56px;
  }

  & h3 {
    font-weight: 700;
    font-size: 24px;
    line-height: 28px;
  }

  & .additionalFields {
    margin-top: 15px;
    & > p {
      font-style: normal;
      color: #666666;
      font-weight: 700;
      font-size: 14px;
      line-height: 16px;
    }
  }
`;
