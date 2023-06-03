import {Dropz} from "./companents/components"
import {GlobalStyle} from './style/GlobalStyle'
import Header from "./companents/header";
import {Overall, Card} from "./companents/cards";
import Footer from "./companents/footer";
import {Section} from './style/styleApp'



function App() {
  return (
    <main>
      <GlobalStyle/>
      <Header/>
      <Overall arrayPosition={0} title='titulo'/>
      <Section>
        <Card arrayPosition={1} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
        <Card arrayPosition={2} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
        <Card arrayPosition={3} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
        the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
      </Section>
      <Dropz/>
      <Footer/>
    </main>
  );
}

export default App;
