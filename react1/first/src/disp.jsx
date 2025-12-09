
import First from "./Display";

function App() {
  var name = "Abbu";
  var val = 23;

  
  var obj = {
    name: "gani",
    gender: "male"
  };

  
  var arr = [10, 20, 30];

  return (
    <>
      <h1>Welcome</h1>
      <First name={name} a={val} obj={obj} arr={arr} />
    </>
  );
}
export default App
