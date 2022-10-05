import { useState } from 'react';

import { TableFoot } from './MatrixTableFoot';
import ButtonDelete from '../ButtonDelete/ButtonDelete';

import {
  TransactionRow,
  AverageItem,
  AmountItem,
  SumItem,
  AmountContainer,
  SumItemContainer,
  PercentItem,
  PercentContainer,
  PercentItemContainer,
} from './MartixTable.styled';

export function TableBody() {
  return (
    <tbody>
      {/* {dataMatrixLine.map((line, index) => (
        <TransactionRow key={index}>
          {<AverageItem>{increment(index)}</AverageItem>}
          {line.map((row, indexItem) => (
            <AmountItem key={row.id}>
              {row.amount && (
                <AmountContainer
                  key={row.id}
                  onClick={() =>
                    dispatch(
                      ItemsSlice.increment({
                        ...row,
                        indexColumn: indexItem,
                        indexRow: index,
                      }),
                    )
                  }
                  onMouseEnter={() => handleMouseEnterAmount(row.id)}
                  onMouseLeave={() => setIsHoverAmount(null)}
                  activeClassName={isHoverAmount?.find(({ id }) => id === row.id)}
                >
                  {row.amount}
                </AmountContainer>
              )}
              {row.sum && (
                <SumItemContainer>
                  <SumItem>{row.sum}</SumItem>
                  <PercentItemContainer>
                    <PercentItem>{Math.ceil((row.sum / total.totalSum) * 100)}%</PercentItem>
                    <PercentContainer calc={(row.sum / total.totalSum) * 100}></PercentContainer>
                  </PercentItemContainer>
                </SumItemContainer>
              )}
            </AmountItem>
          ))}

          <ButtonDelete tableRowIndex={index} />
        </TransactionRow>
      ))}

      <TableFoot footer={averageValues} totalSum={total} /> */}
    </tbody>
  );
}
