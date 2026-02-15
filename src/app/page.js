import Head from "next/head";
import Hero from "./components/Hero";
import IntroSection from "./components/IntroSection";
import ServicesIcons from "./components/ServicesIcons";
import CallToAction from "./components/CallToAction";
import ParallaxServices from "./components/Services";
import VideoGallery from "./components/VideoGallery";
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
     
     {/* Content that slides over Hero */}
     <div className="relative z-10 bg-white">
       <IntroSection />
       <ServicesIcons />
       <CallToAction />
       <Contact />
     </div>
    </div>
  );
}
