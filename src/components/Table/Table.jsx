import { TableBody } from './TableBody';

import { Container, ButtonsContainer, Button,ButtonItemGreen,ButtonItemRed,ButtonItemViolet, TableHero } from './Table.styled';

export default function Table() {
  return (
    <Container>
      <ButtonsContainer>
        <Button type="button">Проведены: <ButtonItemGreen> {0} шт.</ButtonItemGreen> </Button>
        <Button type="button">На удаление: <ButtonItemRed> {0} шт.</ButtonItemRed></Button>
        <Button type="button">Записаны: <ButtonItemViolet> {0} шт.</ButtonItemViolet></Button>
      </ButtonsContainer>
      <TableHero>
        <TableBody />
      </TableHero>
    </Container>
  );
}
