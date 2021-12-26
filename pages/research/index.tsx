import { ReactNode } from 'react';
import Navbar from '../components/Navbar'
import ResearchHero from '../components/ResearchHero'
import About from '../components/About'
import Card2 from '../components/Card2'
import Describe from '../components/Describe'
import Footer from '../components/Footer'
import Head from 'next/head'

export default function Research() {
  
  return (
    <>
<Head>
<title>Research - Open Mind AI</title>
<meta name="theme-color" content="#000000"/>
</Head>
    <ResearchHero/><br/>
    <Card2/>
    <Card2/>
    <Footer/>
    </>
  );
}