import './App.css';
import {BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar';
import RoutesC from './components/Routes';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Navbar/>
     <RoutesC/>
    </div>
    </BrowserRouter>
  );
}

export default App;
