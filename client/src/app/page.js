/*
بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ  ﷺ  
InshaAllah, By his marcy I will Gain Success 
*/

import Blog from "@/components/Blog/Blog";
import Feature from "@/components/Feature/Feature";
import Hero from "@/components/Hero/Hero";
import Newsletter from "@/components/newsletter/newsletter";
import Project from "@/components/Project/Project";
import Services from "@/components/Services/Services";


export default function Home() {
  return (
   <article >
    <Hero/>
    <Services/>
    <Feature />
    <Project/>
    <Newsletter />
    <Blog />
   </article>
   
  );
}
