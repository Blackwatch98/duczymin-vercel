import {
    Body,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Text,
  } from '@react-email/components';
import * as React from 'react';
import styles from '../styles/ContactEmail.module.css'

interface EmailProps {
    nameInfo: string,
    emailAddress: string,
    phoneNumber: string,
    text: string
}
 
export const ContactEmail = ({nameInfo, emailAddress, phoneNumber, text}: EmailProps) => (
    <Html>
      <Body className={styles.body}>
        <Container>  
          <Text>
            <p>Adresat:</p> {nameInfo}<br></br>
            <p>Email kontaktowy:</p>{emailAddress}<br></br>
            <p>Telefon kontaktowy:</p> {phoneNumber}<br></br>
          </Text>
          <br></br>
          <br></br>
          <Text>
            {text}
          </Text>
        </Container>
      </Body>
    </Html>
  );

  export default ContactEmail;