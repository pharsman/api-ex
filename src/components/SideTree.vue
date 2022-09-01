<template>
  <div>
    <div @click="nodeClicked" :style="{ 'margin-left': `${depth * 20}px` }" class="node">
      <span class="type"> {{ expanded ? '&#9660;' : '&#9658' }}</span>
      <span class="type def">&#9671;</span>
      <!-- <span >{{ node.name }}</span> -->
    </div>
    <div v-if="expanded">
      <SideTree v-for="child in node.children" :key="child.name" :node="child" :depth="depth + 1" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const props = defineProps({
  node: {
    type: Object,
    required: true
  },
  depth: {
    type: Number,
    default: 0
  }
})

const expanded = ref(false)

const nodeClicked = () => {
  expanded.value = !expanded.value
}

</script>

<style scoped lang="scss">
.node {
  text-align: left;
  font-size: 18px;

  .type {
    cursor: pointer;
    margin-right: 10px;
  }

  .def {
    cursor: default;
  }
}
</style>