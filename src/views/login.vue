<template>
  <div id="login">
    <template style="text-align:center">
        <div text-align="center">
            <v-text-field class="vInput" label="ID" filled v-model="userId" style="width:200px"></v-text-field>
            <v-text-field class="vInput" label="PW" filled v-model="userPw" style="width:200px"></v-text-field>
            <v-btn v-on:click="login">로그인</v-btn>
        </div>
    </template>
  </div>

  
</template>

<script>
import axios from "axios"
import router from "../router/index"

export default {
    el:'#login',
    data: function() {
        return{
            userId:'',
            userPw:''
        }
    },
    methods: {
        login: function (){ 
            // this.userPw = parseInt(this.userPw)
            axios({
                url: 'http://localhost:8080/login?userId='+this.userId+'&password='+this.userPw,
                method: 'get',
            }).then((result)=>{
                if(result.data == 1){
                    router.push("/musicPlay")
                }else[
                    alert('로그인 실패')
                ]
            })
        }
    }
}
</script>

<style scoped>
    #login{
        text-align: center;
    }
    .vInput input{
        text-align: center;
    }
</style>