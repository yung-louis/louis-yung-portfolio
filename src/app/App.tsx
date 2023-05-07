import "./App.css";
import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "../pages/ThreeDHome";
import PageNotFound from "../pages/PageNotFound";
import SarcoSim from "../pages/SarcoSim";
import AppHeader from "../components/AppHeader";
import TwoDHome from "../pages/TwoDHome";

const App: React.FC = () => {
    const [threeD, setThreeD] = useState(true);

    return (
        <div className="App">
            <BrowserRouter>
                <AppHeader state={[threeD, setThreeD]} />
                <Routes>
                    <Route
                        path="/"
                        element={threeD ? <ThreeDHome /> : <TwoDHome />}
                    />
                    <Route path="/sarcosim" element={<SarcoSim />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
