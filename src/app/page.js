import Hero from "@/components/Home/Hero";
import LatestPosts from "@/components/Home/LatestPosts";
import ProductsSection from "@/components/Home/ProductsSection";
import VideoShow from "@/components/Home/VideoShow";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />

      Big Designed Graphics <br />
      <VideoShow />
      <LatestPosts />

      Coorporate Customers ~ Looking Forward to your joining


    </div>
  );
}
