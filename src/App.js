import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Acceuil from "./views/Acceuil/Acceuil";
import Contact from "./views/Contact/Contact";
import Services from "./views/Services/Services";
import Formations from "./views/Formmations/Formations";
import DataContainer from "./components/DataContainer/dataContainer";
import References from "./views/References/References";
import ServicesLocalData from "./components/ReferencesData/servicesLocalData";
import SmiInternational from "./components/ReferencesData/smiInternational";
import BtcCommercial from "./components/ReferencesData/BtcCommercial";
import Sms3i from "./components/ReferencesData/sms3i";





function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<Acceuil/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/services" element={<Services/>}/>

            <Route path="/formations" element={<Formations/>}>
                <Route path=":id" element={<DataContainer/>}/>
            </Route>

            <Route path="/references" element={<References/>}>

                <Route path="sms2i-service-locals" element={<ServicesLocalData/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="btc-commerce-international" element={<BtcCommercial/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="smi-international" element={<SmiInternational/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="sms3i" element={<Sms3i/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

            </Route>

          {/*<Route path="/pieces-rechange" element={<PiecesDeRechenge/>}/>*/}
          {/*<Route path="/galerie" element={<Galerie/>}/>*/}
          {/*<Route path="/groupe-sms2i" element={<GroupeSMS2I/>}/>*/}
          {/*<Route path="/espace-universitaire" element={<EspaceUniversitaire/>}/>*/}


        </Routes>

      </BrowserRouter>
  );
}

export default App;


