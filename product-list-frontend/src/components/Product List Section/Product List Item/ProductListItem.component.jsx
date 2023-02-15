import "./ProductListItem.scss"

export default function ProductListItem({sku, name, price,properties}){
    return(
        <article className="product">
            <input type="checkbox" />
            <p>{sku}</p>
            <h2>{name}</h2>
            <p>{price} $</p>
            <p>Size: {properties}</p>
        </article>
    )
}