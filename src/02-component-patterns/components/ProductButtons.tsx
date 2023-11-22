import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className, style }: Props) => {
  //TODO: extraer maxCount del componente (opcional) hecho
  const { counter, increaseBy, maxCount } = useContext(ProductContext);
  //TODO: isMaxReached (useCallback, dependencias[counter, maxCount])

  const isMaxReached = useCallback(
    () => !!maxCount && maxCount === counter,
    [counter, maxCount]
  );

  //true si el count === maxCount, false si no lo es
  //basado en eso, agregar el estilo

  return (
    <div className={`${styles.buttonsContainer} ${className}`} style={style}>
      <button className={styles.buttonMinus} onClick={() => increaseBy(-1)}>
        -
      </button>

      <div className={styles.countLabel}>{counter}</div>

      <button
        className={`${styles.buttonAdd} ${
          isMaxReached() ? styles.disable : ""
        }`}
        onClick={() => increaseBy(1)}
        disabled={isMaxReached()}
      >
        +
      </button>
    </div>
  );
};
