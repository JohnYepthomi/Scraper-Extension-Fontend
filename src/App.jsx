import Home from "./pages/home";
import Header from "./components/Header";
import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-dark text-light min-vh-100 min-v-100 v-100 h-100">
      <Header />
      <Home />
    </div>
  );
}

export default App;
