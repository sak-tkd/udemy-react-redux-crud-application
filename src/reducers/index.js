import { combineReducers } from "redux";
import events from './events'

// combineReducersで結合しておく
export default combineReducers({ events })

// もっと色々なReducerを結合する場合は複数のreducerを引数として渡すだけで良い
// export default combineReducers({ foo, bar, baz })
