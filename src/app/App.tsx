import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ThreeDHome from "../pages/ThreeDHome";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<ThreeDHome />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    );
}

export default App;
