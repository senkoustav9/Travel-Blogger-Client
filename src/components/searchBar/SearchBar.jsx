import "./SearchBar.css";
import { useState } from "react";
export default function SearchBar({setValue}) {

  const [search,setSearch] = useState("");
  const handleSubmit = (e) => {  
    e.preventDefault();
    setValue(search);
  }
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search By Title" className="searchBox" onChange={(e) => setSearch(e.target.value)}/>
      <i className="fa-solid fa-magnifying-glass searchIcon" onClick={handleSubmit}></i>
    </div>
  );
}
