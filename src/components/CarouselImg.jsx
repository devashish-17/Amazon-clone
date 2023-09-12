import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel"
import { c1 } from "../assets/exportImg";
import { c2 } from "../assets/exportImg";
import { c3 } from "../assets/exportImg";
import { c4 } from "../assets/exportImg";

const CarouselImg = () => {
    return (
        <div className="relative">
            <div className="absolute w-full h-20 bg-gradient-to-t from-gray-50 to-transparent bottom-0 z-20" />
            <Carousel
                autoPlay
                infiniteLoop
                showStatus={false}
                showIndicators={false}
                showThumbs={false}
                interval={5000}
            >
                <div>
                    <img loading="lazy" src={c1} alt="image1" className="h-36 md:h-60 xl:h-96" />
                </div>
                <div>
                    <img loading="lazy" src={c2} alt="image2" className="h-36 md:h-60 xl:h-96" />
                </div>
                <div>
                    <img loading="lazy" src={c3} alt="image3" className="h-36 md:h-60 xl:h-96" />
                </div>
                <div>
                    <img loading="lazy" src={c4} alt="image4" className="h-36 md:h-60 xl:h-96" />
                </div>

            </Carousel>
        </div>

    )
}

export default CarouselImg