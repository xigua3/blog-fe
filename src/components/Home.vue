<template>
<div class="Home">
    <header>
     <strong>欢迎您：{{getUsername}}</strong>
</header>
<div class="Card-row">
<el-row :gutter="20">
    <el-col :span="10" v-for="item in dataImgList" :key="item.id">
        <homecard :title="item.title" :img="item.img" :content="item.content" ></homecard>
    </el-col>
</el-row>
</div>
</div>
</template>
<script>
import store from '@/store/index'
import homecard from '@/components/HomeCard'
export default {
    computed:{
        getUsername(){
            return store.state.username
        }
    },
    data(){
        return{
        dataImgList:[
            {
                id:'001',
                title:'Title1',
                img:require('@/assets/img/img1.png'),
                content:'我觉得还行',
                dataUrl:'@/components/HomeCard'
            },
            {
                id:'002',
                title:'Title2',
                img:require('@/assets/img/img1.png'),
                content:'我觉得不行',
                dataUrl:'/HomeCard'
            }
        ]
        }
        },
        components:{
            homecard
        }
}
</script>
<style scoped>
.Home{
height: 100%;
padding: 0;
margin: 0;
}
header>strong{
    padding-left: 20px;
}
</style>
