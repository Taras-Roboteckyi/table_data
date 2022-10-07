import Arrival from '../Arrival/Arrival';
import FilterForm from '../FilterForm/FilterForm';
import { Container, Title, HeroText, ItemText, TitleDynamic, Text } from './SideBar.styled';

export default function HeroSection() {
  return (
    <Container>
      <Arrival />
      <FilterForm />
    </Container>
  );
}
