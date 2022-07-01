import { useState } from "react"
import { WheelChairData } from "./WheelChairData"

export default function NewCol() {
  const [isShown, setIsShown] = useState(null)


  return (
    <>
      <div className='py-20 text-center justity-center text-4xl uppercase text-blue-700 font-semibold'>Sillas de Ruedas</div>
      <div className="px-96 rounded-sm gap-3 flex">
        {WheelChairData.map((WheelChair) => {
          return (
            // Se encargará de mostrar el componente WheelChair 
            <div className="hover:container">
              <img
                onMouseEnter={() => setIsShown(!false)}
                //Decidí dejarlo así, ya que no logré solucionar el problema del mouse over en el Componente NewCol está incluido sin comentar
                className="object-cover w-full h-full cursor-pointer"
                src={WheelChair.image}
                alt={WheelChair.id}
                style={{ height: "400px", width: "450px" }}
              />
              <span className="text-left font-bold absolute">{WheelChair.title} </span>
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
