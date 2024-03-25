import styles from '../styles/Gallery.module.css'
import Link from 'next/link'
import { MyImage } from './home';

export interface ImageProps {
    images: MyImage[]
}

const Gallery: React.FC<ImageProps> = ({images}: ImageProps) => {
    return <><div className={styles.galleryContainer}>{
        images.map(image => {
            return (
                <div className={styles.myCard} style={{
                    backgroundImage: `url(${image.src})`
                  }}>
                    <div className={styles.myCardContent}>
                        <h3 className={styles.myCardTitle}>{image.title}</h3>
                        <p className={styles.description}>{image.description}</p>
                        <Link href={image.ref ?? ''} passHref>
                            <button className={styles.button}type="submit">Sprawdź ofertę</button>
                        </Link>
                        
                    </div>   
                </div>
            );
        })
    }</div>
    </>
}

export default Gallery;