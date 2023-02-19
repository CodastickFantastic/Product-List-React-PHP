import { useEffect, useState } from "react";
import ProductListItem from "./Product List Item/ProductListItem.component";
import "./ProductListSection.scss";

export default function ProductListSection() {
  //Uploading data to display in product list section
  const [productList, setProductLIst] = useState();

  useEffect(() => {
    fetchData().then((products) => {
      setProductLIst(
        products.map((product) => {
          return (
            <ProductListItem
              key={product.id}
              sku={product.sku}
              name={product.name}
              price={product.price}
              type={product.type}
              height={product.height}
              length={product.length}
              width={product.width}
              weight={product.weight}
              size={product.size}
            />
          );
        })
      );
    });
  }, []);

  // Fetch data with all saved products from PHP server
  async function fetchData() {
    let products;
    const response = await fetch("http://jakubwojtysiak.online:8080/includes/get-product-list.php");

    if (response.status === 200) {
      products = await response.json();
    } else {
      console.log("DB Error");
    }

    return products;
  }

  return <section className="product-list-section">{productList}</section>;
}
