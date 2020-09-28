<template>
    <div v-if="selection.name != undefined">
        <h1> user selection</h1>
        <img :src="selection.image" alt="user selection image">

    </div>
</template>

<script>
    export default {
    name: "user-selection",
    computed: {
        selection() {
            return this.$store.state.userSelection; 
        }
    }
    }
</script>

<style scoped>

</style>