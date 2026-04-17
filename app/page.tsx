import Image from "next/image";
import Nav from "./component/Nav";
import Hero from "./component/Hero";
import Feature from "./component/Feature";  
export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Feature />
    </>
  );
}
