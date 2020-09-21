<template>
<div id="course">
    <h2> {{ course.name }}</h2>
    <h3> {{course.price }}</h3>

    <button @click="addToWishlist(course)"  v-if="!iswishlist"> add to wishList </button>
    <button @click="removefromwishlist(course)" v-else> remove from wishlist </button>

</div>
    
</template>

<script>
export default {
    name:"course-item",
    props:{
        course : {
            type : Object,
            required : true
        },
        iswishlist : { 
            type : Boolean,
            required:true

        }
    },
    methods:{
      addToWishlist:function(course){
          this.$store.commit('towishlist', course);
      },
      removefromwishlist : function(course){
          this.$store.commit('fromwishlist', course);
      }  
    }

    
    
}
</script>

<style scoped>

</style>