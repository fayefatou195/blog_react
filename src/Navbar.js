import { Link } from "react-router-dom";
const Navbar = () =>{
 return (
        <nav className="navbar">
        <div>
           <Link className="logo" to="/">Fatou</Link>
        </div>
        <ul className="liens">
            <li>
                <Link to="/" className="lien">Acceuille</Link>
            </li>
            <li>
                <Link to="/ajouter" className="lien buttonArticle">creer article</Link>
            </li>
        </ul> 
       </nav>
  );
};

export default Navbar ;