import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";


const subclubs = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
        <Header>All Sub-Clubs</Header>
        <UL>
          <LI>
            <Header>VRAM</Header>
            <Paragraph>
              DEFAULT INFORMATION
            </Paragraph>
          </LI>
        </UL>
      </Content>
      <Footer/>
    </Container>
  )
}

export default subclubs;