import {Dropz} from "./companents/components"
import {GlobalStyle} from './style/GlobalStyle'
import Header from "./companents/header";
import {Overall, Card} from "./companents/cards";
import Footer from "./companents/footer";
import {Section} from './style/styleApp'
import CardsProvider from "./context/cardsProvider.jsx";
import Cover from './companents/cover'
import Hint from './companents/Hint'

function App() {

  let droped = false

  return (
    <main>
      <GlobalStyle/>
      <Header/>
      <Hint hidden={droped}/>
      <CardsProvider>
        {/* <Overall title='titulo' hidden={droped}/>
        <Section hidden={droped}>
          <Card name={'color'} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
          <Card name={'uniqueness'} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
          <Card name={'legibility'} title='titulo'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been 
          the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a </Card>
        </Section> */}
        <Dropz hidden={droped} />
      </CardsProvider>
      <Cover/>
      <Footer/>
    </main>
  );
}

export default App;
