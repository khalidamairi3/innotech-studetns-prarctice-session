<template>
<div id="course">
    <h2> {{ course.name }}</h2>
    <h3> {{course.price }}</h3>

    <button @click="addToWishlist"  v-if="!iswishlist"> add to wishList </button>
    <button @click="removefromwishlist" v-else> remove from wishlist </button>

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
      addToWishlist:function(){
          this.$store.commit('towishlist', this.course);
      },
      removefromwishlist : function(){
          this.$store.commit('fromwishlist', this.course);
      }  
    }

    
    
}
</script>

<style scoped>

</style>