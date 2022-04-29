import React from "react";
const App = () => {
  // 属性を１つにまとめる
  const profiles = [
    { name: "Taro", age:10 },
    { name: "Hanako", age:5 },
    { name: "Noname" }
  ]
  return (
    <div>
      {
        profiles.map((profile, index) => {
          // キーを与えることでワーニングを回避
          return <User name={profile.name} age={profile.age} key={index} />
        })
      }
    </div>
  ) 
}

const User = (props) => {
  return <div>Hi, I am {props.name}, and {props.age} years old.</div>
}

// 設定がない場合のデフォルトの設定も可能
User.defaultProps = {
  age: 1
}

export default App;
