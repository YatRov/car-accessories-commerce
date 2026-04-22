import { useState } from "react";
import "./ProductCard.css";

type ProductCardProps = {
  title: string;
  price: number;
  image: string;
};

export default function ProductCard({
  title,
  price,
  image,
}: ProductCardProps) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className="col-md-3 col-10 mx-auto mt-5">
      <div className="product-card card">

        <img className="product-card__image" src={image} alt={title} />

        <div className="card-body">

          <div className="product-card__header">
            <h5 className="product-card__title">{title}</h5>

            <button
              type="button"
              className={`heart-btn ${isLiked ? "is-active" : ""}`}
              onClick={handleLikeToggle}
              aria-label="Toggle favorite"
            >
              <i
                className={`bi ${
                  isLiked ? "bi-heart-fill" : "bi-heart"
                }`}
              />
            </button>
          </div>

          <p className="product-card__price">${price.toFixed(2)}</p>

          <button type="button" className="btn btn--details w-100">
            Więcej informacji
          </button>

          <button type="button" className="btn btn--cart w-100 mt-2">
            DODAJ DO KOSZYKA
          </button>

        </div>
      </div>
    </div>
  );
}