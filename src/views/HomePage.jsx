/* import { useEffect } from 'react'; */

import SideBar from '../components/SideBar/SideBar';
import Table from '../components/Table/Table';

/* import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable'; */

import { fetch } from '../services/isroAPI';

import { Container } from './HomePage.styled';

export default function HomePage() {

  /* useEffect(() => {
    fetch()
  
    
  }, []) */
  
  const a = fetch()
  console.log(a)

  return (
    <Container>
      <SideBar />
      {/* <Form /> */}
<Table/>
      {/* {data.row && <MatrixTable />} */}
    </Container>
  );
}
