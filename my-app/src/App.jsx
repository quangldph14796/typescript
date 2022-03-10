import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ShowInfo from "./components/ShowInfo";

function App() {
  // const products = [
  //   { id: "1", name: "product A" },
  //   { id: "2", name: "product B" },
  //   { id: "3", name: "product C" },
  // ];
  count[(count, setCount)] = useState(0);
  const [products, setProducts] = useState([
    { id: "1", name: "product A" },
    { id: "2", name: "product B" },
    { id: "3", name: "product C" },
  ]);
  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(count + 1)}>Click</button>
      <hr />
      {products.map((item, index) => (
        <div key={index}>{item.name}</div>
      ))}
      <ShowInfo title="Quang" />
    </div>
  );
}

export default App;
