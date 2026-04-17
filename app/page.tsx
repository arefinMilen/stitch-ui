import Image from "next/image";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Feature from "./component/Feature"; 
import PopularComponents from "./component/PopularComponents"; 
import Banner from "./component/Banner";
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
      <PopularComponents />
      <Banner />
    </>
  );
}
