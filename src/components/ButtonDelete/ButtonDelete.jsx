import { AiOutlineDelete } from 'react-icons/ai';
import { useState } from 'react';

import { Container, TextHover } from './ButtonDelete.styled';

export default function ButtonDelete(props) {
  /*  const [isHover, setIsHover] = useState(false);

  const { tableRowIndex } = props;

  const handleMouseEnter = () => {
    setIsHover(true);
  };
  const handleMouseLeave = () => {
    setIsHover(false);
  }; */

  return (
    <Container>
      <AiOutlineDelete
        size="30px"
        /* onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={() => dispatch(ItemsSlice.deleteRow(tableRowIndex))} */
      />
      {/* {isHover && <TextHover>Бажаєте видалити рядок?</TextHover>} */}
    </Container>
  );
}
