<template>
  <div id="app">
    <!-- <h1 v-for="item in posts">{{ item }}</h1> -->
    <comp v-for="item in posts" :key="item.id" :id="item.id" :userId="item.id" :title="item.title" :body="item.body" />

  </div>

</template>/

<script setup>
import comp from '@/components/comp.vue'
import { computed } from 'vue';
// import axios from 'axios'
import { useStore } from 'vuex';
// import SideTree from './components/SideTree.vue';


const store = useStore()


store.dispatch('loadPosts')



const posts = computed(() => {
  return store.getters.setPosts
})


</script>

<style lang="scss">
body {
  background-color: #333;
  color: white;
}

#app {
  text-align: center;
  margin-top: 60px;
}
</style>

