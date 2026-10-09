import HeroSection from "../components/HeroSection";
import Categories from "../components/Categories";
import ProductList from "../components/ProductList";
import Features from "../components/Features";
import Testimonials from "../components/Testimonials";

function HomePage() {
  return (
    <>
      <HeroSection />

      <Categories />

      <ProductList />

      <Features />

      <Testimonials />
    </>
  );
}

export default HomePage;