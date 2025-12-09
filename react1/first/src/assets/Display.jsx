import { useState } from "react"

const Display = () => {

  const [name, setName] = useState("");

  return (
    <>
      <h1>I'm from Display</h1>

      <input
        type="text"
        placeholder="Enter something"
        onChange={(e) => setName(e.target.value)}
      />

      <h2>You typed: {name}</h2>
    </>
  )
}

export default Display
