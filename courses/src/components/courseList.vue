<template>
<div id="course_list">
    <h1> this is the course list </h1>
   <course-item v-for = " course in courses " :key=" course.price " :course= course :iswishlist= "false" />


</div>
    
</template>

<script>
import courseItem from './course.vue'
export default {
    name:"course-list",
    components:{
        courseItem
    },

    data:function(){
        return {
            courses : this.$store.state.courses
        }
    }
}
</script>

<style scoped>

#course_list{
    border: 1px solid black;
}

</style>