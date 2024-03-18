import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const medosImages : MyImage[] = [
  {src: '/medos-parapety-wewnetrzne-mini.jpg', alt:'cennik', title:'Cennik 2023', download: '/catalogs/medos-katalog-parapety-2023.pdf'},
]

const kratexImages : MyImage[] = [
  {src: '/parapet-wewnętrzny.jpg', alt:'cennik', title:'Cennik 2023', download: '/catalogs/cennik-parapetow-kratex.pdf'}
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
          <h1>Parapety</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/medos-parapety-wewnetrzne.jpg`}/>
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
          <h2>Medos</h2>
        </div>
        <ProductsGallery images={medosImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Kratex</h2>
        </div>
        <ProductsGallery images={kratexImages}/>
      </div>
    </>
  )
}