import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
        const [open, setOpen] = useState(false);

        return (
                <header className="w-full bg-transparent">
                                <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8" style={{ fontFamily: 'ABeeZee' }}>
                                        {/* Navegação (Esquerda) */}
                                                <div className="flex flex-col sm:flex-row items-center sm:items-center justify-between gap-4 py-3 md:py-4">
                                                <div className="w-full flex items-center justify-between">
                                                    <nav className="hidden sm:flex flex-wrap items-center text-sm sm:text-base text-gray-700 ml-0 sm:ml-8 gap-3 sm:gap-6">
                                                            <a className="hover:underline px-2 py-1" href="#">Home</a>
                                                            <a className="hover:underline px-2 py-1" href="#">Contato</a>
                                                            <a className="hover:underline px-2 py-1" href="#">Sobre</a>
                                                    </nav>

                                                    {/* Mobile hamburger */}
                                                    <button className="sm:hidden p-2 rounded-md text-gray-700" onClick={() => setOpen(!open)} aria-label="Abrir menu">
                                                        {open ? (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                                                        ) : (
                                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                                                        )}
                                                    </button>
                                                </div>

                                                {/* Ações (Direita) */}
                                                <div className="text-sm mr-0 sm:mr-8 flex items-center gap-4 w-full sm:w-auto justify-center sm:justify-end">
                                                        <div className="flex flex-col items-center mr-0 sm:mr-2">
                                                            <Link className="text-indigo-600 px-2 py-1" to="/login" aria-label="Entrar" style={{ color: '#466FC6' }}>Entrar</Link>
                                                            <div className="mt-0 h-[3px] w-6 bg-[#466FC6] rounded"></div>
                                                        </div>
                                                        <Link to="/cadastrar" className="py-1 px-3 border rounded-full text-sm inline-block" aria-label="Cadastrar" style={{ backgroundColor: '#FFFFFF', color: '#466FC6'}}>Cadastrar</Link>
                                                </div>

                                                {/* Menu mobile */}
                                                {open && (
                                                    <div className="sm:hidden mt-3 w-full">
                                                        <nav className="flex flex-col gap-2 text-center">
                                                            <a className="hover:underline px-2 py-2" href="#">Home</a>
                                                            <a className="hover:underline px-2 py-2" href="#">Contato</a>
                                                            <a className="hover:underline px-2 py-2" href="#">Sobre</a>
                                                        </nav>
                                                    </div>
                                                )}
                                                </div>

                                                {/* Linha divisora */}
                                                <div className="border-b" style={{ borderColor: '#9E9E9E'}} />
                        </div>
                </header>
        );
}
