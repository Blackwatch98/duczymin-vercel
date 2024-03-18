import { GoogleMap, useLoadScript, MarkerF, OverlayView, InfoWindowF } from "@react-google-maps/api";
import { useState } from 'react';
import styles from '../styles/Map.module.css'


export default function Map() {
    const [activeMarker, setActiveMarker] = useState(false);

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
    });

    const showInMapClicked = () => {
        window.open("https://goo.gl/maps/fgwVTpTbtrD8fxSJA?coh=178571&entry=tt");
      };

    if (!isLoaded) return <div>Ładuję się</div>;

    return (
        <GoogleMap
            zoom = {17}
            center = {{ lat: 51.7903098959238, lng: 19.340856562499862 }}
            mapContainerStyle = { {width: "100%", height: "75vh" }}
        >
            <MarkerF
                key="marker_1"
                position={{
                    lat: 51.7903003959238,
                    lng: 19.340856562499862
                }}
                //icon={'/markerIconAdv2.png'}
                icon={{url:'/markerIcon2.png', scaledSize: new google.maps.Size(75, 75)}}
                onClick={() => !activeMarker ? setActiveMarker(true) : setActiveMarker(false)}
            >
                {activeMarker ? (
                    <InfoWindowF>
                    <div className={styles.popup}>
                        <p>Salon DUCZYMIN, 95-070 Rąbień ul. Słowiańska 92</p>
                        <button onClick={showInMapClicked}>Sprawdź jak dojechać</button>
                    </div>
                    </InfoWindowF>
                ) : null}
            </MarkerF>
        </GoogleMap>
    );
}