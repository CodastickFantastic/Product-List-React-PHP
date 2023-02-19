import Navigation from "../components/Navigation/Navigation.component";
import ProductAdd from "../components/Product Add Section/ProductAdd.component";
import axios from "axios";
import { useState } from "react";

export default function AddProduct() {
  //Error Handling State
  const [phpResponse, setPhpResponse] = useState({});


  // Add Product Handling
  async function submitForm(event) {
    event.preventDefault();

    let url = "http://jakuwojtysiak.online:8080/includes/add-product.php";
    let formData = new FormData(document.getElementById("product_form"));
    let response = await axios.post(url, formData);

    //If response is empty, redirect to home page
    if (response.data === "") {
      window.location = "/";
    } else {
      //If response is not empty, split the response into an array and create an object with the errors
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
      // console.log(errorObj);
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
