import MenuRoundedIcon from '@mui/icons-material/MenuRounded';

//Importación de Íconos de Material UI
import AccessibleIcon from '@mui/icons-material/Accessible'; //Silla de Ruedas
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded'; //Corazón
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded'; // Silueta de Persona
import CleanHandsOutlinedIcon from '@mui/icons-material/CleanHandsOutlined'; //Limpiar Manos


export default function Header() {
    return (
        <>
            <div>
                <nav className="bg-stone-100">
                    <div className="max-w-auto mx-40 px-4">
                        <div className="flex items-center h-20">
                            <div className="flex items-center">
                                <div className="flex-shrink-0 text-black">

                                </div>
                                <u className="px-20">
                                    <div className="flex items-baseline gap-48 list-none">
                                        <li><button ><MenuRoundedIcon /></button></li>
                                        <li><button className='hover:underline hover:text-blue-600'><AccessibleIcon />Movilidad </button> </li>
                                        <li><button className='hover:underline hover:text-blue-600'><FavoriteBorderRoundedIcon />Cuidado en el hogar </button> </li>
                                        <li><button className='hover:underline hover:text-blue-600'><PersonOutlineRoundedIcon />Profesionales de la Salud </button> </li>
                                        <li><button className='hover:underline hover:text-blue-600'><CleanHandsOutlinedIcon />Tapabocas y Desinfección </button> </li>
                                    </div>
                                </u>
                            </div>
                        </div>
                    </div>

                </nav>
            </div>
        </>
    )
}
