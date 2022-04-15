import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Acceuil from "./views/Acceuil/Acceuil";
import Contact from "./views/Contact";
import Services from "./views/Services/Services";
import Formations from "./views/Formmations/Formations";
import FormationContainer from "./components/FormationContainer/formationContainer";






function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Acceuil/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/services" element={<Services/>}/>
            <Route path="/formations" element={<Formations/>}>
                <Route path=":id" element={<FormationContainer/>}/>
            </Route>

          {/*<Route path="/references" element={<References/>}/>*/}
          {/*<Route path="/pieces-rechange" element={<PiecesDeRechenge/>}/>*/}
          {/*<Route path="/galerie" element={<Galerie/>}/>*/}
          {/*<Route path="/groupe-sms2i" element={<GroupeSMS2I/>}/>*/}
          {/*<Route path="/espace-universitaire" element={<EspaceUniversitaire/>}/>*/}


        </Routes>

      </BrowserRouter>
  );
}

export default App;


