<template>
  <div class="content-todo flex row">
    <aside class="flex column">
      <div>
        System
      </div>
      <div>
        <router-link :to="{name: 'UserList'}">
          <span class="icon"></span>
          <span class="text">Users</span>
        </router-link>
      </div>
    </aside>
    <section class="flex column">
      <header class="header space-between">
        <div class="flex center">
          <span class="icon"></span>
          <span class="text">
            Dashboard
          </span>
        </div>
        <div class="flex center">
          <span class="icon"></span>
          <span class="text">
            Marlene Sasoeur
          </span>
        </div>
      </header>
      <div class="buttons flex row center">
        <a class="flex center">
          <span class="icon">+</span>
          <span class="text">
            Add todo
          </span>
        </a>
      </div>
      <div class="content-table flex column">
        <div class="head-table flex row space-between">
          <div class="flex center">
            Users
          </div>
          <div class="flex center">
            settings
          </div>
        </div>
        <table class="table">
          <thead>
          <tr class="head">
            <th>
              Complete
            </th>
            <th>
              Title
            </th>
          </tr>
          </thead>
          <tbody>
          <tr
              v-for="todo in todos"
              :key="todo.id"
          >
            <td>
              <input
                  type="checkbox"
                  v-model="todo.completed"
              />
            </td>
            <td>
              {{  todo.title  }}
            </td>
          </tr>
          </tbody>
        </table>
      </div>
    </section>
  </div>
</template>

<script>

import { mapActions, mapState } from "vuex";

export default {
  name: 'userTodos',
  props: ['userId'],
  computed: mapState({
    todos: state => state.todos.todosUser
  }),
  methods: mapActions('todos', []),
  async created() {
    //this.$store.dispatch('todos/loadTodos')
    this.$store.dispatch('todos/getTodosUser', this.userId)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.content-todo{
  background: #f5f6fa;
  padding: 20px 0;
}

.content-todo > aside{
  width: 245px;
  height: auto;
  padding: 15px 30px ;

  background: #FFFFFF;
  box-shadow: 4px 0px 4px rgba(43, 45, 55, 0.01);
}

.content-todo > section{
  flex: auto;
}

.content-todo > section > .buttons{
  margin: 25px 30px;
}

.content-todo > section > .buttons > a{
  background: #0054fe;
  border-radius: 8px;
  padding: 0 40px;
  height: 48px;
  width: auto;
  color: #fff;
}

.content-todo .icon{
  display: inline-block;
  margin: 15px 0;
  min-height: 12px;
  min-width: 12px;
  height: 12px;
  width: 12px;
  font-size: 12px;
}

.content-todo > section > .buttons > a > .text{
}

.content-todo > section > .content-table{
  margin: 0 30px;
  padding: 30px 20px;
  border-radius: 5px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.0212249);
}

.content-todo > section > .content-table .table{
  border-collapse:separate;
  border-spacing:0 15px;
  margin: 30px 0;
  width: 100%;
}
.content-todo > section > .content-table .table tr:nth-child(odd){
  background: #F5F6FA;
}

.content-todo > section > .content-table .table thead tr{
  background: #fff !important;
}

.content-todo > section > .content-table .table thead tr td{
  vertical-align: center;
}

.content-todo > section > header{
  width: auto;
  height: 75px;
  display: flex;
  margin: 0 30px;
  padding: 10px 30px;
  background: #FFFFFF;

  box-shadow: 0px 4px 4px rgba(43, 45, 55, 0.0105441);
}
/*h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}*/
</style>
