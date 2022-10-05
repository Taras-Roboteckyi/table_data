/* import { useEffect } from 'react'; */

import SideBar from '../components/SideBar/SideBar';

import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable';

import { Container } from './HomePage.styled';

export default function HomePage() {
  return (
    <Container>
      <SideBar />
      {/* <Form /> */}

      {/* {data.row && <MatrixTable />} */}
    </Container>
  );
}
