import React, { useState } from "react";
import {Link} from "react-router-dom";
import logo from "../assets/logo-guarderia.png"


const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className="w-full h-18 fixed bg-slate-50">
                <div className="flex justify-between p-2">
                    <div>
                        <img src={logo} alt="logo" className="w-40 ml-4"/>
                    </div>
                    
                    <div className="hidden md:flex justify-between items-center">
                        <Link to="/" className="mr-4 ml-14 hover:text-red-600"> Inicio</Link>
                        <Link to="/quienesSomos" className="mr-4 hover:text-red-600">Quienes Somos</Link>
                        <Link to="/niveles" className="mr-4 hover:text-red-600">Niveles</Link>
                        <Link to="/admisiones" className="mr-4 hover:text-red-600">Admisiones</Link>
                        <Link to="/egresados" className="mr-4 hover:text-red-600">Egresados</Link>
                        <Link to="/contacto" className="mr-4 hover:text-red-600">Contacto</Link>
                    </div>
                    
                    
                    <div className="flex md:hidden">
                        <button onClick={toggleMenu} className="block text-gray-500 hover:text-gray-700 focus:outline-none">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {menuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                    {menuOpen && (
                        <div className="md:hidden absolute top-16 right-0 bg-gray-100 w-full border border-gray-200 shadow-lg">
                            <div className="flex flex-col items-center py-2">
                                <Link to="/" className="my-1 hover:text-red-600"> Home</Link>
                                <Link to="/quienesSomos" className="my-1 hover:text-red-600">Quienes Somos</Link>
                                <Link to="/niveles" className="my-1 hover:text-red-600">Niveles</Link>
                                <Link to="/admisiones" className="my-1 hover:text-red-600">Admisiones</Link>
                                <Link to="/egresados" className="my-1 hover:text-red-600">Egresados</Link>
                                <Link to="/contacto" className="my-1 hover:text-red-600">Contacto</Link>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

export default Navbar;