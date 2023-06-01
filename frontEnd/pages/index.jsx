import {Dropz} from "./companents/components"
import {GlobalStyle} from './style/GlobalStyle'
import Header from "./companents/header";
import Overall, {Card} from "./companents/cards";
import Footer from "./companents/footer";

function App() {
  return (
    <main>
      <GlobalStyle/>
      <Header/>
      <Overall/>
      <Card/>
      <Dropz/>
      <Footer/>
    </main>
  );
}

export default App;
