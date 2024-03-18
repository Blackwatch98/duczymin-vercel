import Head from 'next/head'
import styles from '../../styles/Contact.module.css'
import { useState } from 'react';
import Map from '../../components/map';
import emailjs from '@emailjs/browser'

function isInputNamedElement(e: Element): e is HTMLInputElement & { name: string } {
  return 'value' in e && 'name' in e
}

export default function ContactPanel() {
    const [state, setState] = useState<string>();

    const handleOnSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault();

      const formData: Record<string, string> = {};

      Array.from(e.currentTarget.elements).filter(isInputNamedElement).forEach((field) => {
          if (!field.name) return;
          formData[field.name] = field.value;
      });

      setState('loading');
      emailjs.send('service_gycc04y', 'template_c7cdlgz', formData,'msIzurYpXZbmSLSkq');
      setState('ready');
    }

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
            <h1>Kontakt</h1>
            <img className={styles.divider} src="/title_divider_reversed.png"></img>
          </div>
          <div className={styles.contactContainer}>
            <div className={styles.contactSubcontainer}>
              <h2>Formularz kontaktowy</h2>
              <form onSubmit={handleOnSubmit}>
                <p>
                  Imię i nazwisko (wymagane)
                  <span>
                    <input type='text' id='nameInfo' name='nameInfo'></input>
                  </span>
                </p>
                <p>
                  Adres email (wymagane)
                  <span>
                    <input type='text' id='emailAddress' name='emailAddress'></input>
                  </span>
                </p>
                <p>
                  Telefon
                  <span>
                    <input type='text' id='phoneNumber' name='phoneNumber'></input>
                  </span>
                </p>
                <p>
                  Treść wiadomości (wymagane)
                  <span>
                    <textarea id='text' name='text'></textarea>
                  </span>
                </p>
                <button>Wyślij</button>
              </form>
            </div>
            <div className={styles.contactSubcontainer}>
              <div className={styles.dataContainer}>
                <h2>Dane kontaktowe</h2>
                <div>
                  <div className={styles.row}>
                    <div>
                      <p>
                        Adres:<br></br>
                        ul. Słowiańska 92<br></br>
                        95-070 Rąbień<br></br>
                        łódzkie<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Godziny otwarcia:<br></br>
                        pn-pt: 9-17<br></br>
                        sob: 10-13<br></br>
                      </p>
                    </div> 
                  </div>
                  <div className={styles.row}>
                    <div>
                      <p>
                        Kontakt z biurem:<br></br>
                        +48 42 712 86 50<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Kontakt handlowy:<br></br>
                        +48 510 113 315<br></br>
                      </p>
                    </div> 
                  </div>     
                  <div className={styles.row}>
                    <div>
                      <p>
                        Kontakt techniczny:<br></br>
                        +48 503 073 188<br></br>
                      </p>
                    </div>
                    <div>
                      <p>
                        Email:<br></br>
                        biuro@duczymin.pl<br></br>
                      </p>
                    </div>
                  </div>           
                </div>
              </div>
              <div className={styles.dataContainer}>
                <h2>Dane do faktury</h2>
                <p>
                  Duczymin Halina Duczymińska<br></br>
                  NIP: 947 12 24 005<br></br>
                  ul. Słowiańska 92<br></br>
                  95-070 Rąbień<br></br>
                </p>
              </div>
            </div>
          </div>
          <div className={styles.mapContainer}>
            <h1>Znajdź nas</h1>
            <Map/>
        </div>
        </div>
      </>
    )
}