import React from "react"; //lo importiamo per poter scrivere i vari componenti
import "./Navbar.css";



const Navbar = () => {
    return(
        <nav className="navbar">

            <div className="logo">
                <img src="/images/Amazon_logo.svg" alt="Amazon Logo" />
            </div>
            
            <input type = "text" placeholder = "Cerca prodotti..." className="search-bar" /> {/* questa è la barra di ricerca*/}

            <div className="account">
                <span> Ciao, Accedi</span>
                <div className="account icon">👤</div>
            </div>
            
            <div className="cart">🛒 Carrello</div>
        </nav>
    );
};


export default Navbar;