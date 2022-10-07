import styled from 'styled-components';

export const Section = styled.div`
  /* margin: 0 auto; */
  /* padding: 60px 0px; */

  /* font-family: ${prop => prop.theme.fonts.$verdana};
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.21;
  letter-spacing: 0.04em;
  padding-top: 30px; */

  /*  .form-title {
    font-family: ${({ theme: { fonts } }) => fonts.$gothamPro};
    font-weight: 700;
    font-style: normal;
    font-size: 25px;
    line-height: ${({ theme: { lineHeight } }) => lineHeight.gothamProHeight};
    text-transform: uppercase;
    text-align: center;
    color: ${({ theme: { colors } }) => colors.$orange};
    margin-bottom: 60px;
  } */

  .form {
    width: 100%;
    /* display: flex;
    justify-content: center;
    align-items: center; */
  }

  /* .container-input {
    height: 60px;
    width: 220px;
  }
  .label-input {
    font-size: 18px;
    font-weight: 700;
    font-style: normal;
    color: ${({ theme: { colors } }) => colors.$orange};
  } */

  .button {
    /* position: relative; */
    height: 40px;
    width: 100%;
    margin-top: 15px;
    padding: 0;
    /* padding-left: 20px; */
    text-align: center;
    /* border: 2px solid linear-gradient(180deg, #5a8fff 0%, #003094 100%); */
    cursor: pointer;
    border-image-source: linear-gradient(180deg, #5a8fff 0%, #003094 100%);
    border-width: 1px;

    border-image-slice: 1;

    /* padding: 15px 25px; */

    /*  background-color: #0f0369; */

    background: inherit;
    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
    letter-spacing: 0.04em;
    background-image: ${({ theme: { options } }) => options.gradient};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;

    /*     &:before {
      content: '';
      position: absolute;
      top: 3px;
      left: 3px;
      bottom: 3px;
      right: 3px;
      background-color: #fff;
      z-index: 1;
      border-radius: 4px;
    }
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background: ${({ theme: { options } }) => options.gradient};
      z-index: -2;
      border-radius: 4px;
    } */
    &:hover {
      /* box-shadow: 0 8px 43px rgb(255 107 1 / 60%); */
    }
  }

  .buttonTwo {
    height: 40px;
    width: 100%;
    margin-top: 7px;
    padding: 0;
    text-align: center;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    border-radius: 7px;
    background: inherit;
    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
    letter-spacing: 0.04em;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.$lightGrey};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:hover {
      background: ${({ theme: { colors } }) => colors.$blue};
      border-radius: #ff6b08;
      color: ${prop => prop.theme.colors.$white};
    }
  }

  .container {
    display: flex;
  }

  .buttonThree {
    height: 40px;
    width: 320px;
    margin-top: 7px;
    padding: 0;
    text-align: center;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    border-radius: 7px;
    background: inherit;
    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
    letter-spacing: 0.04em;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.$lightGrey};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
      margin-left: 7px;
      width: 100%;
    }

    &:hover {
      background: ${({ theme: { colors } }) => colors.$blue};
      border-radius: #ff6b08;
      color: ${prop => prop.theme.colors.$white};
    }
  }

  .buttonFour {
    height: 40px;
    width: 300px;
    margin-top: 7px;
    padding: 0;
    text-align: center;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    border-radius: 7px;
    background: inherit;
    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
    letter-spacing: 0.04em;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.$lightGrey};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
      margin-left: 7px;
      width: 100%;
    }
    &:hover {
      background: ${({ theme: { colors } }) => colors.$blue};
      border-radius: #ff6b08;
      color: ${prop => prop.theme.colors.$white};
    }
  }

  .buttonFive {
    height: 27px;
    width: 100%;
    margin-top: 7px;
    padding: 0;
    text-align: center;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    border-radius: 7px;
    background: inherit;
    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 400;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
    line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};
    letter-spacing: 0.04em;
    cursor: pointer;
    color: ${({ theme: { colors } }) => colors.$lightGrey};
    transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
      background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1);

    &:not(:last-child) {
      margin-right: 12px;
    }

    &:hover {
      background: ${({ theme: { colors } }) => colors.$blue};
      border-radius: #ff6b08;
      color: ${prop => prop.theme.colors.$white};
    }
  }

  .container-input {
    position: relative;
  }

  .form-input {
    height: 28px;
    width: 375px;
    margin-top: 7px;
    border-radius: 5px;
    padding-left: 10px;
    border: 1px solid ${({ theme: { colors } }) => colors.$lightGrey};
    /* border-radius: 7px; */
    /*  border-image-source: linear-gradient(180deg, #5a8fff 0%, #003094 100%);
    border-width: 2px;

    border-image-slice: 1; */

    background: inherit;

    font-style: normal;
    font-weight: 300;
    font-size: 10px;
    line-height: 1.21;
    letter-spacing: 0.04em;
    color: #919090;
  }

  .image-input {
    position: absolute;
    top: 45%;
    right: 7px;
  }
  /*  .form-input-error {
    width: 240px;
    color: red;
    font-size: 12px;
  } */

  /* .buttons {
    height: 60px;
    padding-top: 60px;

    .button {
      width: 182px;
      height: 44px;
      display: flex;
      justify-content: center;
      align-items: center;

      font-family: ${({ theme: { fonts } }) => fonts.verdana};
      font-weight: 700;
      font-size: 14px;
      line-height: ${({ theme: { lineHeight } }) => lineHeight.verdana};
      align-items: center;
      text-align: center;
      letter-spacing: 0.04em;
      background: ${({ theme: { colors } }) => colors.$white};
      color: ${({ theme: { colors } }) => colors.$orange};
      box-shadow: ${({ theme: { options } }) => options.buttonShadow};
      border: 2px solid #fc842d;
      border-radius: ${({ theme: { options } }) => options.radius};
      cursor: pointer;
      align-self: center;
      transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1),
        box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1);

      &:hover {
        background: #ff6b08;
        border-radius: #ff6b08;
        color: ${prop => prop.theme.colors.$white};
        box-shadow: 0 8px 43px rgb(255 107 1 / 60%);
      }
    }
  } */
`;
