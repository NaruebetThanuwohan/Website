import Container from "./components/Container";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import { Header, LI, Paragraph, UL } from "./components/Styles";


const exec = () =>{
  return(
    <Container>
      <Navigation/>
      <Content>
      <Header>VEC 2022 Executive Team</Header>
        <Paragraph>
          Our volunteers which make sure our events are run, our funding is secured, and Howard's dad jokes are contained.
        </Paragraph>
        <UL>
          <LI>
            <UL>
              <LI><Header>President</Header></LI>
              <LI><Paragraph>Holder: Leon Bowie</Paragraph></LI>
              <LI><Paragraph>Role:</Paragraph></LI>
            </UL>
          </LI>
          <br/>
          <LI>
            <UL>
              <LI><Header>Vice President</Header></LI>
              <LI><Paragraph>Holder: Shae West</Paragraph></LI>
              <LI><Paragraph>Role:</Paragraph></LI>
            </UL>
          </LI>
          <br/>
          <LI>
            <UL>
              <LI><Header>Treasurer</Header></LI>
              <LI><Paragraph>Holder: Alex</Paragraph></LI>
              <LI><Paragraph>Role:</Paragraph></LI>
            </UL>
          </LI>
          <br/>
          <LI>
            <UL>
              <LI><Header>Secretary</Header></LI>
              <LI><Paragraph>Holder: Georgia Barrand</Paragraph></LI>
              <LI><Paragraph>Role:</Paragraph></LI>
            </UL>
          </LI>
          <br/>
          <LI>
            <UL>
              <LI><Header>General Executives</Header></LI>
              <LI><Paragraph>Holders:</Paragraph></LI>
              <LI><Paragraph>1</Paragraph></LI>
              <LI><Paragraph>2</Paragraph></LI>
            </UL>
          </LI>
          <br/>
        </UL>
      </Content>
      <Footer/>
    </Container>
  )
}

export default exec;