import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "../pages/ThreeDHome";
import PageNotFound from "../pages/PageNotFound";

const App: React.FC = () => {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<ThreeDHome />} />
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </div>
    );
};

export default App;
