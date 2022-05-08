import _ from 'lodash'
// Actionのimport
import { READ_EVENTS } from '../actions'

// 関数として定義する、引数は２つ
export default (events = {}, action) => {
    // 受け取ったアクションのタイプで返却値を決定
    switch (action.type) {
        case READ_EVENTS:
            // これを使うことでid列をキーに管理を行うことができるようになる
            return _.mapKeys(action.response.data, 'id')
        default:
            return events
    }
}