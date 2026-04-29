import { removeItem } from "@/entities/cart";
import { useDispatch } from "react-redux";

export const Cart = () => {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => {
        // dispatch(clearCart());
        dispatch(removeItem({ cartID: "19#DC143C" }));
      }}
    >
      Cart
    </div>
  );
}
