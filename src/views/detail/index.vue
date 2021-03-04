<template>
    <div class="scrollBox">
        <div>
            <sellerHeader :seller="seller"></sellerHeader>
            <van-tabs v-model="active" sticky animated color="#ffda41">
                <van-tab title="点餐">
                    <order></order>
                </van-tab>
                <van-tab title="评价">
                    <comment></comment>
                </van-tab>
                <van-tab title="商家">
                    <seller :seller="seller"></seller>
                </van-tab>
            </van-tabs>
            
        </div>
        <cart v-if="active == 0" :seller="seller"></cart>
    </div>
</template>

<script>
import {getStoreById} from './../../api/detail.js';
import sellerHeader from './seller-header';
import order from './order';
import BScroll from 'better-scroll';
import cart from './cart';
import seller from './../seller/index'
import comment from './../comment/index'
    export default {
        data(){
            return{
                seller:[],
                active:0,
                scroll:null
            };
        },
        components:{
            sellerHeader,
            order,
            cart,
            seller,
            comment
        },
        methods:{
            getStoreMsg(){
                getStoreById({id:this.$route.query.id}).then(res=>{
                    this.seller = res.data;
                })
            },
        },
        mounted(){
            this.scroll = new BScroll('.scrollBox',{
                bounce:false,
                click:true
            });
        },
        created(){
                this.getStoreMsg();
            }
        
    }
</script>

<style lang="scss" scoped>
    .scrollBox{
        height:100vh;
    }
</style>