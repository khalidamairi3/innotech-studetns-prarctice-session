<template>
    <div v-if="selection.name != undefined">

        <h1> computer selection</h1>
        <img :src="selection.image" alt="user selection image">

    </div>
</template>

<script>
    export default {
        name : "computer-selection",
        computed: {
        selection() {
            return this.$store.state.computerSelection; 
        }
    }
    }
</script>

<style scoped>

</style>