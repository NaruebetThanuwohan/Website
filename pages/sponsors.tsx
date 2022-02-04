import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header } from "./components/Styles";


const sponsors = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
        <Header>Club Sponsors</Header>
      </Content>
      <Footer/>
    </Container>
  )
}

export default sponsors;