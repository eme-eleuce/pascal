import Head from "next/head";
import Hero from "./components/Hero";
import ParallaxServices from "./components/Services";
import VideoGallery from "./components/VideoGallery";
import Steps from "./components/Steps";
import Team from "./components/Team";
import Contact from "./components/Contact";

export default function Home() {
  return (
    <div> 

      <Head>
        <title>Sub Sole Films</title>
        <meta name="description" content="/" />
        
      </Head>

     <Hero/>
     <ParallaxServices />
     <VideoGallery />
     <Steps />
     <Team />
     <Contact />
    </div>
  );
}
