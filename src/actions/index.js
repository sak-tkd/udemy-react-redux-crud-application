// Reducerでも使えるように変数を定義しておいてそれを使うようにする
export const INCREMENT = 'INCREMENT'
export const DECREMENT = 'DECREMENT'

// 以下がアクションクリエーター = 関数
export const increment = () => ({
    type: INCREMENT
})
export const decrement = () => ({
    type: DECREMENT
})
