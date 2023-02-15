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
  addToDelete,
  removeFromDelete,
}) {
  // Delete Stack Handling
  function addToDeleteQue(event) {
    const { value, checked } = event.target;

    if (checked) {
      addToDelete(value);
    } else {
      removeFromDelete(value);
    }
  }

  // Dynamicly change view based on product type
  function chekcProductType() {
    switch (type) {
      case "Ferniture":
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
      <input type="checkbox" value={sku} onChange={addToDeleteQue} />
      <p>{sku}</p>
      <h2>{name}</h2>
      <p>{price} $</p>
      {chekcProductType()}
    </article>
  );
}
