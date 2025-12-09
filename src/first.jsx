function First(data) {
  const { name, a, arr, obj } = data;

  return (
    <center>
      <>
        <h1> Hello {name} {a} </h1>

        <h2>Array Data</h2>
        <ul>
          {arr.map((d, index) => (
            <li key={index}>{d}</li>
          ))}
        </ul>

        <h2>{obj.name} {obj.gender}</h2>

        <h2>I am from First</h2>
      </>
    </center>
  );
}

export default First;
