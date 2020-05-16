<template>
  <div>
    <ul>
      <!-- firestore内のデータを表示 -->
      <li v-for="todo in todos" :key="todo.id">
        <!-- todo.creadedが入るまで表示しない -->
        <span v-if="todo.created">
          <input type="checkbox" :checked="todo.done" @change="toggle(todo)" />

          <span :class="{ done: todo.done }">
            <!-- 日付はfilterで変換 -->
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>

          <button @click="remove(todo.id)">X</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <!-- addメソッドを呼び出す -->
      <form @submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  filters: {
    // タイムスタンプを西暦表示に変換
    dateFilter(date) {
      return moment(date).format('YYYY/MM/DD HH:mm:ss')
    }
  },
  // コンポーネント作成時に
  data() {
    return {
      name: '',
      done: false
    }
  },
  computed: {
    // stoteのtodos.jsより配列todosを取得
    todos() {
      // そのまま
      // return this.$store.state.todos.todos

      // getterを介する場合
      return this.$store.getters['modules/todos/orderdTodos']
    }
  },
  created() {
    // storeのtodo.jsのinitメソッドを呼び出す
    this.$store.dispatch('modules/todos/init')
  },
  methods: {
    add() {
      // storeのtodo.jsのaddメソッドにnameを渡して呼び出す
      this.$store.dispatch('modules/todos/add', this.name)
    },
    remove(id) {
      // storeのtodo.jsのremoveメソッドにidを渡して呼び出す
      this.$store.dispatch('modules/todos/remove', id)
    },
    toggle(todo) {
      // storeのtodo.jsのtoggleメソッドにtodoを渡して呼び出す
      this.$store.dispatch('modules/todos/toggle', todo)
    }
  }
}
</script>
<style>
/* >： 親子構造 */
li > span > span.done {
  text-decoration: line-through;
}
</style>
