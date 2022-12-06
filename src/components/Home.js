import Track from './Track';
import Fun from './Fun';
import Navbar from './NavBar';
import App from '../App';
import Intro from './Intro';
import { Routes, Route } from "react-router-dom";
import "./Home.css";


function Home(){

   

    return(
        <div className="home">
            <Navbar />
            <Routes>
                <Route path="*" element={<Intro />} />
                <Route path="/home" element={<Intro/>} />
                <Route path="/App" element={<App />} />
                <Route path="/Track" element={<Track />} />
                <Route path="/Fun" element={<Fun />} />
            </Routes>

            
        </div>
)}

export default Home;