

import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";

import Login from "./Login";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Login></Login>}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
