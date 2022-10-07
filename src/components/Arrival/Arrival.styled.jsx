import styled from 'styled-components';

export const Container = styled.div`
  /* margin: 0 auto;
  width: 390px; */
  /* padding: 30px 5px; */
`;

export const ContainerArrival = styled.div`
  display: flex;
  /*  justify-content: space-between; */
`;

export const Title = styled.h1`
  font-family: ${({ theme: { fonts } }) => fonts.$monts};
  font-weight: 700;
  font-style: normal;
  font-size: 35px;
  line-height: 1.2;
  /* text-transform: uppercase; */
  /* text-align: center; */
  color: ${({ theme: { colors } }) => colors.$black};
  margin-right: 15px;
`;

export const Img = styled.img`
  padding-top: 15px;
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0;

  padding-top: 10px;
  margin-left: auto;
  font-family: ${({ theme: { fonts } }) => fonts.$monts};
  font-weight: 400;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: ${({ theme: { lineHeight } }) => lineHeight.montsHeight};

  letter-spacing: 0.04em;
  background: inherit;
  background-image: ${({ theme: { options } }) => options.gradient};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  border: none;

  cursor: pointer;
  align-self: center;
  transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    border-radius: none;
    color: ${({ theme: { colors } }) => colors.$blueDark};
  }
`;

export const ImgArrow = styled.img`
  /* padding-top: 15px; */
`;
