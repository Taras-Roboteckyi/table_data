import { useState } from 'react';

/* import FormControlLabel from '@material-ui/core/FormControlLabel'; */
/* import Checkbox from '@material-ui/core/Checkbox'; */

import arrowDown from '../../images/arrow-down.png';
import arrowUp from '../../images/arrow-up.png';
import filterImg from '../../images/filter-right.png';

import { CheckboxMUI, FormControlLabelMUI } from './Table.styled';

import {
  TableHeadRow,
  TableHeadCheckboxItem,
  /* Checkbox, */
  TableHeadItem,
  TableHeadTwoItem,
  Img,
  ImgFilter,
} from './Table.styled';

export function TableBody() {
  //////Логіка чекбоксів///////////
  const [checked, setChecked] = useState([]);

 //////рендер масиву /////////
 const lineIndex = [0, 1, 2, 3, 4, 6];

  const handleChange1 = event => {
    setChecked([event.target.checked]);
    for (var i = 0; i < lineIndex.length; i++) {   
      event.target[i].checked = true;   
  }  
  };
console.log("checked", )
  
 /*  const handleChange2 = event => {
    setChecked([event.target.checked, checked[1]]);
  };

  const handleChange3 = event => {
    setChecked([event.target.checked]);
  }; */

 

  return (
    <>
      <thead>
        <TableHeadRow>
          <TableHeadCheckboxItem>
            <FormControlLabelMUI
              /* label="Parent" */
              control={
                <CheckboxMUI
                  /* checked={checked[0] && checked[1]} */
                  /* indeterminate={checked[0] !== checked[1]} */
                  /* onChange={handleChange1} */
                />
              }
            />
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
        {/*   <FormControlLabel
              label="Child 1"
              control={<Checkbox checked={checked[0]} onChange={handleChange2} />}
            />
            <FormControlLabel
              label="Child 2"
              control={<Checkbox checked={checked[1]} onChange={handleChange3} />}
            /> */}
        {lineIndex.map((line, index) => (
          <tr key={index}>{<td><FormControlLabelMUI
            
            control={<CheckboxMUI checked={checked[index]} /* onChange={handleChange3} */ />}
          /></td>}</tr>
        ))}
      </tbody>
    </>
  );
}
