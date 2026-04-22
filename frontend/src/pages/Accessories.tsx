import "bootstrap/dist/css/bootstrap.min.css";
import "./Accessories.css";
import ProductCard from "../components/ProductCard";

const products = [
  {
    id: 1,
    title: "Bag",
    price: 299,
    image: "https://cdn11.bigcommerce.com/s-pn4c35ct31/images/stencil/1280x1280/products/315/618/8U0061109__59158.1605960265.jpg?c=2",
  },
  {
    id: 2,
    title: "Classic watch",
    price: 199,
    image: "https://ae01.alicdn.com/kf/S4f28faceb37b40fc94772825cc53d6f6d.jpg",
  },
  {
    id: 3,
    title: "Sport watch",
    price: 149,
    image: "",
  },
];

export default function Accessories() {
  return (
    <div className="wrapper">
      <div className="container">
        <h2 className="text-center mt-4">Accessories</h2>

        <div className="row">
          {products.map((p) => (
            <ProductCard
              key={p.id}
              title={p.title}
              price={p.price}
              image={p.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}