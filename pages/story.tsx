import { ReactNode } from 'react';
import Navbar from './components/Navbar'
import StoryHero from './components/StoryHero'
import About from './components/About'
import Feature from './components/Feature'
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