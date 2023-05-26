// import Dropzone from 'react-dropzone';
import './App.css';
import Header, {Main, File} from "./components"

function App() {
  return (
    <main className="App-header">
      <Header></Header>
      <Main>
        <File/>
      </Main>
    </main>
  );
}

export default App;
