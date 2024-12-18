import { useEffect, useState } from "react";
import image1 from '../../assets/carousel1.jpg';
import image2 from '../../assets/carousel2.jpg';
import image3 from '../../assets/carousel3.jpg';

const Carousel = () => {
    const [currentImage, setCurrentImage] = useState(0);
    const images = [image1, image2, image3];
    const imageTexts = [
        "¡Bienvenido a Market Click!",
        "El mejor marketplace online para vender tu ropa",
        "Descubre nuestra exclusiva selección de ropa pre-loved"
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) => (prevImage + 1) % images.length)
        }, 5000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="pt-16">
            <div className="relative">
                <div className="overflow-hidden">
                    <div className="flex transition-transform duration-500 ease-in-out h-full" style={{ transform: `translateX(-${currentImage * 100}%)` }}>
                        {images.map((image, index) => (
                            <div key={index} className="w-full flex-shrink-0 relative">
                                <img src={image} alt={`Carousel Image ${index + 1}`} className="w-full h-96 object-fill" />
                                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white lg:text-5xl sm:text-2xl md:text-3xl font-bold">
                                    {imageTexts[index]}
                                </div>
                                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                                    {images.map((_, i) => (
                                        <div key={i} className={`h-2 w-2 rounded-full mx-1 ${i === currentImage ? 'bg-violet-900' : 'bg-gray-300'}`}></div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Carousel;