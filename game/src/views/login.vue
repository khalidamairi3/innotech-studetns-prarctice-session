<template>
    <div>
        <h1> Login</h1>
        <form action="javascript:void(0)">

            <input type="text" v-model="username">
            <br>
            <input type="password" v-model="password">
            <br>
            <button @click="login"> Login</button>
        </form>
        <h2 v-if="error"> invalid information</h2>
    </div>
</template>

<script>
import axios from "axios";;
import cookies from "vue-cookies";
    export default {
        name : "login-page",
        data : function (){
            return {
                username:"",
                password:"",
                error : false,

            }
        },
        methods: {
            login: function(){

                axios.request({
                    url: "https://reqres.in/api/login",
                    method : "POST",
                    data:{
                        username : this.username,
                        password : this.password
                    },
                    headers:{
                        "Content-Type":"application/json"
                    }

                }).then((response)=>{
                    cookies.set("token",response.data.token);
                    this.$router.push("/game");

                }).catch((err)=>{
                    console.log(err);
                    this.error =true

                })

            }
        },
        
    }
</script>

<style scoped>

</style>