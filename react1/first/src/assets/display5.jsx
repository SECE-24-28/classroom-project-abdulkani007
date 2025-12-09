import { useState } from "react"

const Display5 = () => {

  const [data, setData] = useState(["one", "two"])
  const [count, setCount] = useState(10)

  function addItem() {
    setData(prev => [...prev, count])
    setCount(c => c + 1)
  }

  return (
    <>
      <h1>I'm from Display5</h1>

      <button onClick={addItem}>Add</button>

      <ul>
        {data.map((d, i) => (
          <li key={i}>{d}</li>
        ))}
      </ul>
    </>
  )
}

export default Display5
