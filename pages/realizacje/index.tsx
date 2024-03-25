import styles from '../../styles/Realizations.module.css';
import Head from 'next/head';
import { useState } from 'react';

export interface MyImage {
    src: string,
    alt: string
}
  
const galleryImages : MyImage[] = [
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'brama-rolowana.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'},
    {src: 'okna-pcv2.jpg', alt:'okna-pcv'}
]

export default function Realizations() {

    const [isOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const handleShowDialog = (imageSrc: string | null) => {
        setSelectedImage(imageSrc);
        setIsOpen(prevIsOpen => !prevIsOpen);
        console.log(!isOpen);
    };
    
    return (
        <>
            <Head>
            <title>Duczymin</title>
            <meta name="description" content="Created by Daniel Duczymiński" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className={styles.bodyContainer}>
                <div className={styles.headerContainer}>
                    <img className={styles.divider} src="/title_divider.png"></img>
                    <h1>Nasze realizacje</h1>
                    <img className={styles.divider} src="/title_divider_reversed.png"></img>
                </div>
                    {
                        (
                            <div>
                            <div id="popup1"
                            className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
                                onClick={() => handleShowDialog(selectedImage)}>
                            </div>
                            <dialog
                            className={`${styles["dialogWindow"]} ${isOpen ? styles.open : ''}`}
                            open
                            >
                            <img
                                className="image"
                                src={selectedImage ?? ''}
                                alt="no image"
                            />
                            </dialog>
                            </div>
                        )
                    }
                <div className={styles.gridContainer}>                
                    {
                        galleryImages.map(image => {
                            return (
                                <div className={styles.photo}
                                    style={{backgroundImage: `url(${image.src})`}}
                                    onClick={() => handleShowDialog(image.src)}>
                                        <a href="#popup1" className={styles.koniec}/>
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </>
    );
}