import "./NavBar.css";
import { useState } from "react";
import {logo} from "../assets/Image.js"
import { RiMenuAddFill, RiCloseLargeFill } from "react-icons/ri";


function NavBar() {

    // 控制選單開關
    const [menuOpen, setMenuOpen] = useState(false);
    const showMenu = () => {
        setMenuOpen(true);
    };
    const closeMenu = () => {
        setMenuOpen(true);
    };

    return <header className="navbar">
        <img src={logo} alt="logo" fetchPriority="high"/>
        <nav className="navbar-menu-desktop">
            <p className="navbar-item">設計作品</p>
            <p className="navbar-item">服務項目</p>
            <p className="navbar-item">關於我們</p>
            <p className="navbar-item">聯絡我們</p>
        </nav>
        <RiMenuAddFill className="navbar-toggle" onClick={() => setMenuOpen(true)}/>
        <nav className={`navbar-menu-mobile ${menuOpen ? "navbar-menu-mobile--open" : ""}`}>
            <RiCloseLargeFill className="navbar-closeBT" onClick={() => setMenuOpen(false)}/>
            <div className="navbar-list">
                <p className="navbar-item">設計作品</p>
                <p className="navbar-item">服務項目</p>
                <p className="navbar-item">關於我們</p>
                <p className="navbar-item">聯絡我們</p>
            </div>
        </nav>
    </header>
}

export default NavBar;