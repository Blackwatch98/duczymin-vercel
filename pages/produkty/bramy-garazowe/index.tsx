import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';

const krispolImages : MyImage[] = [
  {src: '/brama-garaz.jpg', alt:'bramy garażowe', title:'Bramy garażowe', download: '/catalogs/krispol-katalog-bramy-garazowe.pdf'},
]

const wisniowskiImages : MyImage[] = [
  {src: '/wisniowski-brama-segmentowa.jpg', alt:'segmentowe', title:'Bramy segmentowe', download: '/catalogs/bramy-garazowe-segmentowe-wisniowski.pdf'},
  {src: '/wisniowski-prime.jpg', alt:'segmentowe prime', title:'Bramy segmentowe Prime', download: '/catalogs/PRIME-bram-segmentowych-wisniowski.pdf'}
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
          <h1>Bramy garażowe</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/krispol-brama-garaż.jpg`}/>
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
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Wiśniowski</h2>
        </div>
        <ProductsGallery images={wisniowskiImages}/>
      </div>
    </>
  )
}