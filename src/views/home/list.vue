<template>
    <div>
        <van-list v-model="loading" :finished="finished" finished-text="没有更多了" @load="getData">
            <ul class="list-container">
                <li class="shop-box" v-for="item in list" :key="item.id" @click="goDetail(item.id)">
                    <div class="img-box">
                        <img :src="item.img">
                    </div>
                    <div class="info-box">
                        <div class="title">{{item.name}}</div>
                        <div class="rate-box">
                            <div>
                                <star :score="item.score"></star>
                                <span class="rate">{{item.score}}分</span>
                                <span>月销{{item.num}}</span>
                            </div>
                            <div>
                                <span>{{item.minute}}分钟</span>
                                <span class="left-line">{{item.distance}}</span>
                            </div>
                            
                        </div>
                        <div class="distribution-box">
                            <span>起送{{item.price}}</span>
                            <span class="left-line">配送{{item.fee}}</span>
                            <span class="left-line">人均{{item.per_capita}}</span>
                        </div>
                    </div>
                </li>
            </ul>
        </van-list>
    </div>
</template>

<script>
import star from './../../components/star/index';
import {getStore} from '@/api/home.js'
import Vue from 'vue';
import { List } from 'vant';
Vue.use(List);

    export default {
        data(){
            return {
                current:0,
                size:10,
                list:[],
                loading: false,
                finished: false,
                total: 0,
            }
        },
        components:{
            star
        },
        methods:{
            getData(){
                getStore({
                    current:this.current,
                    size:this.size
                }).then(res => {
                    this.list = this.list.concat(res.data.list);
                    this.loading = false;
                    this.current ++;
                    this.total = res.data.total;
                    if(this.list.length >= this.total){
                        this.finished = true;
                    }
                    
                })
            },
            goDetail(id){
                this.$router.push({path:'/detail', query:{id}})
            }
        }
    }
</script>

<style lang="scss" scoped>
    .list-container{
        padding: 0 0.3rem;
        .shop-box{
            margin: 0.5rem 0 0.2rem 0;
            display: flex;
            .img-box{
                
                width:1.52rem;
                height: 1.14rem;
                margin-right: 0.2rem;
                img{
                    width:100%;
                    height: 100%;
                }
            }
            .info-box{
                flex:1;
                width:0;
                .title{
                    font-size:0.32rem;
                    font-weight: 800;
                    color: #333;
                    line-height: 1.4;
                    font-family: mtsi-font;
                }
                .rate-box,.distribution-box{
                    display: flex;
                    color: #333;
                    font-size: 0.22rem;
                    line-height: 1.4;
                    font-family: mtsi-font;
                    .left-line::before{
                        content: "";
                        display: inline-block;
                        width: 0.02rem;
                        height: 0.14rem;
                        background-color: #666;
                        margin: 0 4px;
                    }
                    
                }
                .rate-box{
                    justify-content: space-between;
                    .rate{
                        margin-right:0.2rem;
                    }
                }
            }

        }
    }
</style>