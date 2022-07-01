import { useState } from "react"
import { NewColData } from "./NewColData"

export default function NewCol() {
  const [isShown, setIsShown] = useState(null)


  return (
    <>
      <div className='py-20 text-center justity-center text-4xl uppercase text-blue-700 font-semibold'>Sillas de Ruedas</div>
      <div className="px-96 rounded-sm gap-3 flex">
        {NewColData.map((NewCol) => {
          return (
            // Se encargará de mostrar el componente WheelChair 
            <div className="hover:container">
              <img
                //No agregaré porque empieza a desaparecer constantemente al entrar al mouse y salir el mouse
                onMouseEnter={() => setIsShown(false)}
                onMouseLeave={() => setIsShown(true)}
                className="object-cover w-full h-full cursor-pointer"
                src={NewCol.image}
                alt={NewCol.id}
                style={{ height: "400px", width: "450px" }}
              />
              <span className="text-left font-bold absolute">{NewCol.title} </span>
              {/* Aquí iría el mouseOver al entrar a la casilla X, que se muestre el botón de "Agregar al Carrito"*/}

              {isShown && (
                <button

                  className="mt-6 py-4 px-6 text-2xl uppercase w-full rounded-md bg-blue-500">
                  Agregar al carrito
                </button>
              )}
            </div>
          )
        })}

      </div>

    </>

  )
}
