// initial state

const state = () => ({
    todos: [],
    todosUser: []
})

// getters
const getters = {
    getTodosCompleted: state => {
        return state.todos.map(todo => todo.completed)
    }
}

// actions
const actions = {
    addTodo ({ state, commit }, todo) {
        const _todo = state.todos.find(_todo => _todo.title === todo.title)
        if (!_todo) {
            commit('pushUser', todo)
        }
    },
    getTodosUser ({ state, commit }, user) {
        user = {
            id: parseInt(user.id || user || -1)
        }
        if(state.todos.length > 0){
            commit('setTodosUser', state.todos.filter(todo => todo.userId === user.id))
        }else{
            return actions.loadTodos({ commit }).then(() => {
                commit('setTodosUser', state.todos.filter(todo => todo.userId === user.id))
            })
        }
    },
    toggleCheckTodoUser ({ commit }, todoId) {
        commit('toogleCheckTodo', todoId)
    },
    setCheckTodoUser ({ commit }, todo) {
        commit('checkTodo', todo)
        /*state.todosUser*/
    },
    loadTodos ({ commit }) {
        return fetch("https://jsonplaceholder.typicode.com/todos")
            .then(res => res.json())
            .then(data => commit('setTodos', data))
    }
}

// mutations
const mutations = {
    pushTodo (state, todo) {
        state.todos.push(todo)
    },
    setTodosCompleted (state, idx, completed) {
        state.todos[idx].complete = completed
    },
    setTodos (state, todos) {
        state.todos = todos
    },

    setTodosUser (state, todos) {
        state.todosUser = todos
    },

    checkTodo (state, _todo) {
        console.log(_todo)
        const todoCheck = state.todos.find(todo => todo.id === _todo.id)
        console.log(todoCheck)
        /*state.todosUser = todoCheck*/
    },

    toogleCheckTodo (state, todoId) {
        console.log(todoId)
        const todoCheck = state.todos.find(todo => todo.id === todoId)
        console.log(todoCheck)
        /*state.todosUser = todoCheck*/
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}