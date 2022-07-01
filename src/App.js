import Carousel from "./components/Carrousel/Carousel";
import { CarouselData } from "./components/Carrousel/CarouselData";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WheelChair from "./components/WheelChair/WheelChair";
import VerProd from "./components/VerProd";
import BigBox from "./components/BigBoxes/BigBox";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <div className="maw-w-screen-xl m-auto" >
      <main>
      <Navbar />
      <Header />
      <VerProd />
      </main>
      <Carousel slides={CarouselData}/>
      <WheelChair />
      <BigBox />
      <Footer />
    </div>
      
    </>
  );
}

export default App;
