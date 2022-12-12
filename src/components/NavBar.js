import "./NavBar.css";
import { Link } from "react-router-dom";


export default function Navbar(){
    return(
        <nav className="nav">
            <Link className="site-head" to="gh-pages-url/Home">NUTRIFACT</Link>
            <ul>
                <li><Link to="gh-pages-url/Search">SEARCH NUTRIENTS</Link></li>
                <li><Link to="gh-pages-url/Impact">ENVIRONMENTAL IMPACT</Link></li>
                <li><Link to="gh-pages-url/Fun">FUN WITH P5</Link></li>
            </ul>
        </nav>
    )
}