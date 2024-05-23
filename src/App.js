import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import Routing from './routes/Routing';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
       <NavBar/>
      <Routing />
    </div>
  );
}

export default App;
