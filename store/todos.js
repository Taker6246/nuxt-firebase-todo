import firebase from '~/plugins/firebase'
import { firestoreAction } from 'vuexfire'

//firestoreを使用
const db = firebase.firestore()
//todosコレクションを使用
//コレクション（todos）⇒ドキュメント（id）⇒ フィールド（名前、完了、作成日）
const todosRef = db.collection('todos')

//ステートのTODO一覧をfirestoreのtodosにバインド
export const state = () => ({
  todos: []
})

// actions : firestoreに対する命令
export const actions = {
  //firestorAction（第１引数：コンテキスト）
  // 初期化
  init: firestoreAction(({ bindFirestoreRef }) => {
    // バインドしたいデータの名前、コレクションへの参照を指定してバインド
    bindFirestoreRef('todos', todosRef)
  }),
  // 追加 （引数；名前）⇒　TODO(名前（空白除去）、チェック、作成日時)を作成
  add: firestoreAction((context, name) => {
    if(name.trim()) {
      todosRef.add({
        name: name,
        done: false,
        // 信頼性の面からlocal時刻ではなく、サーバーサイドから取得する、
        created: firebase.firestore.FieldValue.serverTimestamp()
      })
    }
  }),
  // 削除 （引数：id）⇒idで指定したTODOを削除
  // ※削除にはidが必要
  remove: firestoreAction((context, id) => {
    todosRef.doc(id).delete()
  }),
  // 更新（完了ステータスを更新する）
  toggle: firestoreAction((context, todo) => {
    todosRef.doc(todo.id).update({
      done: !todo.done
    })
  })
}

export const getters = {
  orderdTodos: state => {
    return _.sortBy(state.todos,'created')
  }
}
