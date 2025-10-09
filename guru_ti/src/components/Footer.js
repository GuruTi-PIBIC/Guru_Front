import React from 'react';

export default function Footer() {
  return (
    <footer className="w-full py-6 px-6 text-sm text-gray-400 bg-gray-50 mt-auto" style={{ backgroundColor: '#F9FAFB' }}>
      <div className="max-w-7xl mx-auto">© {new Date().getFullYear()} Guru TI. Todos os direitos reservados.</div>
    </footer>
  );
}
