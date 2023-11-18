import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { ReactElement, createContext } from "react";
import {
  Product,
  ProductContextProps,
  onChangeArgs,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
}

export const ProductCard = ({
  product,
  children,
  className,
  style,
  onChange,
  value,
}: Props) => {
  const { counter, increaseBy } = useProduct({ onChange, product, value });

  return (
    <Provider
      value={{
        counter,
        increaseBy,
        product,
      }}
    >
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}

        {/* <ProductImage img={product.img} />

      <ProductTitle title={product.title} />

      <ProductButtons counter={counter} increaseBy={increaseBy} /> */}
      </div>
    </Provider>
  );
};
