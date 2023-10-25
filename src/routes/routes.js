import {Routes, Route } from "react-router-dom";
import Bio from "../pages/bio";
import Contact from "../pages/contact";
import Discography from "../pages/discography";
import Gallery from "../pages/gallery";
import Home from "../pages/home";

const Router = ()=>{
    return(
        <Routes>
            <Route exact path="/" element={<Home />} ></Route>
            <Route exact path="/bio" element={<Bio/>}></Route>
            <Route exact path="/contact" element={<Contact/>}></Route>
            <Route exact path="/discography" element={<Discography/>}></Route>
            <Route exact path="/gallery" element={<Gallery/>}></Route>
        </Routes>
    )
}
export default Router;