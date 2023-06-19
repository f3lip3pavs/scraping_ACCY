import {Dropz} from "../companents/Dropz"
import {GlobalStyle} from '../style/GlobalStyle'
import Header from "../companents/header";
import {Overall, Card} from "../companents/cards/cards";
import Footer from "../companents/footer";
import {Section} from '../style/styleApp'
import CardsProvider from "../context/cardsProvider";
import Cover from '../companents/cover'
import Hint from '../companents/Hint'
import Recomendation from '../companents/cards/recomendations'


function App() {

  return (
    <main>
      <GlobalStyle/>
      
      <CardsProvider>
        <Header/>
        <Hint/>
        <Section>
          <Card name={'color'} title='Cor'>A cor e o contraste podem ajudar a chamar a atenção para a sua marca. 
          Embora a cor seja muito subjetiva, a psicologia da cor é uma das formas mais eficazes de estabelecer o 
          posicionamento da marca.</Card>
          <Card name={'uniqueness'} title='Autenticidade'>Essa métrica é baseada na semelhança do logotipo com 
          nossa biblioteca de mais de 1 milhão de ícones. O design de logotipo ideal é visualmente único, 
          facilmente distinguido de imagens de estoque e outras formas comuns.</Card>
          <Card name={'legibility'} title='Legibilidade'>Uma silhueta forte e ousada é a marca registrada de 
          grandes logotipos. Ela garante que a marca possa ser reconhecida rapidamente em baixas resoluções, de longe, em 
          dispositivos móveis e em movimento</Card>
        </Section>
        <div className="overall-container">
          <Overall title='titulo'/>
          <Recomendation title='Recomendações'/>
        </div>
        
        <Dropz/>
        <Cover/>
      </CardsProvider>
      <Footer/>
    </main>
  );
}

export default App;
