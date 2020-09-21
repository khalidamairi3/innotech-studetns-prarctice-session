<template>
    <div >
        <h1> this is the body</h1>
        <div id="layout">
            <course-list />
            <wish-list />   

        </div>
        


    </div>
    
</template>

<script>
import wishList from './wishList.vue';
import courseList from './courseList.vue'
export default {
    name : "page-body",
    components:{
        wishList,
        courseList

    }
    
}
</script>

<style scoped>
#layout{
    display: grid;
    grid-template-columns: 1fr 1fr;
}

</style>