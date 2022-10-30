import { React } from "react";
import { Routes, Route } from 'react-router-dom';

import Auth from "../auth/Auth";
import Registration from '../registration/Registration';
import Lending from "../lending/Lending";

import './Main.css'

const Main = () => {
    return (<main >


        <Routes>
            <Route path='/' element={<Lending />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="/registration" element={<Registration />} />
        </Routes>
    </main>
    )
}

export default Main