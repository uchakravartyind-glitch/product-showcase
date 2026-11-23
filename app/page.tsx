import Greeting from "./components/Greeting";
import ProductCard from "./components/ProductCard";

export default function Page() {
  return (
    <main className="store">
      <p className="eyebrow">Utkarsh&apos;s curated picks</p>
      <h1>Desk Essentials</h1>
      <Greeting name="Utkarsh" />

      <div className="cards">
        <ProductCard title="Mechanical Keyboard" price={79} inStock={true} />
        <ProductCard title="Wireless Mouse" price={35} inStock={false} />
        <ProductCard title="Focus Desk Lamp" price={49} inStock={true} />
      </div>
    </main>
  );
}
