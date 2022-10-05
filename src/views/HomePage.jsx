import { useEffect } from 'react';

import HeroSection from '../components/HeroSection/HeroSection';

import { Form } from '../components/Form/Form';
import MatrixTable from '../components/TableMatrix/MartixTable';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <Form />

      {/* data.row && */ <MatrixTable />}
    </>
  );
}
