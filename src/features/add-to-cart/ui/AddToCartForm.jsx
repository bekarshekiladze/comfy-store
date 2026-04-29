import { addItem } from "@/entities/cart";
import { generateAmountOptions } from "@/shared/ui";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const AddToCartForm = ({ product }) => {
  const { image, title, price, colors, company } = product.attributes;

  const [productColor, setProductColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const dispatch = useDispatch();

  const cartProduct = {
    cartID: product.id + productColor,
    productID: product.id,
    image,
    title,
    price,
    company,
    productColor,
    amount,
  };

  const addToCart = () => {
    dispatch(addItem({ product: cartProduct }));
  };

  const handleAmount = (e) => {
    setAmount(parseInt(e.target.value));
  };

  return (
    <div className="mt-6">
      <h4 className="text-md font-medium tracking-wider capitalize">colors</h4>
      {/* colors */}
      <div className="mt-2">
        {colors.map((color) => (
          <button
            type="button"
            key={color}
            className={`badge w-6 h-6 mr-2 p-0 cursor-pointer ${color === productColor ? "border-2 border-secondary" : ""}`}
            style={{ backgroundColor: color }}
            onClick={() => setProductColor(color)}
          ></button>
        ))}
      </div>
      {/* amount */}
      <div className="form-control w-full max-w-xs">
        <label htmlFor="amount" className="label px-1 py-2">
          <h4 className="text-md font-medium -tracking-wider capitalize">
            amount
          </h4>
        </label>
        <select
          className="select select-secondary select-bordered select-md"
          id="amount"
          value={amount}
          onChange={handleAmount}
        >
          {generateAmountOptions(20)}
        </select>
      </div>
      {/* cart btn */}
      <div className="mt-10">
        <button
          className="btn btn-secondary btn-md uppercase"
          onClick={addToCart}
        >
          add to bag
        </button>
      </div>
    </div>
  );
};
