import { ReactNode } from 'react';
import StoryHero from './components/StoryHero'
import Describe from './components/Describe'
import Footer from './components/Footer'
import Head from 'next/head'

export default function Story() {
  
  return (
    <>
<Head>
<title>About - Open Mind AI</title>
<meta name="theme-color" content="#000000"/>
</Head>
    <StoryHero/>
    <Describe/>
    <Footer/>
    </>
  );
}