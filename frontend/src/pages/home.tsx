import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Product from "../components/Accessories";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <section id="produkty">
      <Product/>
    </section>
    </>
  );
}