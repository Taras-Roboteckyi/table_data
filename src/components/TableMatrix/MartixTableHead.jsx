/* import PropTypes from 'prop-types'; */

import { TransactionRow, TransactionHeadItem, TableHeaderStyle } from './MartixTable.styled';

export function TableHeader() {
  return (
    <TableHeaderStyle>
      <TransactionRow>
        {/*  {lineIndex &&
          lineIndex.map((_, index) => (
            <TransactionHeadItem key={index}>{index}</TransactionHeadItem>
          ))} */}
        <TransactionHeadItem>Сума по рядку</TransactionHeadItem>
      </TransactionRow>
    </TableHeaderStyle>
  );
}
