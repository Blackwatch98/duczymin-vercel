import styles from '../styles/Products.module.css'
import { MyImage } from './home';

export interface ImageProps {
    images: MyImage[]
}

const ProductsGallery: React.FC<ImageProps> = ({images}: ImageProps) => {
    return <>
        <div className={styles.gridContainer}>
          <div className={styles.grid}>
            {
                images.map(image => {
                    return (
                        <div className={styles.rowElement} style={{backgroundImage: `url(${image.src})`}}>
                            <div className={styles.imageHover}>
                                <div className={styles.elementInfoContainer}>
                                <div className={styles.titleContainer}>
                                    <p>{image.title}</p>
                                </div>
                                <div className={styles.buttonContainer}>
                                    <a href={image.download} target="_blank" download>
                                        <button>POBIERZ KATALOG</button>
                                    </a>
                                </div>
                                </div>
                            </div>
                        </div>
                    );
                })
            }
          </div> 
        </div>
    </>
}

export default ProductsGallery;