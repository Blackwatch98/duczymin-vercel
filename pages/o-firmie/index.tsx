import Head from 'next/head'
import styles from '../../styles/AboutUs.module.css'
import fonts from '../../styles/fonts.css'
import { WrenchScrewdriverIcon, UserGroupIcon, Cog6ToothIcon } from "@heroicons/react/24/outline";
import Review from '../../components/review';
import getReviews from '../api/get-reviews';
import { NextApiResponse } from 'next';
import { useState, useEffect, useRef } from 'react';
import { Carousel } from '@trendyol-js/react-carousel';
import Link from 'next/link'


export const getStaticProps = async () => {
	const placeId = 'ChIJZxew_ym1G0cRIvXyf4AV-AQ';
	const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY //process.env.PLACES_KEY;
	const url = `https://maps.googleapis.com/maps/api/place/details/json?placeid=${placeId}&reviews_no_translations=true&key=${apiKey}`;

	const details = await fetch(url);
	const {result: {reviews}} = await details.json();

  const str = JSON.stringify(reviews)
  const test : Review[] = JSON.parse(str);

	return {
		props: {reviews: test}
	}
}

export default function AboutUsPage({reviews}) {

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
          <h1>O nas</h1>
          <img className={styles.divider} src="/title_divider_reversed.png"></img>
        </div>
      </div>
      <div className={styles.aboutUsContainer}>
        <div className={styles.aboutUsPanel}>
          <div className={styles.aboutUsDescriptionContainer}>
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
            <p className={'whatever'}>Halina Duczymińska</p>
          </div>
          <div className={styles.portraitImage}>
            <img src='/engineer.jpg'></img>
          </div>
          {/*
            <div className={styles.portraitImage}>
              <img src='/portret.png'></img>
            </div>
          */}
        </div>
      </div>
      <div className={styles.honourContainer}>
        <h1>Co nas wyróżnia?</h1>
        <div className={styles.badgesContainer}>
          <div className={styles.badgesRow}>
            <div className={styles.columnContainer}>
                <div className={styles.badge}>
                  <Cog6ToothIcon className={styles.badgeIcon}/>
                </div>
                <h2>Serwis</h2>
                <p>5 lat gwarancji</p>
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.badge}>
                  <WrenchScrewdriverIcon className={styles.badgeIcon}/>
                </div>
                <h2>Montaż</h2>
                <p>Szybki i sprawny</p>
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.badge}>
                  <UserGroupIcon className={styles.badgeIcon}/>
                </div>                
                <h2>Wieloletnie doświadczenie</h2>
                <p>Ponad 10 lat w branży</p>
            </div>
            <div className={styles.columnContainer}>
                <div className={styles.badge}>
                <UserGroupIcon className={styles.badgeIcon}/>
                </div>
                <h2>Fachowe doradztwo</h2>
                <p>Nie możesz się zdecydować? Pozwól nam pomóc!</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.opinionsContainer}>
        <h1>Opinie o nas</h1>
        <div className={styles.opinionsInnerContainer}>
          <Carousel 
            show={3}
            slide={1}
            swiping={true}
            responsive={true}
            swipeOn={0.5}
            useArrowKeys={true}
            autoSwipe={10000}
            hideArrows={false}
            className={styles.carousel}
            >
            {reviews?.map(({
            profile_photo_url, rating, text, author_name,
            }) => (
              <Review
                key={text}
                name={author_name}
                rating={rating}
                text={text}
                src={profile_photo_url}
              />
            ))}
          </Carousel>
          <div>
            <button className={styles.opinionsButton}>
              <Link target="_blank" href="https://www.google.com/search?hl=pl-PL&gl=pl&q=%22Duczymin%22+okna+bramy,+S%C5%82owia%C5%84ska+92,+95-070+R%C4%85bie%C5%84&ludocid=358059812022580514&lsig=AB86z5XkdrU2xSUd_n7l7E_3iuvV&hl=pl&gl=PL#lrd=0x471bb529ffb01767:0x4f815807ff2f522,1">
                Wszystkie opinie
              </Link>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}