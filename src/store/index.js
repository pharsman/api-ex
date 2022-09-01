import { createStore } from 'vuex'
import axios from 'axios'

const store = createStore({
    state: {
        userId: '',
        id: '',
        title: '',
        body: ''
    },
    mutations: {
        SET_POSTS(state, posts) {
            state.posts = posts
        }
    },
    actions: {
        async loadPosts({ commit }) {
            try {
                const resp = await axios.get('https://jsonplaceholder.typicode.com/posts')
                console.log(resp.data)
                let posts = resp.data
                this.userId = resp.data.userId
                this.id = resp.data.id
                this.title = resp.data.title
                this.body = resp.data.body
                commit('SET_POSTS', posts)

            } catch (error) {
                console.log(error)
            }
        }
    },
    getters: {
        setPosts(state) {
            return state.posts
        }
    }
})

export default store