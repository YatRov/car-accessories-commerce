import "./ProductCard.css";

type Props = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({ title, price, image }: Props) {
  return (
    <div className="col-md-3 col-10 mx-auto mt-5">
      <div className="card product-card">
        <img className="img-thumbnail" src={image} alt={title} />

        <div className="card-body text-center">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">${price}</p>

          <button className="btn details w-100">
            view details
          </button>

          <button className="btn cart w-100 mt-2">
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
}