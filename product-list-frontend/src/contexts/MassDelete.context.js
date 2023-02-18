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
    let url =
      "http://localhost/Product%20List%20(React%20+%20PHP)/product-list-backend/includes/delete-product.php";

    let response = await axios({
      method: "post",
      url: url,
      data: {
        skuToDeleteList: massDelete,
      },
    });

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
