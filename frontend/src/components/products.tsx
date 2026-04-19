import "bootstrap/dist/css/bootstrap.min.css";
import "./Products.css";

type Product = {
  id: number;
  name: string;
  price: number;
};

export default function Products() {
  const items: Product[] = [
    { id: 1, name: "Cap black", price: 150 },
    { id: 2, name: "Audi Key ring", price: 50 },
    { id: 3, name: "Audi Number plate holder", price: 50 },
    { id: 4, name: "Audi fleece blanket", price: 100 },
  ];

  return (
    <div className="wrapper">
      <div className="container">

        <h2>Produkty</h2>

        <div className="row">
          {items.map((item) => (
            <div key={item.id} className="col-md-4">

              <div className="product-card">

                <div className="product-img"></div>

                <h5>{item.name}</h5>
                <p>{item.price} zł</p>

                <button className="btn btn-light">
                  Kup
                </button>

              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
}