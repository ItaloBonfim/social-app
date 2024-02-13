import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import {store, persistor} from './Redux/store';
import { PersistGate } from 'redux-persist/integration/react';

import Login from './pages/Login';
import Perfil from './pages/Perfil';
import About from './pages/About';
import Home from './pages/Home';
//import Gaming from './pages/Gaming';
import Configuracao from './pages/Configuracao';
import NotFound from './pages/NotFound.js';

//import Aprendizado from './ToolBarApp'

export default function RoutesApp() {
    return (
        <Provider store={store}>
            <PersistGate loading = {null} persistor={persistor}>

            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Login />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/About' element={<About />}></Route>
                    <Route path='/Home' element={<Home />}></Route>
{/*                     <Route path='/Gaming' element={<Gaming />}></Route> Está rota ainda está sendo planejada*/}
                    <Route path='/Configs' element={<Configuracao />}></Route>
                    <Route path='/Perfil' element={<Perfil />}></Route>
                   {/*  <Route path='/RotaAprendizado' element={<Aprendizado />}></Route>  Está rota é utilizada para realizar testes especificos*/}
                    <Route path='*' element={<NotFound />}></Route>
                </Routes>
            </BrowserRouter>
            </PersistGate>
        </Provider>
    )
}