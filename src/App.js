import './App.css';
import { BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Navbar from './componentes/navegacion/Navbar'
import Inicio from './componentes/pagina/Inicio'
import Ruta from './componentes/pagina/Ruta'
import Items from './componentes/pagina/Items'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes> 
          <Route path='/' exact Component={Inicio}/>
          <Route path='/ruta' exact Component={Ruta}/>
          <Route path='/items' exact Component={Items}/> 
        </Routes>
      </Router>
    </div>
  );
}

export default App;
