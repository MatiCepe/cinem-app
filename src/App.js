import { Landing } from './components/Landing'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { CContainer } from '@coreui/react';
import { Header } from './components/Header';
import './css/styles.css'
import  MoviesProvider, { useMoviesContext }  from "./context/MoviesContext";



function App() {
  return (
    <MoviesProvider>
      <div className="App mt-3 root-style">
      <CContainer fluid>
        <Header />
        <Landing />
      </CContainer>
    </div>
    </MoviesProvider>
    
  );
}

export default App;
