<template>
    <div>
        <ul class="cate-box">
            <li class="cate-list" v-for="item in cateList" :key="item.id">
                <img class="cate-img" :src="item.img">
                <p class="cate-title">{{ item.name }}</p>
            </li>
        </ul>

    </div>
</template>

<script>
import {getCategory} from '@/api/home.js'
    export default {
        data(){
            return{
                cateList:[]
            }
        },
        created(){
            getCategory().then(res => {
                this.cateList = res.data;
            })
        }
        
    }
</script>

<style lang="scss" scoped>
.cate-box{
    display: flex;
    flex-wrap: wrap;
    .cate-list{
        width:20%;
        padding-top:0.3rem;
        text-align: center;
        font-size: 0.22rem;
        .cate-img{
            width: 0.8rem;
            height: 0.8rem;
            margin-bottom: 0.2rem;
        }
    }
}

</style>