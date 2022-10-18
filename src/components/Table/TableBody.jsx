import arrowDown from '../../images/arrow-down.png';
import arrowUp from '../../images/arrow-up.png';
import filterImg from '../../images/filter-right.png';

import {
  TableHeadRow,
  TableHeadCheckboxItem,
  Checkbox,
  TableHeadItem,
  TableHeadTwoItem,
  Img,
  ImgFilter,
} from './Table.styled';

export function TableBody() {
  const lineIndex = [0, 1, 2, 3, 4, 6];

  return (
    <>
      <thead>
        <TableHeadRow>
          <TableHeadCheckboxItem>
            <Checkbox type="checkbox" name="scales" />
          </TableHeadCheckboxItem>
          <TableHeadItem>
            Дата и время <Img src={arrowDown} alt="Arrow" />
          </TableHeadItem>
          <TableHeadItem>
            Номер <Img src={arrowDown} alt="Arrow" />
          </TableHeadItem>
          <TableHeadItem>
            Склад <Img src={arrowUp} alt="Arrow" />
          </TableHeadItem>
          <TableHeadItem>
            Поставщик
            <Img src={arrowDown} alt="Arrow" />
          </TableHeadItem>
          <TableHeadItem>
            Сумма
            <Img src={arrowDown} alt="Arrow" />
          </TableHeadItem>
          <TableHeadItem>
            Ответственный
            <Img src={arrowDown} alt="Arrow" />
          </TableHeadItem>
          <TableHeadTwoItem>Статус</TableHeadTwoItem>
          <TableHeadTwoItem>Комментарий</TableHeadTwoItem>
          <th>
            <ImgFilter src={filterImg} alt="filter" width={'10px'} />
          </th>
        </TableHeadRow>
      </thead>

      <tbody>
        {lineIndex.map((line, index) => (
          <tr key={index}>{<td>ghghghgh</td>}</tr>
        ))}
      </tbody>
    </>
  );
}
