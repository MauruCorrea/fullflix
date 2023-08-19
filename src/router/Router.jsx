import{ BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/home/Home";
import Detail from "../pages/details/Detail";


export function Router (){
    return(
        <BrowserRouter>
            <Routes>
                <Route index element={<Home />}/>
                <Route path="/detail" element={<Detail/>}/>
                <Route path="*" element={<div><h1>Erro 404</h1></div>}/>
            </Routes>
        </BrowserRouter>
    )
}