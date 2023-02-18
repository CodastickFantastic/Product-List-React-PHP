import Navigation from "../components/Navigation/Navigation.component";
import ProductAdd from "../components/Product Add Section/ProductAdd.component";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
  //Error Handling State
  const [phpResponse, setPhpResponse] = useState({});

  async function submitForm(event) {
    event.preventDefault();
    let formData = new FormData(document.getElementById("product_form"));

    let url =
      "http://localhost/Product%20List%20(React%20+%20PHP)/product-list-backend/includes/add-product.php";

    let response = await axios.post(url, formData);

    if (response.data === "") {
      window.location = "/";
    } else {
      let errorArr = response.data.split(";");
      let errorObj = {};

      errorArr.forEach((error) => {
        error = error
          .replace('{"', "")
          .replace('"}', "")
          .replace('"', "")
          .replace('"', "");
        error = error.split(":");
        errorObj[error[0]] = error[1];
      });
      console.log(errorObj);
      setPhpResponse(errorObj);
    }
  }

  return (
    <>
      <Navigation
        title="Product Add"
        firstBtnTitle="Save"
        secondBtnTitle="Cancel"
        secondBtnLink="/"
        firstBtnForm="product_form"
        firstBtnType="submit"
        secondBtnType="button"
      />
      <main>
        <ProductAdd
          submitForm={submitForm}
          skuError={phpResponse.skuError}
          nameError={phpResponse.nameError}
          priceError={phpResponse.priceError}
          typeError={phpResponse.typeError}
          sizeError={phpResponse.sizeError}
          weightError={phpResponse.weightError}
          heightError={phpResponse.heightError}
          widthError={phpResponse.widthError}
          lengthError={phpResponse.lengthError}
        />
      </main>
    </>
  );
}
