import React, { useState } from "react";
import "./App.css";
import JSONDATA from "./MOCK_DATA.json";
function App() {
  const [searchValue, setSearchValue] = useState("");

  return (
    <div className="App">
      <input
        type="text"
        placeholder="Search..."
        onChange={(event) => {
          setSearchValue(event.target.value);
        }}
      />
      {JSONDATA.filter((val) =>{
        if(searchValue === ""){
          return val;
        }
        else if(val.first_name.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())){
          return val;
        }
        else{
          return null; 
        }
      }).map((val, key) => {
        return (
          <div className="user" key={key}>
            <p>{val.first_name}</p>
          </div>
        );
      })}
    </div>
  );
}

export default App;
