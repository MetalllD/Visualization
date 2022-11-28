import "./NavBar.css";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="nav">
            <Link className="site-head" to="/home">Nutrifact</Link>
            <ul>
                <li><Link to="/App">Search Nutrients</Link></li>
                <li><Link to="/Track">Track</Link></li>
                <li><Link to="/Fun">Fun</Link></li>
            </ul>
        </nav>
    )
}