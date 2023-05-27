//import Dropzone from 'react-dropzone';
import './App.css';
import Header, {Main, Dropz} from "./components"

function App() {
  return (
    <main className="App-header">
      <Header></Header>
      <Main/>
      <Dropz/>
    </main>
  );
}

export default App;
