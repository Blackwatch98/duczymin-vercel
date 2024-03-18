import Gallery from '../components/gallery';
import styles from '../styles/Home.module.css'
import Map from './map';
import { useState, useEffect, useRef } from 'react';
import { WrenchScrewdriverIcon, UserGroupIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";

export interface CarouselImage {
  src: string,
  description?: string,
}

export interface MyImage {
  src: string,
  alt: string,
  ref?: string,
  title: string,
  description?: string
  download?: string
}

const homeProductsImages : MyImage[] = [
  {src: 'okna-winergetic-premium.jpg', alt:'okna-pcv', ref: "/produkty/okna-pcv", title:'Okna PCV', description:'Okna stanowią nie tylko podstawowy element każdego budynku, ale również są jego dekoracją...'},
  {src: 'brama-garaz.jpg', alt:'brama', ref: "/produkty/bramy-garazowe", title:'Bramy garażowe', description:'Brama powinna być dopasowana do elewacji budynku oraz swoją konstrukcją zapewniać maksimum bezpieczeństwa...'},
  {src: 'rolety-zew2.jpg', alt:'rolety-zew', ref: "/produkty/rolety-zewnetrzne", title:'Rolety zewnętrzne', description:'Zapewniają wygodę, ułatwiają oszczędzanie energii i poprawiają skuteczność ochrony antywłamaniowej...'},
  {src: 'drzwi-zew.jpg', alt:'drzwi', ref: "/produkty/drzwi-zewnetrzne", title:'Drzwi zewnętrzne', description:'Oprócz roli zabezpieczenia budynków i mieszkań stanowią też zaporę przed utrata ciepła...'},
  {src: 'zaluzja-pozioma.jpg', alt:'żaluzje fasadowe', ref: "/produkty/zaluzje-fasadowe", title:'Żaluzje fasadowe', description:'Żaluzje skutecznie chronią wnętrze domu przed promieniami słonecznymi, nie dopuszczając do wzrostu temperatury...'},
  {src: 'rolety-wew.jpg', alt:'rolety', ref: "/produkty/oslony-wewnetrzne", title:'Osłony wewnętrzne', description:'Na razie brak.'},
  {src: 'nice-automatyka.jpg', alt:'automatyka', ref: "/produkty/automatyka", title:'Automatyka', description:'Tylko profesjonalny dobór i montaż automatyki domowej zapewnia prawidłowe i długoletnie funkcjonowanie...'},
  {src: 'parapet-wewnętrzny.jpg', alt:'parapety', ref: "/produkty/parapety", title:'Parapety', description:'Parapety stanowią ważny element wykończeniowy okien...'},
]

const companyProductsImages : MyImage[] = [
  {src: 'bramy-przemysl.jpg', alt:'bramy-przemyslowe', ref: "/bramy-przemyslowe", title:'Bramy przemysłowe', description:'Na razie brak. To jest teki przykładowy tekst dla jaj żeby sprawdzić czy coś tu w ogóle działa :)'},
  {src: 'brama-rolowana.jpg', alt:'bramy-rolowane', ref: "/bramy-rolowane", title:'Bramy rolowane', description:'Na razie brak.'},
  {src: 'rolety-zew.jpg', alt:'kraty-rolowane', ref: "/kraty-rolowane", title:'Kraty zewnętrzne', description:'Na razie brak.'},
  {src: 'drzwi.jpg', alt:'stolarka-aluminiowa', ref: "/stolarka-aluminiowa", title:'Stolarka aluminiowa', description:'Na razie brak.'}
]

const carouselImages : CarouselImage[] = [
  {src: "/promotions/koncept_white.jpg"},
  {src: "/okno-pixel.jpg"},
  {src: "/promotions/krispol-bramy-garazowe.jpg"}
]

export default function HomePage() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const imageHoverRef = useRef(null);
  
  /*
  const [myElementIsVisible, setMyElementIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];

      if( !entry.isIntersecting ) {
        return;
      }

      setMyElementIsVisible(entry.isIntersecting);
    });
    observer.observe(imageHoverRef.current!);
 
    return () => {
      if(imageHoverRef.current! != null)
      observer.unobserve(imageHoverRef.current!);
    }
  }, []);
  */
  const moveNext = () => {
    if(currentIndex !== carouselImages.length) {
      setCurrentIndex(currentIndex + 1);
    }
    else if(currentIndex === carouselImages.length) {
      setCurrentIndex(1);
    }
  }

  const movePrev = () => {
    if(currentIndex !== 1) {
      setCurrentIndex(currentIndex - 1);
    }
    else if(currentIndex === 1) {
      setCurrentIndex(carouselImages.length);
    }
  }

  const moveDot = (index: number) => {
    setCurrentIndex(index)
  }

  useEffect(() => {
    const interval = setInterval(() => {
      moveNext();
    }, 10000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <>
      <div className={styles.carouselDiv}>
        <section>
          <div className={styles.carousel} data-carousel>
            <button onClick={() => movePrev()} className={`${styles["carousel-button"]} ${styles.prev}`}>&#8656;</button>
            <button onClick={() => moveNext()} className={`${styles["carousel-button"]} ${styles.next}`}>&#8658;</button>
            <ul className={styles.slides}>
              {
                carouselImages.map((image, imageIndex) => (
                <li className={currentIndex === imageIndex + 1 ? styles.slideActive : styles.slide}>
                  <img className={styles.slideImage} src={image.src} alt='home'/>
                </li>))
              }
            </ul>
            <div className={`${styles["container-dots"]}`}>
                {Array.from({length: 3}).map((item, index) => (
                  <div
                    onClick={() => moveDot(index + 1)}
                    className={currentIndex === index + 1 ? `${styles["dotActive"]}` : `${styles["dot"]}`}>
                  </div>
                ))}
            </div>
          </div>
        </section>
        <h1 className={styles.h1}>O nas</h1>
        <div className={styles.aboutContainer}>
          <div className={styles.aboutDescriptionContainer}>
            <p>
                Firma DUCZYMIN od lat specjalizuje się w montażu i serwisie systemów bramowych, 
                ogrodzeniowych oraz automatyki. Ponadto w naszej ofercie znajdziecie Państwo okna 
                oraz szeroką gamę osłon okiennych. Firma nasza postawiła przede wszystkim na jakość,
                trwałość i estetykę oferowanych produktów. Dlatego ściśle współpracyjemy z najbardziej
                cenionymi producentami na rynku. Oferowane produkty są najwyższej jakości odpowiadające
                standardom bezpieczeństwa, o najwyższym komforcie oraz estetyce.
            </p>
            <p>
                Swoim klientom oferujemy krótki termin realizacji, fachowy montaż oraz atrakcyjne ceny.
                Nasza współpraca obejmuje bezpłatne porady i pomiar. Dysponujemy wyspecjalizowanymi ekipami
                monterskimi oraz zapleczem magazynowym i logistycznym.
            </p>
            <p>
                Naszymi działaniami wspieramy klientów na każdym etapie doboru i użytkowania urządzeń.
                Jeśli poszukują Państwo wysokiej jakości towarów, doświadczenia i fachowego doradztwa – zapraszamy do współpracy!
            </p>
          </div>
        </div>
        <div className={styles.badgesContainer}>
          <div className={styles.badgesRow}>
            <div className={styles.columnContainer}>
                <Cog6ToothIcon className={styles.badgeIcon}/>
                <h2>Serwis</h2>
                <p>5 lat gwarancji</p>
            </div>
            <div className={styles.columnContainer}>
                <WrenchScrewdriverIcon className={styles.badgeIcon}/>
                <h2>Montaż</h2>
                <p>Szybki i sprawny</p>
            </div>
            <div className={styles.columnContainer}>
                <UserGroupIcon className={styles.badgeIcon}/>
                <h2>Wieloletnie doświadczenie</h2>
                <p>Ponad 10 lat w branży</p>
            </div>
            <div className={styles.columnContainer}>
                <UserGroupIcon className={styles.badgeIcon}/>
                <h2>Fachowe doradztwo</h2>
                <p>Nie możesz się zdecydować? Pozwól nam pomóc!</p>
            </div>
          </div>
        </div>
        <h1 className={styles.h1}>Produkty dla domów</h1>
        <Gallery images={homeProductsImages}/>
        <h1 className={styles.h1}>Produkty dla firm</h1>
        <Gallery images={companyProductsImages}/>
        {/*
        <h1 className={styles.h1}>Nasze realizacje</h1>
        <div className={styles.realizationContainer}>
          <div className={styles.realizationBox}>
            <img ref={imageHoverRef} src="home.png"></img>
            <div className={`${styles.imageHover} ${myElementIsVisible ? styles.hovered : ''}`}>
              <h2>Sprawdź dlaczego warto nam zaufać!</h2>     
              <a href='/realizacje'>Kliknij mnie</a>
            </div>
          </div>
        </div>
        */}
        <h1 className={styles.h1}>Znajdź nas</h1>
        <Map/>
      </div>
    </>
  );
}