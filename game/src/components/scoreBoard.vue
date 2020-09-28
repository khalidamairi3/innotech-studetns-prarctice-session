<template>
    <div>
        <h2> {{ " wins : " + wins }} </h2>
        <h2> {{ " draws : " + ties }} </h2>
        <h2> {{ " loses : " + loses }}</h2>

    </div>
</template>

<script>
    export default {
        name:"score-board",
        computed: {
            wins(){
                return this.$store.state.wins;
            },
            loses(){
                return this.$store.state.loses;
            },
            ties(){
                return this.$store.state.draws;
            }


        },
    }
</script>

<style scoped>

</style>