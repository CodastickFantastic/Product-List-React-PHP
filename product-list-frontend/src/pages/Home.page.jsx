import Navigation from "../components/Navigation/Navigation.component";
import ProductListSection from "../components/Product List Section/ProductListSection.component";

export default function Home() {
  return (
    <>
      <Navigation
        title="Product List"
        firstBtnTitle="ADD"
        secondBtnTitle="MASS DELETE"
        firstBtnLink="/add-product"
        secondBtnFunc={()=>console.log("MASS DELETE")}
      />
      <main>
        <ProductListSection />
      </main>
    </>
  );
}
