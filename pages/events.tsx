import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";


const events = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
        <h1>REE</h1>
      </Content>
      <Footer/>
    </Container>
  )
}

export default events;