import styled, { css } from 'styled-components';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import ReactPaginate from 'react-paginate';



export const Container = styled.div`
  padding: 0px 25px;
`;
export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  width: 305px;
  /* height: 44px; */
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 14px;
  padding-bottom: 14px;
  font-family: ${({ theme: { fonts } }) => fonts.$monts};
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: 1.21;

  text-align: center;
  letter-spacing: 0.04em;
  background: ${({ theme: { colors } }) => colors.$white};

  box-shadow: ${({ theme: { options } }) => options.buttonShadow};
  border: none;
  border-radius: ${({ theme: { options } }) => options.radius};
  cursor: pointer;
  /* align-self: center; */
  /* transition: color 0.5s cubic-bezier(0.4, 0, 0.2, 1), border 0.5s cubic-bezier(0.4, 0, 0.2, 1),
    background-color 0.5s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.5s cubic-bezier(0.4, 0, 0.2, 1); */
  /* &:hover {
    background: #ff6b08;
    border-radius: #ff6b08;
    color: ${prop => prop.theme.colors.$white};
    box-shadow: 0 8px 43px rgb(255 107 1 / 60%);
  } */
`;

export const ButtonItemGreen = styled.span`
  margin-left: 3px;
  background: ${({ theme: { colors } }) => colors.$green};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ButtonItemRed = styled.span`
  margin-left: 3px;
  background: ${({ theme: { colors } }) => colors.$red};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ButtonItemViolet = styled.span`
  margin-left: 3px;
  background: ${({ theme: { colors } }) => colors.$violet};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const TableHero = styled.table`
  /* border-collapse: collapse; */
  margin: auto;
  border-spacing: 0 5px;  //змінює рядки на окремі вкладення
`;

export const TableHeadRow = styled.tr`
  display: flex;
  padding: 12px 14px;
  background: #5a8fff10; // 10 - aльфа канал який додає прозорість
  border-radius: 5px;
`;



export const TableHeadCheckboxItem = styled.th`
  /* margin-left: 14px; */
  margin-right: 14px;
`;

export const FormControlLabelMUI = withStyles({
  root: {
    margin: 0,
    padding: 0,
  },
})(FormControlLabel);

export const CheckboxMUI = withStyles({
  root: {
    margin: 0,
    width: 0,
    height: 0,
    padding: 0,
    transform: 'scale(0.65)',
  },
})(Checkbox);

export const TableHeadItem = styled.th`
  display: flex;
  white-space: nowrap;
  align-items: center;
  margin-right: 27px;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: 1.21;
  letter-spacing: 0.04em;
`;

export const TableHeadTwoItem = styled.th`
  display: flex;
  align-items: center;
  margin-right: 75px;
  font-style: normal;
  font-weight: 600;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: 1.21;
  letter-spacing: 0.04em;
`;

export const Img = styled.img`
  margin-left: 3px;
  width: 10px;
  height: 10px;
  display: block;
`;

export const ImgFilter = styled.img`
  max-width: fit-content;
  width: 16px;
`;

/////////TABLE BODY///////////////

export const TableBodyRow = styled.tr`
  display: flex;
  align-items: center;
  justify-content: baseline;
  padding: 5px 14px;
  margin-bottom: 12px;
  background: ${({ theme: { colors } }) => colors.$white};
  /* background: #5a8fff10; */ // 20 - aльфа канал який додає прозорість
  border-radius: 5px;
  cursor: pointer;
  &:first-child{
    margin-top: 8px;
  }
`;

const TdStyles = css`
  padding-top: 5px;
  font-style: normal;
  font-weight: 300;
  font-size: ${({ theme: { fontSize } }) => fontSize.montsSize};
  line-height: 1.21;
  letter-spacing: 0.04em;
  color: ${({ theme: { colors } }) => colors.$black};
`;

export const DataItem = styled.td`
  ${TdStyles}
  margin-left: 14px;
  font-weight: 400;
  width: 100px;
`;

export const Time = styled.span`
  padding-left: 5px;
  font-weight: 400;
  color: ${({ theme: { colors } }) => colors.$lightGrey};
`;
export const Number = styled.td`
  ${TdStyles}
  margin-left: 18px;
  width: 65px;
`;

export const Stock = styled.td`
  ${TdStyles}
  font-weight: 400;
  margin-left: 10px;
  width: 60px;
`;

export const Provider = styled.td`
  ${TdStyles}
  margin-left: 18px;
  width: 95px;
`;
export const Sum = styled.td`
  ${TdStyles}
  font-weight: 400;
  margin-left: 18px;
  width: 55px;
`;
export const Responsible = styled.td`
  ${TdStyles}
  margin-left: 18px;
  width: 115px;
`;


export const StatusСonducted = styled.td`
  ${TdStyles}
  display: flex;
  margin-left: 18px;
  width: 100px;
  background: ${({ theme: { colors } }) => colors.$green};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatusDelete = styled.td`
  ${TdStyles}
  display: flex;
  margin-left: 18px;
  width: 100px;
  padding-top: 6px;
  background: ${({ theme: { colors } }) => colors.$red};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const StatusRecorded = styled.td`
  ${TdStyles}
  display: flex;
  margin-left: 18px;
  width: 100px;
  padding-top: 6px;
  background: ${({ theme: { colors } }) => colors.$violet};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ImgCheck = styled.img`
margin-left: 5px;

`

export const Comment = styled.td`
  ${TdStyles}
  font-weight: 400;
  margin-left: 18px;
  width: 170px;
`;

/////////////////Pagination/////////////////////////

export const MyPaginate = styled(ReactPaginate).attrs({
  // You can redefine classes here, if you want.
  activeClassName: 'active', // default to "selected"
})`
  margin-bottom: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  list-style-type: none;
  padding: 0 20px;
  li a {
    /* border-radius: 7px; */
    padding: 6px 30px;
    color: ${({ theme: { colors } }) => colors.$blue};
    /* border: gray 1px solid; */
    cursor: pointer;
  }
  li.previous a,
  li.next a,
  li.break a {
    border-color: transparent;
    color: ${({ theme: { colors } }) => colors.$blue}
  }
  li.active a {
    background-color: rgba(90, 143, 255, 0.1);
    border-radius: 3px;
    border-color: transparent;
    color: ${({ theme: { colors } }) => colors.$blue};
    min-width: 10px;
  }
  li.disabled a {
    color: grey;
  }
  li.disable,
  li.disabled a {
    cursor: default;
  }
`;
