import React, {Component} from "react";
import { connect } from "react-redux";
import _ from 'lodash'

import {readEvents} from "../actions"

class EventsIndex extends Component {
  componentDidMount(){
    // 外部APIに対してイベントを取得処理実装
    this.props.readEvents()
  }

  renderEvents() {
    return _.map(this.props.events, event => (
      <tr key={event.id}>
        <td>{event.id}</td>
        <td>{event.title}</td>
        <td>{event.body}</td>
      </tr>
    ))
  }

  render(){
    return (
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
            </tr>
          </thead>

          <tbody>
            {this.renderEvents()}
          </tbody>
        </table>
    )
  }
}

const mapStateToProps = state => ({ events: state.events })
// readEventsが外部APIに対して一覧を取得する役割を持っている
const mapDispatchToProps = ({ readEvents })

// 下記のようにも書ける
// const mapDispatchToProps = ({increment, decrement})

export default connect(mapStateToProps, mapDispatchToProps)(EventsIndex)

//export default App;
