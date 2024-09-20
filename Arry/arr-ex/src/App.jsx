
function App() {
  
  let address ={
    street: "123 Main St",
    city: "Anytown",
    state: "CA",
    zip: "12345"
    
  }

  let obj = {
    name: "John",
    age: 30,
    occupation: "Developer",
    son: [
      {name: "Tom", age: 10},
      {name: "Jerry", age: 12}
    ],
    address : {...address}
    }
  
    return (
    <>
    <h1>{obj.name}</h1>
    <h2>{obj.age}</h2>
    <h3>{obj.occupation}</h3>
    {
      obj.son.map((val)=>{
        const{name,age} = val;
        return (
          <div>
            <h4>{val.name}</h4>
            <h5>{val.age}</h5>
          </div>
        )
      })
    }
    <h5>{obj.address.street}</h5>
    </>
  )
}

export default App
