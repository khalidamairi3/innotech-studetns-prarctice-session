<template>
    <div>
        <button @click="newJoke"> generate joke </button>
    </div>
</template>

<script>
    export default {
        name : "joke-button",
        methods: {
            newJoke() {

                this.$store.dispatch("newJoke")
                
            }
        },
        
    }
</script>

<style scoped>

</style>