import { useState } from 'react';

import { TableBody } from './TableBody';

import {
  Container,
  ButtonsContainer,
  Button,
  ButtonItemGreen,
  ButtonItemRed,
  ButtonItemViolet,
  TableHero,
  MyPaginate,
} from './Table.styled';

export default function Table({ dataTable }) {
  //////////Pagination/////////////////////////////

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 15; // відображаються в інтерфейсі 15 значень(рядків) таблиці

  // Simulate fetching items from another resources.
  // (This could be items from props; or items loaded in a local state
  // from an API endpoint with useEffect and useState)
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = dataTable.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(dataTable.length / itemsPerPage);

  // Invoke when user click to request another page.
  const handlePageClick = event => {
    const newOffset = (event.selected * itemsPerPage) % dataTable.length;
    console.log(`User requested page number ${event.selected}, which is offset ${newOffset}`);
    setItemOffset(newOffset);
  };

  // Перевіряєм масив данних на наявність відповідних статус-значень
  const conducted = 'Проведен';
  const deleteRow = 'Удалить';
  const recorded = 'Записан';
  const conductedFilter = dataTable.filter(el => el.status === conducted).length;
  const deleteFilter = dataTable.filter(el => el.status === deleteRow).length;
  const recordedFilter = dataTable.filter(el => el.status === recorded).length;

  /* const arr = dataTable
    .map(el => {
      let arrayList = [];
      if (el.status === conducted) {
        arrayList = [el.status];
      } else if (el.status === deleteRow) {
        arrayList.push({
          statusDelete: el.status,
        });
      }
      return arrayList;
    })
    .flatMap(item => item);

  console.log('conductedFilter,', conductedFilter); */

  return (
    <Container>
      <ButtonsContainer>
        <Button type="button">
          Проведены: <ButtonItemGreen> {conductedFilter} шт.</ButtonItemGreen>
        </Button>
        <Button type="button">
          На удаление: <ButtonItemRed> {deleteFilter} шт.</ButtonItemRed>
        </Button>
        <Button type="button">
          Записаны: <ButtonItemViolet> {recordedFilter} шт.</ButtonItemViolet>
        </Button>
      </ButtonsContainer>
      <TableHero>
        <TableBody data={currentItems} />
      </TableHero>
      <MyPaginate
        breakLabel="..."
        nextLabel="След >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Пред"
        renderOnZeroPageCount={null}
        pageLinkClassName="page-link"
      />
    </Container>
  );
}
