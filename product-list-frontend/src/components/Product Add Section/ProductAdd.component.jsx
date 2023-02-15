import { useState } from "react";
import "./ProductAdd.scss";

export default function ProductAdd() {
  //Form State Status
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    productType: "DVD",
    productSize: "",
    productHeight: "",
    productWidth: "",
    productLength: "",
    productWeight: "",
  });

  //Handle Form Change for React
  function handleFormChange(event) {
    const { name, value } = event.target;
    setFormData((prevForm) => {
      return {
        ...prevForm,
        [name]: value,
      };
    });
    console.log(formData);
  }

  //Render Switcher Function
  function renderSwitcher() {
    switch (formData.productType) {
      case "Book":
        return (
          <div className="switcher" id="Book">
            <label htmlFor="weight">
              Weight (KG)
              <input
                id="weight"
                type="number"
                step="0.01"
                name="productWeight"
                onChange={handleFormChange}
                value={formData.productWeight}
                required
              />
            </label>
            <p>Please provide size in MB format.</p>
            <p>Example: 1024</p>
          </div>
        );
      case "Furniture":
        return (
          <div className="switcher" id="Furniture">
            <label htmlFor="height">
              Height (CM)
              <input
                id="height"
                type="number"
                step="0.01"
                name="productHeight"
                onChange={handleFormChange}
                value={formData.productHeight}
                required
              />
            </label>
            <label htmlFor="width">
              Width (CM)
              <input
                id="width"
                type="number"
                step="0.01"
                name="productWidth"
                onChange={handleFormChange}
                value={formData.productWidth}
                required
              />
            </label>
            <label htmlFor="length">
              Length (CM)
              <input
                id="length"
                type="number"
                step="0.01"
                name="productLength"
                onChange={handleFormChange}
                value={formData.productLength}
                required
              />
            </label>
            <p>Please provide dimensions in HxWxL format.</p>
            <p>Example: 1024</p>
          </div>
        );
      default:
        return (
          <div className="switcher" id="DVD">
            <label htmlFor="size">
              Size (MB)
              <input
                id="size"
                type="number"
                step="0.01"
                name="productSize"
                onChange={handleFormChange}
                value={formData.productSize}
                required
              />
            </label>
            <p>Please provide size in MB format.</p>
            <p>Example: 1.2</p>
          </div>
        );
    }
  }

  return (
    <section className="product-add">
      <form id="product_form" action="xd.php" method="post">
        <label htmlFor="sku">
          SKU
          <input
            id="sku"
            type="text"
            name="sku"
            onChange={handleFormChange}
            value={formData.sku}
            required
          />
        </label>
        <label htmlFor="name">
          Name
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleFormChange}
            value={formData.name}
            required
          />
        </label>
        <label htmlFor="price">
          Price ($)
          <input
            id="price"
            type="number"
            step="0.01"
            name="price"
            onChange={handleFormChange}
            value={formData.price}
            required
          />
        </label>
        <label htmlFor="productType">
          Type Switcher
          <select
            id="productType"
            onChange={handleFormChange}
            name="productType"
            value={formData.productType}
            required
          >
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>
        {renderSwitcher()}
        <button onClick={event => event.preventDefault()}>Sub</button>
      </form>
    </section>
  );
}
