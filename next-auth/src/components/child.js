import React, { useEffect, useState } from "react";

function Child({ onDataChange }) {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
    onDataChange(e.target.value);
  };

  // useEffect(() =>{
  //     onDataChange(input),
  // },[input]);
  return (
    <div>
      <h2>Child Component</h2>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Enter data"
      />
      <button>Submit</button>
    </div>
  );
}

export default Child;
