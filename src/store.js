// import {createStore} from 'vuex'

// const store = createStore({
//   state() {
//     return {
//       value:0,
//       price:0,
//       pathElement:'',
//     }
//   }
// })

// export default store;

import { createStore } from 'vuex'


const state = {

  // value:0,
  // price:0,
  // pathElement:'',
  orderArrayObj:[],
  pathElementFavorite:[],

}


// const mutations = {
//   increment (state) {
//     state.count++
//   },
//   decrement (state) {
//     state.count--
//   }
// }

// // actions are functions that cause side effects and can involve
// // asynchronous operations.
// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }

// // getters are functions.
// const getters = {
//   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state
  // getters,
  // actions,
  // mutations
})