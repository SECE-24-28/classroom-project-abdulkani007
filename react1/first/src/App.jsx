import { useState } from "react";
import Display from "./assets/Display.jsx";

function App() {

  const [data, setData] = useState();

  const name = "hello"
  const val1 = 23
  const arr = [12, 34, 5]
  const person = { name: "sai", gender: "male" }

  const receive = (d) => {
    console.log("got it", d)
    setData(d)
  }

  return (
    <>
      <h1>welcome</h1>
      <h1>I've received from parent: {data}</h1>

      <Display
        name={name}
        a={val1}
        arr={arr}
        obj={person}
        receive={receive}
      />
    </>
  )
}

export default App
