import './App.css';
import Nav from './components/Nav';
import Form from './components/Form';


//the app itself returning the components I have injected
function App() {
  return (
    <div className="App">

      <Nav />

    <br></br>

      <div className='form-container'>

        <Form />

      </div>
    
    </div>

  );
}

export default App;
