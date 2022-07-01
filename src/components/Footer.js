/* 
    Usé sm para darle tamaño a las columnas de la tabla y así poder darles el campo que necesitan 
 */
export default function Footer() {
    return (
        <>
            <div class="w-full h-full px-6 bg-grey-lighter p-8 bg-gray-900 text-white">
                <div class="sm:flex mb-4">
                    <div class="sm:w-1/4 h-auto">
                        <div class="text-orange mb-2 uppercase">Sobre Nosotros</div>
                        <ul class="list-reset leading-normal">
                            <li class="hover:text-blue-600 underline">¿Quienes somos?</li>
                            <li class="hover:text-blue-600 underline">Nuestra Historia</li>
                            <li class="hover:text-blue-600 underline">Nuestra Información</li>
                        </ul>
                    </div>
                    <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <div class="text-blue mb-2 uppercase">Categorías Destacadas</div>
                        <ul class="list-reset leading-normal">
                            <li class="hover:text-blue-600 underline">Profesionales de la Salud</li>
                            <li class="hover:text-blue-600 underline">Protección e Higiene</li>
                            <li class="hover:text-blue-600 underline">Control y Prevención</li>
                            <li class="hover:text-blue-600 underline">Movilidad</li>
                            <li class="hover:text-blue-600 underline">Independencia y Cuidado en el Hogar</li>
                            <li class="hover:text-blue-600 underline">Terapia Respiratoria</li>
                            <li class="hover:text-blue-600 underline">Confort</li>
                        </ul>
                    </div>
                    <div class="sm:w-1/4 h-auto sm:mt-0 mt-8">
                        <div class="text-green-dark mb-2 uppercase">Servicio al Cliente</div>
                        <ul class="list-reset leading-normal">
                            <li class="hover:text-blue-600 underline">Política de Entregas</li>
                            <li class="hover:text-blue-600 underline">Política de Devoluciones</li>
                            <li class="hover:text-blue-600 underline">Política de Garantías</li>
                            <li class="hover:text-blue-600 underline">Política de Cancelación</li>
                            <li class="hover:text-blue-600 underline">Whatsapp 300 000 0000</li>
                            <li class="hover:text-blue-600 underline">PBX 00 0000 000 000</li>
                            <li class="hover:text-blue-600 underline">e-Mail: info@info.com</li>
                        </ul>
                    </div>
                    <div class="sm:w-1/2 sm:mt-0 mt-8 h-auto">
                        <div class="text-red-light mb-2 uppercase">Suscríbase a nuestro newsletter</div>
                        <div class="mt-4 flex">
                            <input type="email" class="p-2 border rounded-md text-sm h-auto text-black w-5/12 mr-6" />
                            <button type="box" class="bg-blue-800 text-white rounded-md h-auto text-xs p-3">Aceptar Términos</button>
                        </div>
                    </div>
                </div>
                <hr />
                <div>
                    {/*Aquí irían los svg/logos*/}
                </div>
            </div>
        </>
    )
}
