import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { TbAlignLeft, TbArrowBigRightLinesFilled } from 'react-icons/tb';
import favicon from '../Assets/images/icons/favicon.png';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div>
            <nav className="navbar">
                <img src={favicon} ></img>
                {isOpen ? (
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <TbArrowBigRightLinesFilled />
                    </div>
                ) : (
                    <div className="menu-toggle" onClick={toggleMenu}>
                        <TbAlignLeft />
                    </div>
                )}
                <div className={`menu ${isOpen ? 'open' : ''}`}>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">About</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
