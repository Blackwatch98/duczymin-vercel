import React, { useState, useRef, useEffect, UIEvent } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css'
//import img from '../public/duczymin-logo-biale.png'
import img from '../public/logo_duczymin.png'
import Image from 'next/image'

export default function NavBar() {
    const [isNavbarExpanded, setIsNavbarExpanded] = useState(true);
    const [isNavbarSticky, setisNavbarSticky] = useState(false);
    const [isProductsClicked, setIsProductsClicked] = useState(false);
    const router = useRouter();

    const scrollNavbar = () => {
        if(window.scrollY > 0) {
            setisNavbarSticky(true);
        } else {
            setisNavbarSticky(false);
        }
    }

    useEffect(() => {
        window.addEventListener("scroll", scrollNavbar); 
        return () => window.removeEventListener("scroll", scrollNavbar);
    });

    const isActiveClass = isNavbarExpanded
    ? `${styles['navbar-links']} ${styles.magic}`
    : styles['navbar-links'];

    //let isActiveClass = isNavbarExpanded ? `${styles["navbar-links"]} ${styles.magic}` : styles["navbar-links"]

    const isLinkActive = (href: any) => router.pathname === href;

    const isProductLinkActive = isLinkActive('/produkty/okna-pcv') || isLinkActive('/produkty/bramy-garazowe') ||
                                isLinkActive('/produkty/rolety-zewnetrzne') || isLinkActive('/produkty/drzwi-zewnetrzne') ||
                                isLinkActive('/produkty/zaluzje-fasadowe') || isLinkActive('/produkty/oslony-wewnetrzne') ||
                                isLinkActive('/produkty/automatyka') || isLinkActive('/produkty/parapety') ||
                                isLinkActive('/produkty/bramy-przemyslowe') || isLinkActive('/produkty/bramy-rolowane') ||
                                isLinkActive('/produkty/stolarka-aluminiowa')

    return (
        <nav className={styles.navbar}>
            <Link className={styles.logo} href="/">
                <Image src={img} alt='logo'/>
            </Link>
            <a href='#' className={styles["toggle-button"]} onClick={() => setIsNavbarExpanded(!isNavbarExpanded)}>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
                <span className={styles.bar}></span>
            </a>
            <div className={`${isActiveClass}`}>
                <ul className={styles.ul} onClick={() => setIsNavbarExpanded(false)}>
                    <div className={styles.dropdown} onMouseLeave={() => setIsProductsClicked(false)}>
                        <li className={`${styles.link} ${isProductLinkActive ? styles.active : ''}`} onMouseOver={() => setIsProductsClicked(true)}>
                            Produkty
                        </li>
                        <div className={`${styles["dropdown-menu"]} ${isProductsClicked ? styles.active : styles.inactive}`}>
                            <div className={styles.column}>
                                <li><h3>Dla domów</h3></li>
                                <li><a href="/produkty/okna-pcv">Okna PCV</a></li>
                                <li><a href="/produkty/bramy-garazowe">Bramy garażowe</a></li>
                                <li><a href="/produkty/rolety-zewnetrzne">Rolety zewnętrzne</a></li>
                                <li><a href="/produkty/drzwi-zewnetrzne">Drzwi zewnętrzne</a></li>
                                <li><a href="/produkty/zaluzje-fasadowe">Żaluzje fasadowe</a></li>
                                <li><a href="/produkty/oslony-wewnetrzne">Osłony wewnętrzne</a></li>
                                <li><a href="/produkty/automatyka">Automatyka</a></li>
                                <li><a href="/produkty/parapety">Parapety</a></li>
                            </div>
                            <div className={styles.column}>
                                <li><h3>Dla firm</h3></li>
                                <li><a href="/produkty/bramy-przemyslowe">Bramy przemysłowe</a></li>
                                <li><a href="/produkty/bramy-rolowane">Bramy rolowane</a></li>
                                <li><a href="/produkty/stolarka-aluminiowa">Stolarka aluminiowa</a></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </div>
                        </div>
                    </div>
                    <li>
                        <Link className={`${styles.link} ${isLinkActive('/o-firmie') ? styles.active : ''}`} href="/o-firmie">
                            O firmie
                        </Link>
                    </li>
                    <li>
                        {/*
                        <Link className={styles.link} href="/realizacje">
                            Nasze realizacje
                        </Link>
                        */}
                    </li>
                    <li>
                        <Link className={`${styles.link} ${isLinkActive('/salon') ? styles.active : ''}`} href="/salon">
                            Wirtualny salon
                        </Link>
                    </li>
                    <li>
                        <Link className={`${styles.link} ${isLinkActive('/kontakt') ? styles.active : ''}`} href="/kontakt">
                            Kontakt
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    );
}