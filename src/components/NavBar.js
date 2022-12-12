import "./NavBar.css";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="nav">
            <Link className="site-head" to="/home">NUTRIFACT</Link>
            <ul>
                <li><Link to="/App">SEARCH NUTRIENTS</Link></li>
                <li><Link to="/Fun">ENVIRONMENTAL IMPACT</Link></li>
                <li><Link to="/Track">FUN WITH P5</Link></li>
            </ul>
        </nav>
    )
}