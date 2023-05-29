import Header, {Main, Dropz} from "./components"
import {GlobalStyle} from './style/GlobalStyle'

function App() {
  return (
    <main>
      <GlobalStyle/>
      <Header></Header>
      <Main/>
      <Dropz/>
    </main>
  );
}

export default App;