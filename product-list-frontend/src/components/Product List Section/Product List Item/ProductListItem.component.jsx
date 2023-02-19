import { useContext } from "react";
import MassDeleteContext from "../../../contexts/MassDelete.context";

import "./ProductListItem.scss";

export default function ProductListItem({
  sku,
  name,
  price,
  type,
  height,
  length,
  width,
  weight,
  size,
}) {
  const { addToMassDelete, removeFromMassDelete } =
    useContext(MassDeleteContext);

  // Handling Checkbox Behaviour <-- Mass Delete
  function handleToDeleteCheck(event) {
    const { value, checked } = event.target;

    if (checked) {
      addToMassDelete(value);
    } else {
      removeFromMassDelete(value);
    }
  }

  // Dynamicly change view based on product type
  function chekcProductType() {
    switch (type) {
      case "Furniture":
        return (
          <p>
            Dimension: {height}x{width}x{length}
          </p>
        );
      case "Book":
        return <p>Weight: {weight}KG</p>;

      default:
        return <p>Size: {size} MB</p>;
    }
  }

  return (
    <article className="product">
      <input
        type="checkbox"
        value={sku}
        onChange={handleToDeleteCheck}
        className="delete-checkbox"
      />
      <p>{sku}</p>
      <h2>{name}</h2>
      <p>{price} $</p>
      {chekcProductType()}
    </article>
  );
}
