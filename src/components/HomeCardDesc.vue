<template>
    <div class="homecarddesc">
        <h1>{{title}}</h1>
        <img :src="img">
        <p>{{content}}</p>
    </div>
</template>

<script>
export default {
    data(){
        return{
           title:'',
           img:'',
           content:''
        }
    },
    created(){
        this.title=this.$route.query.title,
        this.img=this.$route.query.img,
        this.content=this.$route.query.content
    }
}
</script>
<style scoped>
.homecarddesc{
    margin-left: 10px;
}
</style>


