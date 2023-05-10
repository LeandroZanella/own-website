import React from 'react';

export default function Main() {
  return (
    <div className="flex justify-center items-center h-screen w-full bg-gray-950" id='start'>
      <div className="flex-col items-center">
        <h1 className="text-2xl font-bold text-white mb-4">Bem-vindo ao meu website!</h1>
        <div className="flex justify-center items-center animate-bounce" style={{transform: 'translateY(50px)'}}>
          <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M10 16l-5-5h3V9h4v2h3l-5 5z" />
            <path fillRule="evenodd" d="M10 3a7 7 0 110 14 7 7 0 010-14zM4.501 10a5.499 5.499 0 1011 0h-1.502a3.999 3.999 0 11-6.997 0H4.501z" />
          </svg>
          <span className="ml-2 text-white">Role para baixo</span>
        </div>
      </div>
    </div>
  );
}