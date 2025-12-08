// function Display(){
//     var name ="demo";
//     console.log("i am inside the Display " , {name})

//     function changeName(d){
//         var name =d;
//         console.log("iam inside the disp ", { name})

//     }
//     return (
//         <>
//         <h1>
//             i am from disp{ name} </h1>
//           <button onClick={() => { changeName ("not demo")}}>click here !</button>
//             </>
//     )
// }
// export default Display



import {useState} from "react"
function Display(){
    const[myname , setname]= useState("helllo")
    // var name ="demo";
    // console.log("i am inside the Display " , {name})
   console.log("i am inside the Display " , {myname})
    // function changeName(d){
        // var name =d;
        // console.log("iam inside the disp ", { name})

    // }
    return (
        <>
        <h1>
            i am from disp { myname} </h1>
          <button onClick={() => { setname ("not demo")}}>click here !</button>
            </>
    )
}
export default Display