import React from 'react'

export default function VerProd() {
  return (
    <>
      <div
        className="w-auto pt-24 px-1 pb-24 justify-evenly mx-4 flex h-full bg-gradient-to-r from-sky-400 to-indigo-800"
      >
        <div className="lg:w-1/2 w-full uppercase font-extrabold text-white ">
          <h1 className="text-4xl tracking-tight relative">
            {/*Primera Fila*/}
            <span className="block text-5x1relative"><span className='text-yellow-400'>Más </span> de</span>
            {/*Segunda Fila */}
            <span className="block text-5xl relative">800 mil </span>
            {/*Tercera Fila */}
            <span className="block text-5xl relative">familias</span>
            {/*Cuarta Fila */}
            <span className="block text-5xl relative">habilitadas</span>
            {/*Quinta Fila */}
          </h1>
          <button className='mt-4 py-4 px-6 text-3xl text-white uppercase rounded-md bg-blue-500 hover:bg-indigo-800'>Ver Productos</button>
          <div className="box-border leading-7 lg:text-left text-gray-900 text-center"></div>
        </div>
      </div>
    </>
  )
}

