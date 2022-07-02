import './App.css';
import React from 'react';
import axios from "axios";
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
import ModifyDetails from "./views/ModifyDetails/modifyDetails";
import ModifyDomaine from "./views/ModifyDomaine/modifyDomaine";
import ModifyThemes from "./views/ModifyTheme/modifyThemes";
import ModifyNiveaux from "./views/ModifyNiveaux/modifyNiveaux";
import ModifyDomaineIndus from "./views/ModifyDomaineIndus/modifyDomaineIndus";
import ModifyProjects from "./views/ModifyProjects/modifyProjects";
import ModifyCycleFormation from "./views/ModifyCycleFormation/modifyCycleFormation";
import CycleFormationDetails from "./views/CycleFormationDetails/cycleFormationDetails";
import FormateurSpace from "./views/FormateurSpace/formateurSpace";
import ModifyDemands from "./views/ModifyDemands/modifyDemands";
import CycleFormationIndusDetails from "./views/CycleFormationIndusDetails/cycleFormationIndusDetails";
import ModifyArticles from "./views/ModifyArticles/modifyArticles";
import FormateurCycleDetails from "./views/FormateurCycleDetails/formateurCycleDetails";
import FormateurSpaceIndus from "./views/FormateurSpaceIndus/formateurSpaceIndus";
import FormateurCycleDetailsIndus from "./views/FormateurCycleDetailsIndus/formateurCycleDetailsIndus";
import Profile from "./views/Profile/profile";
import ProfileClient from "./views/Profile/profileClient";
import ProfileIndus from "./views/Profile/profileIndus";
import ProfileFormateur from "./views/Profile/profileFormateur";


axios.defaults.withCredentials = true;

axios.defaults.baseURL = "http://127.0.0.1:8000/"
axios.defaults.headers.post["Content-Type"] = 'application/json';
axios.defaults.headers.post["Accept"] = 'application/json';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
window.axios = require('axios');
axios.interceptors.request.use(function (config){
    const token = localStorage.getItem('auth_token');
    config.headers.Authorization = token ? `Bearer ${token}` : '';
    return config;
});

function App() {
  return (
      <BrowserRouter>
        <Routes>
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
            />

            <Route path="/" element={<Acceuil/>}/>

            <Route path="/contact" element={<Contact/>}/>

            <Route path="/services" element={<Services/>}/>

            <Route path="/formations" element={<Formations/>}>
                <Route path=":id" element={<DataContainer/>}/>
            </Route>

            <Route path="/references" element={<References/>}>


                <Route path="/references/sms2i-service-locals" element={<ServicesLocalData/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="/references/btc-commerce-international" element={<BtcCommercial/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="/references/smi-international" element={<SmiInternational/>}>
                    <Route path=":id" element={<DataContainer/>}/>
                </Route>

                <Route path="/references/sms3i" element={<Sms3i/>}>
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
            <Route path="/client/profile" element={<ProfileClient/>}/>

            <Route path="/client-indus/formations" element={<IndusFormation/>}>
                <Route path=":id" element={<DataContainer/>}/>
            </Route>

            <Route path="/client-indus/vos-inscriptions" element={<VosInscriptionIndus/>}>
                <Route path=":id" element={<InscriptionDetails/>}/>
            </Route>

            <Route path="/client-indus/vos-projets" element={<VosProjets/>}>
                <Route path=":id" element={<ProjetDetails/>}/>
            </Route>
            <Route path="/client-indus/profile" element={<ProfileIndus/>}/>

            <Route path='/formateur' element={<FormateurSpace/>}>
                <Route path=":id" element={<FormateurCycleDetails/>}/>
            </Route>

            <Route path='/formateur-indus' element={<FormateurSpaceIndus/>}>
                <Route path=":id" element={<FormateurCycleDetailsIndus/>}/>
            </Route>
            <Route path="/formateur/profile" element={<ProfileFormateur/>}/>

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
                <Route path="formations-details" element={<ModifyDetails/>}>
                    <Route path=":id" element={<ModifyDomaine/>}>
                        <Route path=":id" element={<ModifyThemes/>}>
                            <Route path=":id" element={<ModifyNiveaux/>}/>
                        </Route>
                    </Route>
                </Route>
                <Route path="demande-formations" element={<ModifyDemands/>}>
                    <Route path=":id" element={<CycleFormationIndusDetails/>}/>
                </Route>
                <Route path="domaine-insdutriel" element={<ModifyDomaineIndus/>}/>

                <Route path="projects" element={<ModifyProjects/>}>
                    <Route path=":id" element={<ProjetDetails/>}/>
                </Route>

                <Route path="cycle-formations" element={<ModifyCycleFormation/>}>
                    <Route path=":id" element={<CycleFormationDetails/>}/>
                </Route>
                <Route path="articles" element={<ModifyArticles/>}/>
                <Route path="profile" element={<Profile/>}/>

            </Route>



        </Routes>

      </BrowserRouter>
  );
}

export default App;


