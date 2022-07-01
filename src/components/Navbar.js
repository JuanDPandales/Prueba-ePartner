import logo from '../assets/logo.png';
//Importación de Íconos de Material UI
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';


export default function Navbar() {
    return (
        <>
            <div>
                <nav className="bg-stone-100">
                    <div className="w-10/12 mx-64 px-4">
                        <div className="flex items-center justify-between h-20">
                            <div className="flex items center">
                                <div className="flex-shrink-0 text-black">
                                    <img
                                        className="h-8 w-8" src={logo} alt="" />
                                    <small className="hover:text-blue-500 underline cursor-pointer" >Tienda</small>
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        <input
                                            className="flex mt-2 p-2 overflow-auto outline-2 hover:outline-2 rounded-md"
                                            placeholder="¿QUÉ ESTÁS BUSCANDO? ESCRÍBELO AQUÍ..."
                                            style={{ width: "62rem" }} ></input>
                                        <button className="text-blue-600 px-3 py-2 rounded-md text-sm font-medium" >MIS PEDIDOS</button>
                                        <button className=''>HOLA ALIAD@ <br />
                                            <span className='text-blue-600 underline'>INGRESA</span>
                                        </button>
                                        <button><img src alt="" /> <ShoppingCartRoundedIcon />CARRITO</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </>
    )
}
