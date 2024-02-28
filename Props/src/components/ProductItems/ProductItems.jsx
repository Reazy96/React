import "./ProductItems.css";

const ProductItems = (props) => {
  return (
    <div className="product-div">
      <img src={props.item1.img} alt="bild" />
      <h1>{props.item1.product}</h1>
      <p>{props.item1.price}</p>
      <button>Kaufen</button>
    </div>
  );
};

export default ProductItems;
