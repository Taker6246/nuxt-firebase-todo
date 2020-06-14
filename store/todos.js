import { firestoreAction } from 'vuexfire'
import firebase from '~/plugins/firebase'

// firestoreを使用
const db = firebase.firestore()
// todosコレクションを使用
// コレクション（todos）⇒ドキュメント（id）⇒ フィールド（名前、完了、作成日）
const todosRef = db.collection('todos')

// ステートのTODO一覧をfirestoreのtodosにバインド
export const state = () => ({
  todos: []
})

// actions : firestoreに対する命令
export const actions = {
  // firestorAction（第１引数：コンテキスト）
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    // バインドしたいデータの名前、コレクションへの参照を指定してバインド
    bindFirestoreRef('todos', todosRef)
  }),

  add: firestoreAction((_context, name) => {
    if (name.trim()) {
      todosRef.add({
        name,
        done: false,
        // 信頼性の面からlocal時刻ではなく、サーバーサイドから取得する、
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  // 削除 （引数：id）⇒idで指定したTODOを削除
  // ※削除にはidが必要
  remove: firestoreAction((_context, id) => {
    todosRef.doc(id).delete()
  }),
  // 更新（完了ステータスを更新する）
  toggle: firestoreAction((_context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

export const getters = {
  orderdTodos: (state) => {
    // eslint-disable-next-line no-undef
    return _.sortBy(state.todos, 'created')
  }
}
