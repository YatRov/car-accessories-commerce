import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutUs from "./AboutUs";
import Product from "./Accessories";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>

    <section id="AboutUs">
      <AboutUs/>
    </section>

    <section id="Accessories">
      <Product/>
    </section>
    
    </>
  );
}