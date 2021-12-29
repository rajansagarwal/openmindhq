import { ReactNode } from 'react';
import Hero from '../components/Hero'
import Read from '../components/Read'
import Feature from '../components/Feature'
import Split from '../components/Split'
import Describe from '../components/Describe'
import Card from '../components/Card'
import Card2 from '../components/Card2'
import Footer from '../components/Footer'
import CTA from '../components/CTA'
import Head from 'next/head'
import AltHero from '../components/AltHero'
import Standout from '../components/Standout'

export default function Home() {
  
  return (
    <>
<Head>
<title>Open Mind AI</title>
<meta name="theme-color" content="#000000"/>
</Head>
    <AltHero/>
    <Read/>
    <Describe/>
    <CTA/>
    <Standout/>
    <Card/><br/><br/>
    <Split/>
    <Footer/>

    </>
  );
}