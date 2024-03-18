import ReactStreetview from "react-streetview";
import styles from '../../styles/Office.module.css';
import Head from 'next/head';

export default function WirtualOffice() {

    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY;

    const streetViewPanoramaOptions = {
      position: { lat: 51.79020664676013, lng: 19.34098470403001 },
      pov: { heading: 100, pitch: 0 },
      zoom: 1,
      addressControl: false,
      showRoadLabels: false,
      zoomControl: false
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
                <h1>Zwiedź nasze biuro</h1>
                <img className={styles.divider} src="/title_divider_reversed.png"></img>
                </div>
                <div className={styles.viewContainer}>
                    <div className={styles.viewPanel}>
                        <iframe src="https://www.google.com/maps/embed?pb=!4v1694009366962!6m8!1m7!1sCAoSLEFGMVFpcE1JS015VGNfelNSbXpmZTBybi1hS2tfRi1CSWl6d2ZibXlSNHQ1!2m2!1d51.79020664676013!2d19.34098470403001!3f190.78!4f-3.0600000000000023!5f0.5970117501821992" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </div>
        </> 
    );
}