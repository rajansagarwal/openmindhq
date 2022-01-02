import Hero from './Hero'
import Content from './Content'
import Footer from '../../../components/Footer'
import Head from 'next/head'

export default function Home() {
  
  return (
    <>
    <Head>
<title>Generative Art - Open Mind AI</title>
<meta name="theme-color" content="#000000"/>
</Head>
    <Hero/>
    <Content/>
    <Footer/>
    </>
  );
}