import { ReactNode } from 'react';
import ResearchHero from '../../components/ResearchHero'
import Card2 from '../../components/Card2'
import Footer from '../../components/Footer'
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