import { Link, useLocation } from "react-router-dom";

export default function Navigation() {
    const navigation = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Contacts", path: "/contacts" },
    ];

    const pageTitles = {
        "/": "Vivid Chocolatrie",
        "/about": "About Vivid Chocolatrie",
        "/contacts": "Contact Vivid Chocolatrie",
    };

    const location = useLocation();
    const currentTitle = pageTitles[location.pathname] || "Denis's Page";

    return (
        <nav className="nav-body">
            <input type="checkbox" id="nav-toggle" />
            <div className="site">
                <header>
                    <h1>
                        <Link to="/">{currentTitle}</Link>
                    </h1>

                    <label htmlFor="nav-toggle" className="menu-button">
                        <span className="open">☰ Menu</span>
                    </label>

                    <nav className="main-nav">
                        <ul>
                            {navigation.map((item) => (
                                <li key={item.name}>
                                    <Link to={item.path}>{item.name}</Link>
                                </li>
                            ))}
                            <li className="close">
                                <Link to="/">✖</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
            </div>
        </nav>
    );
}
