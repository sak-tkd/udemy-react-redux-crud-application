import React from "react";
import PropTypes from "prop-types";

const App = () => {
  const profiles = [
    { name:"Taro", age: 10 },
    { name:"Hana", age: 5},
    { name:"NoName", age: 3}
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          return <User name={profile.name} year={profile.age} key={index} />
        })
      }
    </div>
  )
}

const User = (props) => {
  return <div>
    Hi, I am {props.name}! and I am {props.year} years old.
  </div>
}

User.propTypes = {
  name: PropTypes.string,
  year: PropTypes.number.isRequired
}

export default App;
