import logo from './img/Guru.png';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { FaGoogle, FaInstagram, FaFacebookF, FaEye, FaEyeSlash } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Cadastro() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="h-screen w-full bg-gray-50 flex flex-col">
      <Navbar />

      <main className="flex-1 flex flex-col lg:flex-row items-stretch">
        <div className="w-full lg:flex-1 bg-transparent overflow-visible flex flex-col lg:flex-row">

          {/* Texto e imagem (lado esquerdo em desktop, topo em mobile) */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 relative flex flex-col lg:justify-center lg:min-h-screen lg:-translate-y-8">
            {/* Bolinhas de fundo */}
            <div className="absolute left-4 top-4 w-40 h-40 sm:left-8 sm:top-8 sm:w-80 sm:h-80 rounded-full opacity-40 blur-3xl transform -rotate-6 z-0 pointer-events-none" style={{ backgroundColor: '#f1c55eef'}}></div>
            <div className="absolute right-4 bottom-8 w-48 h-48 sm:right-8 sm:bottom-12 sm:w-96 sm:h-96 rounded-full opacity-25 blur-2xl transform z-0 pointer-events-none" style={{ backgroundColor: '#6b8edbea' }}></div>

            {/* Texto Guru TI alinhado ao navbar */}
            <div className="mt-6 relative z-10 w-full">
              <div className="max-w-7xl mx-auto px-6">
                <div className="mt-0 ml-0 sm:ml-4 md:ml-12 lg:ml-20 max-w-lg text-center md:text-left">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-gray-800" style={{ fontFamily: 'Outfit', fontWeight: 'bold'}}>Guru TI</h1>
                  <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed max-w-sm mx-auto md:mx-0">
                    Sua jornada começa aqui!<br/>
                    Descubra carreiras, planeje seus estudos<br/>
                    e conecte-se ao futuro da tecnologia.
                  </p>
                </div>
              </div>
            </div>

            {/* Imagem Guru */}
            <div className="absolute hidden lg:flex inset-y-0 right-0 items-center pr-8 pointer-events-none z-10">
              <img src={logo} alt="mascot" className="w-48 md:w-60 lg:w-72 h-auto object-contain" style={{ filter: 'drop-shadow(0 10px 20px rgba(71, 51, 51, 0.25))'}}/>
            </div>
            {/* Mostra a logo menor em mobile */}
            <div className="mt-6 lg:hidden flex justify-center z-10">
              <img src={logo} alt="mascot" className="w-40 h-auto object-contain" style={{ filter: 'drop-shadow(0 8px 16px rgba(71, 51, 51, 0.20))'}}/>
            </div>
          </div>
          
          {/* Formulário de login */}
          <div className="w-full lg:w-1/2 p-6 md:p-12 flex items-center justify-center" style={{ fontFamily: 'ABeeZee' }}>

            <div className="w-full max-w-lg sm:max-w-md md:max-w-lg">
              <div className="mt-2">
                <input aria-label="usuario" 
                className="w-full px-4 py-3 rounded-lg border border-blue-150 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-accent" 
                placeholder="Usuário" />
              </div>

              <div className="mt-2 relative">
                <input aria-label="nomecompleto" type="password" className="w-full px-4 py-3 rounded-lg border border-blue-150 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Nome completo" />
                <button className="absolute right-3 top-3 text-gray-400"></button>
              </div>

              <div className="mt-2 relative">
                <input aria-label="email" type="password" className="w-full px-4 py-3 rounded-lg border border-blue-150 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-accent" placeholder="Email" />
              </div>

              <div className="mt-2 relative">
                <input aria-label="password" 
                type={showPassword ? 'text' : 'password'} 
                className="w-full px-4 py-3 rounded-lg border border-blue-150 bg-blue-50 focus:outline-none focus:ring-2 focus:ring-accent" 
                placeholder="Senha" />
                <button
                  type="button" onClick={() => setShowPassword(prev => !prev)} 
                  aria-label={showPassword ? 'Esconder senha' : 'Mostrar senha'}
                  aria-pressed={showPassword}
                  className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 flex items-center justify-center text-gray-500 hover:text-gray-700 focus:outline-none">
                  {showPassword ? <FaEyeSlash className="w-5 h-5" /> : <FaEye className="w-5 h-5" />}
                </button>
              </div>

              <div className="mt-4 text-right">
                <a href="#" className="text-sm text-gray-400">Já possui conta?</a>
              </div>

              <button className="mt-6 w-full bg-primary text-white py-3 rounded-lg shadow-[0_10px_20px_rgba(0,0,0,0.15)] hover:shadow-[0_20px_30px_rgba(0,0,0,0.15)] hover:shadow-md transition focus:outline-none" style={{ backgroundColor: '#466FC6'}}>Entrar</button>

              {/* Entre com */}
                {/* Entre com */}
                <div className="mt-6 w-full">
                  <div className="max-w-lg mx-auto flex items-center">
                    <div className="flex-1 h-px bg-gray-300"></div>
                    <div className="px-4 text-center text-gray-500 text-sm">Acessar com</div>
                    <div className="flex-1 h-px bg-gray-300"></div>
                  </div>

                  <div className="mt-4 flex items-center justify-center gap-6">
                    <button aria-label="Entrar com Google" className="h-12 w-40 md:w-44 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition focus:outline-none flex items-center justify-center">
                      <FaGoogle className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#1877F2' }} />
                    </button>

                    <button aria-label="Entrar com Facebook" className="h-12 w-40 md:w-44 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition focus:outline-none flex items-center justify-center">
                      <FaInstagram className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#1877F2' }} />
                    </button>

                    <button aria-label="Entrar com Facebook" className="h-12 w-40 md:w-44 bg-white rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition focus:outline-none flex items-center justify-center">
                      <FaFacebookF className="w-6 h-6 md:w-7 md:h-7" style={{ color: '#1877F2' }} />
                    </button>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
