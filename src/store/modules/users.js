// initial state
// shape: [{ id, quantity }]
const state = () => ({
    users: []
})

// getters
const getters = {
    getUsers (state){
        return state.users
    }
}

// actions
const actions = {
    addUser ({ state, commit }, usr) {
        const user = state.users.find(user => user.email === usr.email)
        if (!user) {
            commit('pushUser', usr)
        }
    },
    loadUsers ({ commit }) {
        return fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => commit('setUsers', data))
    }
}

// mutations
const mutations = {
    pushUser (state, usr) {
        state.users.push(usr)
    },

    setUsers (state, usrs ) {
        state.users = usrs
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}