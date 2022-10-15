import { TableBody } from './TableBody';

import { Container, TableHero } from './Table.styled';


export default function Table() {
  return (
    <Container>
      <TableHero>
        <TableBody/>
      </TableHero>
    </Container>
  );
}
