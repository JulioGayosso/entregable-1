import { useState } from "react";
import "./App.css";
import Buton from "./components/Buton";
import quotes from './components/quotes.json'
import QuotesBox from "./components/QuotesBox";



function App() {
  const colors = [
    "yellow",
    "red",
    "blue",
    "gray",
    "purple",
    "orange",
    "brown",
    "pink",
  ];

  const random = Math.floor(Math.random() * quotes.length);

  const random2 = colors[Math.floor(Math.random() * colors.length)];

  const [quote, setQuote] = useState(random);

  const [color, setColor] = useState(random2);

  const changeQuote = () => {
    setQuote(Math.floor(Math.random() * quotes.length));
    setColor(colors[Math.floor(Math.random() * colors.length)]);
  };

  // @ts-ignore
  document.body.style = `background: ${color}`

  return (
    <div className="App">
      <QuotesBox 
      propColor={color}
      propButtons={changeQuote} 
      />
      <Buton 
      propCita={quotes[quote].quote} 
      propAuthor={quotes[quote].author} 
      propColor={color} />
    </div>
  );
}

export default App;
