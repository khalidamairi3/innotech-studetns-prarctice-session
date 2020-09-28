<template>
    <div>
        <h4> {{ joke }}</h4>

    </div>
</template>

<script>
    export default {
        name : "loud-joke",
        computed: {
            joke() {
                return this.$store.getters.loud; 
            }
        },
    }
</script>

<style scoped>

</style>