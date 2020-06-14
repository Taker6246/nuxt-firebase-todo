<template>
<<<<<<< HEAD
  <v-app>
    <!-- メインコンテンツ -->
    {{ test }}
  </v-app>
</template>

<script>
export default {
  props: {
    // eslint-disable-next-line vue/require-default-prop
    source: String
  },
  data() {
    return {
      test: 'TEST'
    }
  }
}
</script>
=======
  <div>
    <ul>
      <!-- firestore内のデータを表示 -->
      <li v-for="todo in todos" :key="todo.id">
        <!-- todo.creadedが入るまで表示しない -->
        <span v-if="todo.created">
          <input
            type="checkbox"
            v-bind:checked="todo.done"
            @change="toggle(todo)"
          />

          <span v-bind:class="{ done: todo.done }">
            <!-- 日付はfilterで変換 -->
            {{ todo.name }} {{ todo.created.toDate() | dateFilter }}
          </span>

          <button @click="remove(todo.id)">X</button>
        </span>
      </li>
    </ul>
    <div class="form">
      <!-- addメソッドを呼び出す -->
      <form v-on:submit.prevent="add">
        <input v-model="name" />
        <button>Add</button>
      </form>
    </div>
  </div>
</template>

<script>
import moment from "moment";
export default {
  //コンポーネント作成時に
  data() {
    return {
      name: "",
      done: false
    };
  },
  created() {
    // storeのtodo.jsのinitメソッドを呼び出す
    this.$store.dispatch("todos/init");
  },
  methods: {
    add() {
      // storeのtodo.jsのaddメソッドにnameを渡して呼び出す
      this.$store.dispatch("todos/add", this.name);
    },
    remove(id) {
      // storeのtodo.jsのremoveメソッドにidを渡して呼び出す
      this.$store.dispatch("todos/remove", id);
    },
    toggle(todo) {
      // storeのtodo.jsのtoggleメソッドにtodoを渡して呼び出す
      this.$store.dispatch("todos/toggle", todo);
    }
  },
  computed: {
    //stoteのtodos.jsより配列todosを取得
    todos() {
      // そのまま
      // return this.$store.state.todos.todos

      // getterを介する場合
      return this.$store.getters["todos/orderdTodos"];
    }
  },
  filters: {
    // タイムスタンプを西暦表示に変換
    dateFilter(date) {
      return moment(date).format("YYYY/MM/DD HH:mm:ss");
    }
  }
};
</script>
<style>
/* >： 親子構造 */
li > span > span.done {
  text-decoration: line-through;
}
</style>
>>>>>>> origin/master
