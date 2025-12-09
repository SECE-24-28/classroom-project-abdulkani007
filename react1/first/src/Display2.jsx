import { useState } from "react"

const Display=()=>{
    const [name,setName]=useState()
    return(
        <>
        <h1>imm from Display</h1>
        <input type="text" onChange={(e)=>{setName(e.target.value)}}></input>
        </>
    )
}
export default Display2