import { connect } from "react-redux";
import React, { useEffect } from "react";
import { incNumber, decNumber } from "./redux/actions";
import { useSelector, useDispatch } from "react-redux";
import { buyCake } from "./redux1";
import HookCakeComponent from "./components/HookCakeComponent";
import { fetchUsers } from "./redux1";
const App = (props) => {
  const number = useSelector((value) => value.changeNumber);
  const user = useSelector((value) => value.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(user.users);

  return (
    <>
      <button onClick={() => dispatch(decNumber())}>-</button>
      <input value={number} />
      <button onClick={() => dispatch(incNumber())}>+</button>
      <div>
        <h2>number of cakes-{props.numofCakes}</h2>
        <button onClick={props.buyCake}>Buy Cake</button>
      </div>
      <HookCakeComponent />
      {user.loading?(<h1>LOADING</h1>):user.error?(<p>{user.error}</p>):(
        user&&user.users&&user.users.map((value,index)=>{
          return( <p key={index}>{value.name}</p>)
        })
      )}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    numofCakes: state.numofCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
