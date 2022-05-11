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
import PiecesRechenge from "./views/PiecesRechenge/piecesRechenge";
import RechengeChoose from "./components/RechengeChoose/rechengeChoose";
import Piece from "./components/Piece/Piece";
import Galerie from "./views/Galerie/Galerie";
import GroupeSms2i from "./views/GroupeSms2i/groupeSms2i";
import SignUp from "./views/SignUp/signUp";
import SignIn from "./views/SignIn/signIn";
import ClientFormation from "./views/ClientFormation/clientFormation";
import VosInscriptions from "./views/VosInscriptions/vosInscriptions";
import InscriptionDetails from "./components/InscriptionDetails/inscriptionDetails";


import axios from "axios";
import IndusFormation from "./views/IndusFormation/indusFormation";
import VosInscriptionIndus from "./views/VosInscriptionIndus/vosInscriptionIndus";
import VosProjets from "./views/VosProjets/vosProjets";
import ProjetDetails from "./components/ProjetDetails/projetDetails";
import AdminDashboard from "./views/AdminDashboard/adminDashboard";
import ModifyAcceuil from "./views/ModifyAcceuil/modifyAcceuil";
import ModifyServices from "./views/ModifyServices/modifyServices";
import ModifyFormation from "./views/ModifyFormation/modifyFormation";
import ModifyReference from "./views/ModifyReferences/modifyReferences";
import ModifyGroupeSms2i from "./views/ModifyGroupeSms2i/modifyGroupeSms2i";
import ModifyClients from "./views/ModifyClients/modifyClients";
import ModifyClientsIndus from "./views/ModifyClientIndus/modifyClientIndus";
import ModifyFormateur from "./views/ModifyFormateur/modifyFormateur";
import ModifyAdmin from "./views/ModifyAdmin/modifyAdmin";


axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';
window.axios = require('axios');


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

            <Route path="/pieces-rechange" element={<PiecesRechenge/>}>

                <Route path="all" element={<RechengeChoose/>}>

                    <Route path=":id" element={<Piece/>}/>

                </Route>

            </Route>

            <Route path="/galerie" element={<Galerie/>}/>

            <Route path="/groupe-sms2i" element={<GroupeSms2i/>}/>

            <Route path="/sign-up" element={<SignUp/>}/>

            <Route path="/sign-in" element={<SignIn/>}/>

            <Route path="/client/formations" element={<ClientFormation/>}>
                <Route path=":id" element={<DataContainer/>}/>
            </Route>

            <Route path="/client/vos-inscriptions" element={<VosInscriptions/>}>
                <Route path=":id" element={<InscriptionDetails/>}/>
            </Route>

            <Route path="/client-indus/formations" element={<IndusFormation/>}>
                <Route path=":id" element={<DataContainer/>}/>
            </Route>

            <Route path="/client-indus/vos-inscriptions" element={<VosInscriptionIndus/>}>
                <Route path=":id" element={<InscriptionDetails/>}/>
            </Route>

            <Route path="/client-indus/vos-projets" element={<VosProjets/>}>
                <Route path=":id" element={<ProjetDetails/>}/>
            </Route>

            <Route path="/dashboard-admin" element={<AdminDashboard/>}>
                <Route path="acceuil" element={<ModifyAcceuil/>}/>
                <Route path="services" element={<ModifyServices/>}/>
                <Route path="formation" element={<ModifyFormation/>}/>
                <Route path="references" element={<ModifyReference/>}/>
                <Route path="groupe-sms2i" element={<ModifyGroupeSms2i/>}/>
                <Route path="clients" element={<ModifyClients/>}/>
                <Route path="clients" element={<ModifyClients/>}/>
                <Route path="clients-indus" element={<ModifyClientsIndus/>}/>
                <Route path="formateurs" element={<ModifyFormateur/>}/>
                <Route path="admins" element={<ModifyAdmin/>}/>

            </Route>



        </Routes>

      </BrowserRouter>
  );
}

export default App;


