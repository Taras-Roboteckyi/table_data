import { useState } from 'react';



import { TableBody } from './TableBody';

import { Container, ButtonsContainer, Button,ButtonItemGreen,ButtonItemRed,ButtonItemViolet, TableHero, MyPaginate } from './Table.styled';

export default function Table({dataTable}) {

  //////////Pagination/////////////////////////////

  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;  //12 відображаються в інтерфейсі
  
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


  return (
    <Container>
      <ButtonsContainer>
        <Button type="button">Проведены: <ButtonItemGreen> {0} шт.</ButtonItemGreen> </Button>
        <Button type="button">На удаление: <ButtonItemRed> {0} шт.</ButtonItemRed></Button>
        <Button type="button">Записаны: <ButtonItemViolet> {0} шт.</ButtonItemViolet></Button>
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
