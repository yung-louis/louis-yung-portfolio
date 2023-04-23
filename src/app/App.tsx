import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "../pages/ThreeDHome";
import PageNotFound from "../pages/PageNotFound";
import SarcoSim from "../pages/SarcoSim";
import AppHeader from "../components/AppHeader";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader />
                <Routes>
                    <Route path="/" element={<ThreeDHome />} />
                    <Route path="/sarcosim" element={<SarcoSim />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
