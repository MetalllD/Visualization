import Track from './Track';
import Fun from './Fun';
import Navbar from './NavBar';
import App from '../App';
import { Routes, Route } from "react-router-dom";

function Home(){
    return(
        <div>
            <Navbar />
            <App />
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/App" element={<App />} />
                <Route path="/Track" element={<Track />} />
                <Route path="/Fun" element={<Fun />} />
            </Routes>
        </div>
)}

export default Home;