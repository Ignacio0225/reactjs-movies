import { useState, useEffect } from "react";
import Movie from "./components/Movie";

import {
    BrowserRouter as Router, //HashRouter는 url/#/movie 이런식으로 작성
    Routes,
    Route,
} from "react-router-dom";

import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
    return <Router>
        <Routes>
            <Route path="/movie/:id" element={<Detail/>}></Route>
            <Route path="/" element={<Home/>}></Route>
        </Routes>
    </Router>;
}

export default App;