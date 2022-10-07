import styled from 'styled-components';

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
  margin-bottom: 32px;

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
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: ${({ theme: { colors } }) => colors.$black};
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
    left: 165px;
  }
`;
