import { Landing } from './components/Landing'
import '@coreui/coreui/dist/css/coreui.min.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Header } from './components/Header';
import './css/styles.css'
import  MoviesProvider, { useMoviesContext }  from "./context/MoviesContext";
import { CContainer } from '@coreui/react';



function App() {
  return (

      <MoviesProvider>
          <Header />
          <Landing />
      </MoviesProvider>

  );
}

export default App;
