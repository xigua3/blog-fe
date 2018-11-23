<template>
    <div class="HomeCard">
        <el-card>
            <img :src="img" alt="wow">
            <div class="cardContent">
                <h2>{{title}}</h2>
                <p>{{content}}</p>
               <router-link :to="{path:'/HomeCardDesc',query:{title:title,content:content,img:img}}">More >></router-link>
            </div>
        </el-card>
    </div>
</template>
<script>
export default {
    name:'HomeCard',
    props:{
        title:{
            type:String,
            default:'Title'
        },
        img:{
            type:String,
            default:require('@/assets/img/img1.png')
        },
        content:{
            type:String,
            default:'你好漂亮啊'
        }
    }
}
</script>
<style scoped>

</style>
