import {
  ProductButtons,
  ProductCard,
  ProductImage,
  ProductTitle,
} from "../components";
import { products } from "../data/products";
import { useShoppingCart } from "../hooks/useShoppingCart";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {

  const {onProductCountChange, shoppingCart} = useShoppingCart()

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            key={product.id}
            onChange={(evento) => onProductCountChange(evento)}
            value={shoppingCart[product.id]?.count || 0}
          >
            <ProductImage className="custom-image" />
            <ProductTitle className="text-white" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>

      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            product={product}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            key={key}
            value={product.count}
            onChange={(evento) => onProductCountChange(evento)}
          >
            <ProductImage className="custom-image" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
