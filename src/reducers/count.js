// Actionのimport
import {INCREMENT, DECREMENT } from '../actions'

// 状態の初期値定義
const initialState = { value: 0 }

// count Reducerを定義
// 関数として定義する、引数は２つ
export default (state = initialState, action) => {
    // 受け取ったアクションのタイプで返却値を決定
    switch (action.type) {
        case INCREMENT:
            return { value: state.value + 1}
        case DECREMENT:
            return { value: state.value - 1}
        default:
            return state
    }
}