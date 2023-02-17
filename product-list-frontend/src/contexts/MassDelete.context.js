import { createContext, useState } from "react";
import axios from "axios";

const MassDeleteContext = createContext();

export function MassDeleteContextProvider({ children }) {
  const [massDelete, setMassDelete] = useState([]);

  // Handle add product to Mass Delete
  function addToMassDelete(product) {
    setMassDelete((prevState) => {
      return [...prevState, product];
    });
  }

  // Handle remove product from Mass Delete
  function removeFromMassDelete(product) {
    setMassDelete((prevState) => {
      let newState = [];
      prevState.forEach((id) => {
        if (id !== product) {
          newState.push(id);
        }
      });

      return newState;
    });
  }

  // Send delete request to PHP
  async function sendDeleteRequest() {
    // let response = await fetch(
    //   "http://localhost/Product%20List%20(React%20+%20PHP)/product-list-backend/includes/delete-product.php",
    //   {
    //     method: "POST",
    //     headers: { "Content-Type": "application/x-www-form-urlencoded" },
    //     body: massDelete,
    //   }
    // );

    // response = await response.text();
    let url =
      "http://localhost/Product%20List%20(React%20+%20PHP)/product-list-backend/includes/delete-product.php";

    let responsee = await axios({
      method: "post",
      url: url,
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Content-Type": "application/json",
      },
      data: {
        skuToDeleteList: massDelete,
      },
      dataType: "json", 
      contentType: "application/json"
    });
    let responsee2 = await responsee.json();

    console.log(responsee2);
    // console.log(response);
  }

  return (
    <MassDeleteContext.Provider
      value={{
        massDelete,
        addToMassDelete,
        removeFromMassDelete,
        sendDeleteRequest,
      }}
    >
      {children}
    </MassDeleteContext.Provider>
  );
}

export default MassDeleteContext;
