import { useState } from "react";
import "./ProductAdd.scss";

export default function ProductAdd({
  submitForm,
  lengthError,
  widthError,
  heightError,
  weightError,
  sizeError,
  skuError,
  nameError,
  priceError,
  typeError,
}) {
  //Form State Status
  const [formData, setFormData] = useState({
    sku: "",
    name: "",
    price: "",
    type: "DVD",
    size: "",
    height: "",
    width: "",
    length: "",
    weight: "",
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
    // console.log(formData);
  }

  //Render Switcher Function
  function renderSwitcher() {
    switch (formData.type) {
      case "Book":
        return (
          <div className="switcher" id="Book">
            <label htmlFor="weight">
              Weight (KG)
              <input
                id="weight"
                type="number"
                step="0.01"
                name="weight"
                onChange={handleFormChange}
                value={formData.weight}
                required
              />
            </label>
            <p className="error">{weightError}</p>
            <p>Please provide size in MB format.</p>
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
                name="height"
                onChange={handleFormChange}
                value={formData.height}
                required
              />
            </label>
            <p className="error">{heightError}</p>
            <label htmlFor="width">
              Width (CM)
              <input
                id="width"
                type="number"
                step="0.01"
                name="width"
                onChange={handleFormChange}
                value={formData.width}
                required
              />
            </label>
            <p className="error">{widthError}</p>
            <label htmlFor="length">
              Length (CM)
              <input
                id="length"
                type="number"
                step="0.01"
                name="length"
                onChange={handleFormChange}
                value={formData.length}
                required
              />
            </label>
            <p className="error">{lengthError}</p>
            <p>Please provide dimensions in HxWxL format.</p>
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
                name="size"
                onChange={handleFormChange}
                value={formData.size}
                required
              />
            </label>
            <p className="error">{sizeError}</p>
            <p>Please provide size in MB format.</p>
          </div>
        );
    }
  }

  return (
    <section className="product-add">
      <form id="product_form" onSubmit={submitForm}>
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
        <p className="error">{skuError}</p>
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
        <p className="error">{nameError}</p>
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
        <p className="error">{priceError}</p>
        <label htmlFor="productType">
          Type Switcher
          <select
            id="productType"
            onChange={handleFormChange}
            name="type"
            value={formData.type}
            required
          >
            <option value="DVD">DVD</option>
            <option value="Book">Book</option>
            <option value="Furniture">Furniture</option>
          </select>
        </label>
        <p className="error">{typeError}</p>
        {renderSwitcher()}
      </form>
    </section>
  );
}
