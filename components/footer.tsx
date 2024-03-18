import { BuildingOfficeIcon, WrenchScrewdriverIcon, EnvelopeIcon } from "@heroicons/react/24/outline";
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

type Image = {
    width: number;
    height: number;
    src: string;
    alt: string;
}

const images: Image[] = [
    {width: 200, height: 40, src: '/partners-logos/oknoplast_logo.png', alt:'oknoplast'},
    {width: 200, height: 40, src: '/partners-logos/krispol_logo.png', alt:'krispol'},
    {width: 200, height: 30, src: '/partners-logos/wisniowski_logo.png', alt:'wisniowski'},
    {width: 150, height: 50, src: '/partners-logos/wiked_logo.png', alt:'wiked'},
    {width: 75, height: 50, src: '/partners-logos/anwis_logo.png', alt:'anwis'},
    {width: 200, height: 50, src: '/partners-logos/medos_logo.png', alt:'medos'},
    {width: 200, height: 50, src: '/partners-logos/kratex_logo.png', alt:'kratex'},
    {width: 60, height: 60, src: '/partners-logos/nice_logo.png', alt:'nice'},
    {width: 180, height: 40, src: '/partners-logos/somfy_logo.png', alt:'somfy'}
]

function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.columnsContainer}>
                <div className='row'>
                    <div className='footer-col'>
                        <h4>Kontakt</h4>
                        <ul>
                            <li>
                                <span>
                                    ul. Słowiańska 92<br></br>
                                    95-070 Rąbień<br></br>
                                    łódzkie
                                </span> 
                            </li>
                            <li>
                                <span>
                                    Godziny otwarcia:<br></br>
                                    pn-pt: 9-17<br></br>
                                    sob: 10-13
                                </span> 
                            </li>
                            <li>
                                <span>
                                    <BuildingOfficeIcon style={{height: 16, width: 16, marginRight: 5}}/>
                                    Kontakt z biurem<br></br>
                                    <p style={{marginLeft: 5}}>+48 42 712 86 50</p>
                                </span>
                            </li>
                            <li>
                                <span>
                                    <BuildingOfficeIcon style={{height: 16, width:16, marginRight: 5}}/>
                                    Kontakt handlowy<br></br>
                                    <p style={{marginLeft: 5}}>
                                        +48 510 113 315
                                    </p>
                                </span>                            
                            </li>
                            <li>
                                <span>
                                    <WrenchScrewdriverIcon style={{height: 16, width:16, marginRight: 5}}/>
                                    Kontakt techniczny<br></br>
                                    <p style={{marginLeft: 5}}>
                                        +48 503 073 188
                                    </p>
                                </span>
                            </li>
                            <li className={styles.contactLi}>
                                <span>
                                    <EnvelopeIcon style={{height: 16, width:16, marginRight: 5}}/>
                                    Email<br></br>
                                    <p style={{marginLeft: 5}}>
                                        biuro@duczymin.pl
                                    </p>
                                </span>   
                            </li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Produkty dla domów</h4>
                        <ul>
                            <li>
                                <Link href="/produkty/okna-pcv">
                                    Okna PCV
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/bramy-garazowe">
                                    Bramy garażowe
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/rolety-zewnetrzne">
                                    Rolety zewnętrzne
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/drzwi-zewnetrzne">
                                    Drzwi zewnętrzne
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/zaluzje-fasadowe">
                                    Żaluzje fasadowe
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/osłony-wewnetrzne">
                                    Osłony wewnętrzne
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/automatyka">
                                    Automatyka
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/parapety">
                                    Parapety
                                </Link>
                            </li>  
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Produkty dla firm</h4>
                        <ul>
                            <li>
                                <Link href="/produkty/bramy-przemyslowe">
                                    Bramy przemysłowe
                                </Link>
                            </li>
                            <li>
                                <Link href="/produkty/bramy-rolowane">
                                    Bramy rolowane
                                </Link>
                            </li>
                            <li>
                                <Link href="/stolarka-aluminiowa">
                                    Stolarka aluminiowa
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className='footer-col'>
                        <h4>Nasi partnerzy</h4>
                        <ul className={styles.logoList}>
                            {
                                images.map(image => {
                                    return(      
                                            <Image className={styles.logoImage}
                                                width={image.width}
                                                height={image.height}
                                                src={image.src}
                                                alt={image.alt}>
                                            </Image>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>      
            <div className={styles.copyrightContainer}>
                <p>Copyright ©2023 Duczymin.pl - bramy, okna, automatyka, inteligentne domy.</p>
                <p className={styles.signature}>Stronę wykonał: Daniel Duczymiński.</p>
            </div>      
        </footer>
    );
}

export default Footer;