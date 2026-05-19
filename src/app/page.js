import GraphicView from "@/components/Home/GraphicView";
import Hero from "@/components/Home/Hero";
import LatestNews from "@/components/Home/LatestNews";
import ProductsSection from "@/components/Home/ProductsSection";
import VideoShow from "@/components/Home/VideoShow";
import ClientTestimony from "@/components/Reusable/ClientTestimony";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProductsSection />
      <GraphicView />
      <VideoShow />
      <LatestNews />
      <ClientTestimony />

    </div>
  );
}
