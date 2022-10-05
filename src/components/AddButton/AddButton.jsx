import { FcAddRow } from 'react-icons/fc';

import { Container, TextHover, ContainerIcon } from './AddButton.styled';

export default function AddButton(props) {
  const { addLine } = props;

  return (
    <Container>
      <ContainerIcon>
        <FcAddRow size="50px" /* onClick={() => dispatch(ItemsSlice.addRow(addLine()))} */ />
      </ContainerIcon>
      <TextHover>- Додати рядок до таблиці</TextHover>
    </Container>
  );
}
