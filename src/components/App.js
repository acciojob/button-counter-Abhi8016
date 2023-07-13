
import React from "react";
import './../styles/App.css';
import React, { useState } from "react";

const App = () => {

  let [count, setCount] = useState(0)

  function plus() {
    setCount(count + 1)
  }


  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {count} times</p>
      <button onClick={plus}>Click me</button>

    </div>
  )
}

export default App
