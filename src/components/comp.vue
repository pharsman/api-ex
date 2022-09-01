<template>
    <div>
        <h2>{{ userId }}</h2>
        <h2>{{ id }}</h2>
        <h2>{{ title }}</h2>
        <h2>{{ body }}</h2>
        <br>
    </div>
</template>

<script setup>

const props = defineProps({
    userId: Number,
    id: Number,
    title: String,
    body: String,
})

</script>

<style lang="scss" scoped>
h2,
h3 {
    color: rgb(255, 0, 0);
}

br{
    background-color: #fff;
}
</style>