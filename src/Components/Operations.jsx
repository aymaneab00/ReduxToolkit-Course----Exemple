import React from "react";
import { useDispatch } from "react-redux";
import { decrement, increment, initialiser } from "../redux/CounterSlice";

export default function Operations() {
 const dispatch = useDispatch();
    return (
    <div>
      <button onClick={()=>dispatch(increment())}>Incrementer</button>
      <button onClick={()=>dispatch(decrement())}>Incrementer</button>
      <button onClick={()=>dispatch(initialiser())}>Incrementer</button>
    
    </div>
  );
}
