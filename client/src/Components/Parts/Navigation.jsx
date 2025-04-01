import { Link } from "react-router-dom";
import { useState } from "react";
import logo from "/photos/Logo/logo.jpg";

export default function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const navigation = [
        { name: "Home", path: "/" },
        { name: "Products", path: "/products" },
        { name: "About", path: "/about" },
        { name: "Contacts", path: "/contacts" },
        { name: "Cart", path: "/cart" },
    ];

    return (
        <nav className="nav-body">
            <div className="site">
                <header>
                    <Link to="/">
                        <img src={logo} alt="Logo" className="logo" />
                    </Link>

                    <button
                        className="menu-button"
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        {menuOpen ? "✖ Close" : "☰ Menu"}
                    </button>

                    <nav className={`main-nav ${menuOpen ? "open" : ""}`}>
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link
                                        to={item.path}
                                        onClick={() => setMenuOpen(false)} // Затваря менюто при клик
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </header>
            </div>
        </nav>
    );
}
