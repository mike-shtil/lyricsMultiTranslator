import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		projects: [
			{
				name: 'test',
				assignedTo: 'sdfds',
				priority: 1
			}
		]
	},
	actions: {
		LOAD_PROJECT_LIST: function ({ commit }) {
			axios.get('/secured/projects').then((response) => {
				commit('SET_PROJECT_LIST', {list: response.data})
			}, (err) => {
				console.log(err)
			})
		}
	},
	mutations: {
		SET_PROJECT_LIST: (state, { list }) => {
			state.projects = list
		}
	},
	getters: {
		openProjects: state => {
			return state.projects.filter(project => !project.completed)
		}
	}
})
export default store