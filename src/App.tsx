import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment } from "./redux/features/counterSlice";

function App() {
  const count = useSelector();
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <button
          onClick={() => dispatch(increment())}
          className="px-4 py-2 m-2 text-white bg-blue-500 rounded hover:bg-blue-700"
        >
          Increment
        </button>
        <h1 className="text-2xl font-bold">2</h1>
        <button
          onClick={() => dispatch(decrement())}
          className="px-4 py-2 m-2 text-white bg-red-500 rounded hover:bg-red-700"
        >
          Decrement
        </button>
      </div>
    </>
  );
}

export default App;
