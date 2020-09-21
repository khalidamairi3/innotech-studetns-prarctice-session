<template>
<div id="wishlist">
 <h1> this is the wish list </h1>
   <course-item v-for = " course in courses " :key=" course.price " :course= course :iswishlist= "true"  />

</div>
    
</template>

<script>
import courseItem from './course.vue' 
export default {
    name:"wish-list",
    components:{
        courseItem
    },
    data:function(){
        return {
            courses : this.$store.state.wishCourses
        }
    }
}
</script>

<style scoped>

#wishlist{
    border: 1px solid black;
}

</style>