import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, UL } from "./components/Styles";

const contact = () => {
  return (
    <Container>
      <Navigation />
      <Content>
        <Header>Contact Methods</Header>
        <br />
        <UL>
          <LI>VEC Email: </LI>
          <LI></LI>
        </UL>
      </Content>
      <Footer />
    </Container>
  );
};

export default contact;
