import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const anwisImages : MyImage[] = [
  {src: '/anwis-zaluzje-fasadowe-mini.jpg', alt:'zaluzje fasadowe', title:'Żaluzje fasadowe', download: '/catalogs/anwis_zaluzje_fasadowe.pdf'},
  {src: '/anwis-rolety-screen.jpg', alt:'rolety screen', title:'Rolety screen', download: '/catalogs/anwis_rolety_screen.pdf'}
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
          <h1>Żaluzje fasadowe</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/anwis-zaluzje-tarasowe.jpg`}/>
        </div>
        <div className={styles.descriptionContainer}>
          <div className={styles.descriptionPanel}>
            <p>
            Brama garażowa jest jednym z najważniejszych elementów wykończenia domu.
            Powinna być dopasowana wyglądem do elewacji budynku a także poprzez swoją konstrukcję zapewnić maksimum bezpieczeństwa domownikom.
            Solidność wykonania oraz profesjonalny montaż to głowne cechy bram i usług oferowanych przez naszą firmę.
            </p>
          </div>
        </div>
        <div className={styles.producerNameContainer}>
          <h2>Anwis</h2>
        </div>
        <ProductsGallery images={anwisImages}/>
      </div>
    </>
  )
}