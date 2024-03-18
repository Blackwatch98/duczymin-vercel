import {useState} from 'react'

export interface CarouselImage {
    id: number,
    src: string,
    description?: string,
    isActive: boolean
}

const Carousel = (slides : CarouselImage[]) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    
    return (
        <div>
            <div style={{backgroundImage: `${slides[currentIndex].src}`}}>

            </div>
        </div>
    );
}

export default Carousel;