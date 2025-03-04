import { useState } from "react";
import { foods } from "./data";
import './App.css'; // Import the CSS file

function App() {
  const [search, setSearch] = useState("");
  const food = foods.map((food) => {
    // Convert both strings to lowercase for case-insensitive comparison
    if (food.name.toLowerCase().includes(search.toLowerCase())) {
      return (
        <tr key={food.id}>
          <td>{food.name}</td>
          <td>{food.description}</td>
        </tr>
      );
    }
  });
  return (
    <>
      <label className="search-label">
        search
        <textarea className="search-textarea" placeholder="search" onChange={(e)=>setSearch(e.target.value)}></textarea>
      </label>
      <hr />
      <table className="food-table">{food}</table>
    </>
  );
}
export default App;
