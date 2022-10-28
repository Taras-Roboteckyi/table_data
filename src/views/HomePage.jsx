import { useState, useEffect } from 'react';

import SideBar from '../components/SideBar/SideBar';
import Table from '../components/Table/Table';

/* import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable'; */

import { fetchAPI } from '../services/isroAPI';

import { Container } from './HomePage.styled';

export default function HomePage() {
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    fetchAPI().then(result => setDataTable(result.customer_satellites));
  }, []);

  /* const a = fetch();
  console.log(a); */
  console.log(dataTable);
  return (
    <Container>
      <SideBar />
      {/* <Form /> */}
      <Table dataTable={dataTable} />
      {/* {data.row && <MatrixTable />} */}
    </Container>
  );
}
