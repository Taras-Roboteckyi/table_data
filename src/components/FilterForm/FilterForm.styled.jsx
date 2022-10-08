import styled, { css } from 'styled-components';

export const Container = styled.section`
  /* margin: 0 auto;
  width: 390px; */
  /* padding: 30px 5px; */
  margin-top: 10px;
`;

export const Title = styled.h2`
  font-family: ${({ theme: { fonts } }) => fonts.$monts};
  font-weight: 300;
  font-style: normal;
  font-size: 35px;
  line-height: 1.2;
  /* text-transform: uppercase; */
  /* text-align: center; */
  color: ${({ theme: { colors } }) => colors.$black};
`;
export const CalendarContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CalendarStyles = styled.div`
  position: relative;
  /* width: 160px; */
  display: flex;
  align-items: center;
  /* margin-bottom: 32px; */

  .calendar {
    height: 28px;
    width: 175px;
    margin-top: 5px;
    border-radius: 5px;
    padding-left: 10px;
    border: 0.5px solid ${({ theme: { colors } }) => colors.$lightGrey};

    background: inherit;

    font-style: normal;
    font-weight: 300;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${({ theme: { colors } }) => colors.$blueDark};
    outline: none;
    transition: border 1s cubic-bezier(0.4, 0, 0.2, 1);

    &::placeholder {
      font-size: 10px;
      color: #919090;
    }

    &:hover {
      border: 1px solid ${({ theme: { colors } }) => colors.$blueDark};
    }
    &:focus {
      border: 1px solid ${({ theme: { colors } }) => colors.$blueDark};
    }
    /* outline: none; */
    /*  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
      font-size: 34px;
      line-height: 41px;
      width: 220px;
    }
  }
  @media (min-width: ${props => props.theme.breakpoints.tablet}) {
    width: 270px;
    margin-bottom: 60px;
  }
  .calendar_icon:hover {
    cursor: pointer;
    fill: ${prop => prop.theme.colors.$orange}; */
  }

  .calendarIcon {
    position: absolute;
    top: 40%;
    fill: red;
    left: 165px;
    &:hover {
      fill: blue;
    }
  }
`;

export const Img = styled.img`
  //////Переглянути щось не працює////////
  &:hover {
    fill: blue;
  }
`;

export const DivContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const InputStyles = css`
  height: 28px;
  width: 175px;
  margin-top: 14px;
  border-radius: 5px;
  padding-left: 10px;
  border: 0.5px solid ${({ theme: { colors } }) => colors.$lightGrey};

  background: inherit;

  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${({ theme: { colors } }) => colors.$blueDark};
  outline: none;
  transition: border 1s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border: 1px solid ${({ theme: { colors } }) => colors.$blueDark};
  }
  &:focus {
    border: 1px solid ${({ theme: { colors } }) => colors.$blueDark};
  }
  &::placeholder {
    font-size: 10px;
    color: #919090;
  }
`;

export const Input = styled.input`
  ${InputStyles}
`;

export const InputTwo = styled.input`
  ${InputStyles}
  margin-top: 10px;
  width: 375px;
`;
export const InputThree = styled.input`
  ${InputStyles}
  margin-top: 10px;
`;

export const InputFour = styled.input`
  ${InputStyles}
  margin-top: 10px;
  width: 255px;
`;

export const DivContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
  height: 27px;
`;

export const ContainerButton = styled.div`
  border-radius: 4px;
  position: relative;
  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 4px;
    background: ${({ theme: { options } }) => options.gradient};
    background-size: 100% 100%;
    clip-path: polygon(
      0% 100%,
      1.5px 100%,
      1.5px 1.5px,
      calc(100% - 1.5px) 1.5px,
      calc(100% - 1.5px) calc(100% - 1.5px),
      1.5px calc(100% - 1.5px),
      2px 100%,
      100% 100%,
      100% 0%,
      0% 0%
    );
  }
`;

const ButtonStyles = css`
  height: 27px;
  width: 156px;

  padding: 0;

  text-align: center;

  cursor: pointer;

  border: none;

  font-family: ${({ theme: { fonts } }) => fonts.$monts};
  font-style: normal;
  font-weight: 500;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
  letter-spacing: 0.04em;
  background: ${({ theme: { options } }) => options.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  color: transparent;
  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background: ${({ theme: { colors } }) => colors.$blueDark};
    border-radius: 7px;

    -webkit-text-fill-color: ${prop => prop.theme.colors.$white};
    background-clip: text;
  }
`;
export const ButtonSubmit = styled.button`
  ${ButtonStyles}
  width: 172px;
  background: ${({ theme: { options } }) => options.gradient};
  border-radius: 7px;

  -webkit-text-fill-color: ${prop => prop.theme.colors.$white};
  background-clip: text;

  &:hover {
    background: ${({ theme: { colors } }) => colors.$blueDark};
  }
`;
export const Button = styled.button`
  ${ButtonStyles}
`;

export const ButtonIcon = styled.button`
  ${ButtonStyles}
  width: 29px;
`;

export const ImgIcon = styled.img`
  margin: 0 auto;
`;

/* export const SvgImageStyle = styled.svg`
  line {
    stroke: ${({ theme: { options } }) => options.gradient};
  }
  &:hover {
    line {
      stroke: purple;
    }
  }
`; */
