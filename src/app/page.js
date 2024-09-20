import Promotionproducts from "@/components/Promotionproducts/Promotionproducts";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../components/footer";
import HeroBanner from "../components/herobanner";
import Header from "../components/navbar";

export default function Home() {
  return (
    <div>
      <div className="navbanner">
        <Header />
      </div>

      <HeroBanner />
      <Promotionproducts />
      {/* <ProductsSalider/> */}

      <Footer />
    </div>
  );
}
