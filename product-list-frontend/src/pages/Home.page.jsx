import { useContext } from "react";
import Navigation from "../components/Navigation/Navigation.component";
import ProductListSection from "../components/Product List Section/ProductListSection.component";
import MassDeleteContext from "../contexts/MassDelete.context";

export default function Home() {
  const { sendDeleteRequest } = useContext(MassDeleteContext);

  function handleProductDelete() {
    sendDeleteRequest();
    window.location.reload();
  }

  return (
    <>
      <Navigation
        title="Product List"
        firstBtnTitle="ADD"
        secondBtnTitle="MASS DELETE"
        firstBtnLink="/add-product"
        secondBtnFunc={() => handleProductDelete()}
      />
      <main>
        <ProductListSection />
      </main>
    </>
  );
}
