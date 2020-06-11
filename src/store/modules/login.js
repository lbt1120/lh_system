const state = () => ({
   admin:null
})

// getters
const getters = {
    userInfo:(state)=>{
        return state.admin
    }
}

// actions
const actions = {

}

// mutations
const mutations = {

}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}