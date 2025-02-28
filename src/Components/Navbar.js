import React from "react"; //lo importiamo per poter scrivere i vari componenti
import "./Navbar.css";
import { FaSearch } from "react-icons/fa";



const Navbar = () => {
    return(
        <nav className="navbar">

            <div className="logo">
                <img src="/images/Amazon_logo.svg" alt="Amazon Logo" />
            </div>
            <div className="search-container">
            <input type = "text" placeholder = "Cerca prodotti..." className="search-bar" /> {/* questa è la barra di ricerca*/}
            <button className="search-button">
                <FaSearch />
            </button>
            </div>

            <div className="account">
                <span> Ciao, Accedi</span>
                <div className="account icon">👤</div>
            </div>

            <div className="language-selector">
                <select>
                    <option value="en">🇬🇧 EN</option>
                    <option value="en">🇮🇹 IT</option>
                    <option value="en">🇫🇷 FR</option>
                    <option value="en">🇩🇪 DE</option>
                </select>
            </div>

            <div className="orders">
                <span>Resi</span>
                <span>& Ordini</span>
            </div>

            
            
            <div className="cart">🛒 
                <span className="cart-count">0</span>
            </div>
        </nav>
    );
};


export default Navbar;