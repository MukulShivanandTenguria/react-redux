import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "../redux1";
import { buyIceCream } from "../redux1";
const HookCakeComponent = () => {
  const numofCakes = useSelector((state) => state.cake.numofCakes);
  const numofIceCreams=useSelector((state) => state.iceCream.numofIceCreams)
  const dispatch = useDispatch();
  return (
    <>
      <div>
        <h2>number of cakes-{numofCakes}</h2>
        <button onClick={() => dispatch(buyCake())}>Buy Cake</button>
      </div>
      <div>
        <h2>number of icecream-{numofIceCreams}</h2>
        <button onClick={() => dispatch(buyIceCream())}>Buy Cake</button>
      </div>
    </>
  );
};

export default HookCakeComponent;
