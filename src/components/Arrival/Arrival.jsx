import settings from '../../images/settings.png';
import arrow from '../../images/chevron-left.png';

import { Form } from '../Form/Form';

import { Container, Title, ContainerArrival, Img, Button, ImgArrow } from './Arrival.styled';

export default function Arrival() {
  return (
    <Container>
      <ContainerArrival>
        <Title>Приходы</Title>
        <Img src={settings} alt="Settings" width={'20px'} height={'20px'} />
        <Button>
          <ImgArrow src={arrow} alt="Arrow" width={'10px'} height={'10px'} />
          Скрыть
        </Button>
      </ContainerArrival>
      <Form></Form>
    </Container>
  );
}
