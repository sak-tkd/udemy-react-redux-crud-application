import axios from "axios"

// Reducerでも使えるように変数を定義しておいてそれを使うようにする
export const READ_EVENTS = 'READ_EVENTS'

const ROOT_URL = 'https://udemy-utils.herokuapp.com/api/v1'
const QUERYSTRING = '?token=token123'

// 以下がアクションクリエーター = 関数
export const readEvents = () => async dispatch => {
    const response = await axios.get(`${ROOT_URL}/events${QUERYSTRING}`)
    dispatch({ type: READ_EVENTS, response })
    // 本来はこの中ではピュアなオブジェクトを返却しないといけない
    // すなわちこの中で非同期処理を行うことは許されないが
    // それを可能にするのがredux-thunk→アクションクリエーターがアクションの代わりに関数を返すことができるようになる
    // 内部の関数はdispath
}
