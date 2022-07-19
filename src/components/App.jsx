import { useFetchContactsQuery } from '../redux/api-servise';
import ContactForm from '../ContactForm';
import ContactList from '../ContactList';
import { Container, MainTitle, Title } from './Appstyled';
import Filter from '../Filter';

function App() {
  const fetchContacts = useFetchContactsQuery();

  return (
    <Container>
      <MainTitle>Phone Book</MainTitle>
      <ContactForm contacts={fetchContacts} />
      <Title>Contacts</Title>
      <Filter title="Find contact by name" />
      <ContactList contacts={fetchContacts} />
    </Container>
  );
}

export { App };