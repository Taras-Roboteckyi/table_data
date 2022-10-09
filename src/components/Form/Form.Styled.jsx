import styled from 'styled-components';

export const Section = styled.div`
  .form {
    width: 100%;
  }

  .border-container {
    border-radius: 7px;
    position: relative;
    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 7px;
      background: ${({ theme: { options } }) => options.gradient};
      background-size: 100% 100%;
      clip-path: polygon(
        0% 100%,
        2px 100%,
        2px 2px,
        calc(100% - 2px) 2px,
        calc(100% - 2px) calc(100% - 2px),
        2px calc(100% - 2px),
        2px 100%,
        100% 100%,
        100% 0%,
        0% 0%
      );
    }
  }

  .button {
    height: 40px;
    width: 100%;

    padding: 0;

    text-align: center;

    cursor: pointer;

    border: none;

    font-family: ${({ theme: { fonts } }) => fonts.$monts};
    font-style: normal;
    font-weight: 500;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsHeroSize};
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
      background: ${({ theme: { options } }) => options.gradient};
      border-radius: 7px;

      -webkit-text-fill-color: ${prop => prop.theme.colors.$white};
      background-clip: text;
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
      background: ${({ theme: { options } }) => options.gradient};
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

    &:last-child {
      margin-left: 7px;
      width: 100%;
    }
  }

  .buttonFour {
    height: 40px;
    width: 300px;

    &:last-child {
      margin-left: 7px;
      width: 100%;
    }
  }
  .container-buttons {
    display: flex;
    justify-content: space-between;
    margin-top: 7px;
  }

  .border-containerTwo {
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
  }

  .buttonFive {
    height: 27px;
    width: 120px;
    font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  }

  .container-input {
    position: relative;
    margin-top: 7px;
    height: 28px;
  }

  .form-input {
    height: 28px;
    width: 375px;
    padding: 0;
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
  }

  .image-input {
    position: absolute;
    top: 35%;
    right: 10px;
  }
`;
