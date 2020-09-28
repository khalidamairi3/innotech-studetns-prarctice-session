<template>
    <div>

        <h4> {{ joke }}</h4>

    </div>
</template>

<script>
    export default {
        name:"snake-joke",
         computed: {
            joke() {
                return this.$store.getters.snake; 
            }
        },
    }
</script>

<style scoped>

</style>