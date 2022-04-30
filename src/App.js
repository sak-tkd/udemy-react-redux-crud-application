import React from "react";

const App = () => {
  const profiles = [
    { name:"Taro", age:10 },
    { name:"Hana", age:5},
    { name:"El"}
  ]
  return (
    <div>
      {
        profiles.map((obj, index) => {
          return <User name={obj.name} year={obj.age} key={index} />
        })
      }
    </div>
  )
}

const User = (prop) => {
  return <div>
    Hi, I am {prop.name}! and I am {prop.year} years old.
  </div>
}

User.defaultProps = {
  age:1
}

export default App;
