import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./component/Header/Header";
import Cards from "./component/Cards/Cards";

function App() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setCards(data));
  }, []);

  return (
    <div className="App mx-auto w-9/12">
      <Header></Header>
      <Cards cards={cards}></Cards>
    </div>
  );
}

export default App;
