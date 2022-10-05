import styled from 'styled-components';

export const Container = styled.section`
  /* margin: 0 auto;
  width: 390px; */
  /* padding: 30px 5px; */
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
  margin-bottom: 60px;
`;
