import Head from 'next/head'
import styles from '../../../styles/Products.module.css'
import ProductsGallery from '../../../components/products_gallery';
import { MyImage } from '../../../components/home';


const wikendImages : MyImage[] = [
  {src: '/wiked-drzwi-zewnetrzne-mini.jpg', alt:'alu i pcv', title:'Aluminiowe i PCV', download: '/catalogs/wikend-pcv-alu.pdf'}
]

const krispolImages : MyImage[] = [
  {src: '/krispol-drzwi-zewnetrzne.jpg', alt:'aluminiowe', title:'Aluminiowe', download: '/catalogs/krispol-katalog-aluminiowe-drzwi-zewnetrzne-solano.pdf'},
  {src: '/krispol-drzwi-zewnetrzne-pvc.jpg', alt:'pcv', title:'PCV', download: '/catalogs/krispol-katalog-pvc-drzwi-zewnetrzne-solano.pdf'},
  {src: '/krispol-drzwi-zewnetrzne-uniwersalne.jpg', alt:'uniwersalne', title:'Uniwersalne', download: '/catalogs/krispol-katalog-drzwi-zewnetrzne-uniwersalne.pdf'},
]

const oknoplastImages : MyImage[] = [
  {src: '/oknoplast-drzwi-aluminiowe-aluminiowe.jpg', alt:'aluminiowe', title:'Aluminiowe', download: ''},
  {src: '/oknoplast-drzwi-zewnetrzne-pcv.jpg', alt:'segmentowe', title:'HPL i PCV', download: 'https://oknoplast.com.pl/broszury/Drzwi-PVC-Oknoplast.pdf'}
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
          <h1>Drzwi zewnętrzne</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
        <div className={styles.landscapeContainer}>
          <img src={`/wiked-drzwi-zewnetrzne.jpg`}/>
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
          <h2>Wikęd</h2>
        </div>
        <ProductsGallery images={wikendImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Krispol</h2>
        </div>
        <ProductsGallery images={krispolImages}/>
        <div className={styles.producerNameContainer}>
          <h2>Oknoplast</h2>
        </div>
        <ProductsGallery images={oknoplastImages}/>
      </div>
    </>
  )
}