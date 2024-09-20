import Promotionproducts from "@/components/Promotionproducts/Promotionproducts";
import "bootstrap/dist/css/bootstrap.min.css";
import HeroBanner from "../components/herobanner";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <Promotionproducts />
      {/* <ProductsSalider/> */}
    </div>
  );
}
