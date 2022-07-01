//Importación de las imágenes (Data)
import { CarouselData } from "./CarouselData";

// Importación de la librería Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Estilos de la libreria Swiper
import "swiper/css";
import "swiper/css/pagination";


// El carrusel funciona arrastrando el cursor sobre la imagen

export default function App() {
    return (
        <>
            <div className="mx-96 my-12 gap-4 cursor-pointer">
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    className="mySwiper"
                >
                    {CarouselData.map((Carousel) => {
                        return (

                            <SwiperSlide key={Carousel.id}>
                                <div className="hover:text-blue-700">
                                    <img className="rounded-md" src={Carousel.image} alt={Carousel.id} style={{ height: "200px", width: "600px" }} />
                                    <span className="text-2xl font-extrabold">{Carousel.title}</span>
                                </div>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
}


















