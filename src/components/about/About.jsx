import React from "react";

export default function About() {
  const avatarUrl = "https://i.pravatar.cc/300";

  return (
    <div className="flex justify-center items-center py-8 w-full bg-gray-950">
      <div className="w-full max-w-screen-lg">
        <div
          className="grid grid-cols-1 md:grid-cols-2 items-center justify-center p-8 bg-gray-950"
          id="about"
        >
          <div className="md:h-full flex items-center justify-center">
            <img
              src={avatarUrl}
              alt="Imagem"
              className="h-80 md:h-80 md:w-80 object-cover rounded-lg"
            />
          </div>
          <div className="text-white p-8 md:p-8">
            <h2 className="text-2xl font-bold mb-4">Sobre mim</h2>
            <p className="text-lg leading-7 text-justify">
              Eu sou uma pessoa apaixonada por programação e tecnologia. Adoro
              trabalhar com desafios relacionados a códigos e encontrar soluções
              criativas para problemas complexos. Sou muito dedicado e disciplinado
              em tudo o que faço, e aplico essa mesma mentalidade no desenvolvimento
              de softwares. Gosto de criar código limpo e organizado, o que me ajuda
              a manter meus projetos estruturados e fáceis de entender. Para mim,
              trabalhar com tecnologia não é apenas uma profissão, mas uma paixão
              que me inspira a sempre buscar novos conhecimentos e desafios. Estou
              sempre em busca de aprendizado e evolução, e é essa busca incessante
              que me motiva a me tornar um desenvolvedor cada vez melhor.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
