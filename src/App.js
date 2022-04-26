import React, {Component} from "react";

// 属性の書き方例

// 不要なタグを生まないためにReact.Fragmentを使う
// class App extends Component {
//   render(){
//     return (
//       <React.Fragment>
//         <label htmlFor="bar">bar</label>
//         <input type="text" onChange={() => {console.log("I am clicked.")}} />
//       </React.Fragment>
//     )
//   }
// }


// for属性もJavaScriptの予約語とかぶってしまうので書き方が違う
// Reactの制約でreturnで返すJSXは１つのタグでなければならないというものがあるのでdivで１つにしている
class App extends Component {
  render(){
    return (
      <div>
        <label htmlFor="bar">bar</label>
        <input type="text" onChange={() => {console.log("I am clicked.")}} />
      </div>
    )
  }
}

// ■onChange
// class App extends Component {
//   render(){
//     return <input type="text" onChange={() => {console.log("I am clicked.")}}/>
//   }
// }


// ■inputでonClick
// class App extends Component {
//   render(){
//     return <input type="text" onClick={() => {console.log("I am clicked.")}}/>
//   }
// }


// JSXで変数やJavaScriptを使う
// class App extends Component {
//   render(){
//     // 変数に格納した値を下記で使うというやり方もできる
//     const greeting = "Hi, Tom!";

//     // domという変数に入れて表示という書き方もできる
//     const dom = <h1 className="foo">{greeting}</h1>
//     return dom;
//   }
// }

export default App;
