import React from "react";

function Navbar({ children }) {
    return (
        <nav className="uk-navbar-container" uk-navbar="true">
            <div className="uk-navbar-left">
                <ul className="uk-navbar-nav">
                    Google Books
                    {children}
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
