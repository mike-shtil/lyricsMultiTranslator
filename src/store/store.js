import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)
const store = new Vuex.Store({
	state: {
		translationSets: [
			{
				name: 'Chinese',
				tooltip: 'Chinese is the most spoken language',
				languages: ['EN', 'CN', 'EN']
			},
			{
				name: 'Top 5',
				tooltip: 'Top 5 most spoken languages',
				languages: ['EN', 'FR', 'SP', 'EN']
			},
			{
				name: 'All',
				tooltip: 'All languages available',
				languages: ['EN', 'FR', 'SP', 'CN', 'EN']
			}
		],
		lyricsText:undefined,
		selectedTranslationSet:undefined
	},
	actions: {
		runTranslate(context, inputs){
			context.commit('RUN_TRANSLATE', inputs);
			inputs && inputs.router.push('Translate',
				success => {
				},
				error => {
					console.error(`error changing route`);
				});
			//route
		}
	},
	mutations: {
		RUN_TRANSLATE(state, inputs){
			Object.assign(state, inputs);
		}
	},
	getters: {

	}
});
export default store