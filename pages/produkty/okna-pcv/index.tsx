import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const productsImages : MyImage[] = [
  {src: '/okno-pava.jpg', alt:'okna-pava', title:'Pava', download: '/catalogs/OKNOPLAST-PAVA.pdf'},
  {src: '/okna-winergetic-premium.jpg', alt:'okna-prismatic', title:'Winergetic Premium', download: '/catalogs/OKNOPLAST-Winergetic-Premium.pdf'},
  {src: '/okno-winergetic-premium-passive.jpg', alt:'winergetic-pp', title:'Winergetic Premium Passive', download: '/catalogs/OKNOPLAST-Winergetic-Premium-Passive.pdf'},
  {src: '/okna-prismatic.jpg', alt:'okna-prismatic', title:'Prismatic', download: '/catalogs/OKNOPLAST-PRISMATIC.pdf'},
  {src: '/okno-pixel.jpg', alt:'okna-marzen', title:'Pixel', download: '/catalogs/OKNOPLAST-PIXEL.pdf'},
  {src: '/okno-prolux.jpg', alt:'okna-prolux', title:'Prolux', download: '/catalogs/OKNOPLAST-PROLUX.pdf'},
  {src: '/okno-koncept.jpg', alt:'okna-koncept', title:'Koncept', download: ''}
]

export default function WindowsPage() {
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
          <h1>Okna PCV</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/okna-winergetic-premium.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
              Okna powinny spełniać przede wszystkim wszelkie wymagania techniczne. W parze z wysokimi właściwościami
              izolacyjnymi powinna iść również funkcjonalność oraz design wykonania. Okna stanowią nie tylko podstawowy
              element każdego budynku, ale również są jego dekoracją. Przeszklenia powinny współgrać z elewacją i stylistyką obiektu.
              Wszystkie te aspekty spełniają systemy okienne OKNOPLAST.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Oknoplast</h2>
        </div>
        <ProductsGallery images={productsImages}/>
      </div>
    </>
  )
}