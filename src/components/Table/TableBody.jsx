import { useState } from 'react';

/* import FormControlLabel from '@material-ui/core/FormControlLabel'; */
/* import Checkbox from '@material-ui/core/Checkbox'; */

import arrowDown from '../../images/arrow-down.png';
import arrowUp from '../../images/arrow-up.png';
import filterImg from '../../images/filter-right.png';

/* import {fetchAPI} from "../../services/isroAPI" */

import { CheckboxMUI, FormControlLabelMUI,TableBodyRow } from './Table.styled';

import {
  TableHeadRow,
  TableHeadCheckboxItem,
  /* Checkbox, */
  TableHeadItem,
  TableHeadTwoItem,
  Img,
  ImgFilter,
} from './Table.styled';

export function TableBody({ data }) {
  const [selected, setSelected] = useState([]);

  console.log(data);
  //////рендер масиву /////////
  /*  const data = [
    {
      id: 'name',
      numeric: false,
      disablePadding: true,
      label: 'Dessert (100g serving)',
    },
    {
      id: 'calories',
      numeric: true,
      disablePadding: false,
      label: 'Calories',
    },
    {
      id: 'fat',
      numeric: true,
      disablePadding: false,
      label: 'Fat (g)',
    },
    {
      id: 'carbs',
      numeric: true,
      disablePadding: false,
      label: 'Carbs (g)',
    },
  ]; */

  //////Логіка чекбоксів///////////
  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelected = data.map(n => n.id);

      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1),
      );
    }

    setSelected(newSelected);
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  /*  const handleChange1 = event => {
    setChecked([event.target.checked]);
    for (var i = 0; i < data.length; i++) {   
      event.target[i].checked = true;   
  }  
  };
console.log("checked", ) */

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
                  indeterminate={selected.length > 0 && selected.length < data.length}
                  checked={data.length > 0 && selected.length === data.length}
                  onChange={handleSelectAllClick}
                  inputProps={{
                    'aria-label': 'select all desserts',
                  }}
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
        {data.map((line, index) => {
          const isItemSelected = isSelected(line.id);

          return (
            <TableBodyRow
              key={index}
              onClick={event => handleClick(event, line.id)}
              /* role="checkbox" */
              /* aria-checked={isItemSelected} */
              /* tabIndex={-1} */
              /* key={data.name} */
              selected={isItemSelected}
            >
              <td>
              <FormControlLabelMUI
              /* label="Parent" */
              control={
                  <CheckboxMUI
                    checked={isItemSelected}

                    /* onChange={event =>
                          handleClick(event, line.name)
                        }  */
                    /* onChange={handleChange3} */
                  />
                      }
                />
              </td>

              <td>{line.id}</td>
            </TableBodyRow>
          );
        })}
      </tbody>
    </>
  );
}
