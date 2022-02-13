import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { decrease, increase } from "./redux/action";

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h4>{counter}</h4>
      <button onClick={() => dispatch(increase(100))}>increase</button>
      <button onClick={() => dispatch(decrease(50))}>decrease</button>
    </div>
  );
}
export default App;
