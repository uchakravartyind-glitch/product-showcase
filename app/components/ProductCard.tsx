import PriceTag from "./PriceTag";

type Props = {
  title: string;
  price: number;
  inStock: boolean;
};

export default function ProductCard({ title, price, inStock }: Props) {
  return (
    <article className="card">
      <div className="product-icon" aria-hidden="true">
        {title.charAt(0)}
      </div>
      <h3>{title}</h3>
      <PriceTag amount={price} />
      <p className={inStock ? "stock stock--available" : "stock stock--sold-out"}>
        {inStock ? "In stock" : "Sold out"}
      </p>
    </article>
  );
}
