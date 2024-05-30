import { useContext } from "react";
import "./App.css";
import { CountContext } from "./context/CountContext";

function App() {
    const { count, countIncrement, countdecrement } = useContext(CountContext);

    return (
        <>
            <h1>Counter Number {count}</h1>
            <button className="button-style" onClick={countdecrement}>
                -
            </button>
            <button className="button-style" onClick={countIncrement}>
                +
            </button>
        </>
    );
}

export default App;
