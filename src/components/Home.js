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
                <Route path="gh-pages-url/Home" element={<Intro/>} />
                <Route path="gh-pages-url/Search" element={<App />} />
                <Route path="gh-pages-url/Fun" element={<Track />} />
                <Route path="gh-pages-url/Impact" element={<Fun />} />
            </Routes>

            
        </div>
)}

export default Home;