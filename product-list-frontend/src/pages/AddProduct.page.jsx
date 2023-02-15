import Navigation from "../components/Navigation/Navigation.component";
import ProductAdd from "../components/Product Add Section/ProductAdd.component";

export default function AddProduct() {
  function submitForm(event) {
    // event.preventDefault();
    console.log("Save")
    // let form = document.getElementById("product_form");
    // form.submit();
  }

  return (
    <>
      <Navigation
        title="Product Add"
        firstBtnTitle="Save"
        firstBtnFunc={submitForm}
        secondBtnTitle="Cancel"
        secondBtnLink="/"
        firstBtnForm="product_form"
        firstBtnType="submit"
        secondBtnType="button"
      />
      <main>
        <ProductAdd />
      </main>
    </>
  );
}
