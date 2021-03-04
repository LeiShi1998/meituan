<template>
    <div class="cart-container">
        <div class="cart-box" @click="isShow = !isShow">
            <div class="cart-icon" :class="{'active':total}">
                <span class="iconfont icon-gouwuche"></span>
                <span class="num" v-show="total">{{total}}</span>
            </div>
            <div class="cart-price active">
                <div class="price">￥{{totalPrice}}</div>
                <div class="deliver">配送费￥{{seller.fee}}</div>
            </div>
            <div class="cart-buy" :class="{'active':totalPrice > seller.price}">{{buyDesc}}</div>

        </div>
        <div class="cart-list-box" v-show="isShow && total">
            <div class="title" @click="clear()"><span>清空购物车</span></div>
            <ul class="list-box">
                <li class="list" v-for="prod in selectList" :key="prod.id">
                    <span class="name">{{prod.name}}</span>
                    <span class="price">￥{{prod.price}}</span>
                    <addCart :type="prod.type" :index="prod.index"></addCart>
                </li>
            </ul>
            
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';
import addCart from './../../components/add-cart/index';
    export default {
        data(){
            return{
                isShow: false,
            }
        },
        components:{
            addCart,
        },
        props:["seller"],
        computed:{
            ...mapGetters('product',["totalPrice","total","selectList"]),
            buyDesc(){
                if(this.totalPrice == 0){
                    return `￥${this.seller.price}元起送`;
                }else if(this.totalPrice < this.seller.price){
                    return `￥${this.seller.price-this.totalPrice}元起送`;
                }else{
                    return "去结算";
                }
            }
        },
        methods:{
            
            clear(){
                this.$store.commit('product/clearList');
            }

        }
    }
</script>

<style lang="scss" scoped>
    .cart-container{
        position: fixed;
        left: 0;
        bottom: 0;
        height: 50px;
        width:100%;
        background-color: #3b3b3c;
        .cart-box{
            display: flex;
            .cart-icon{
                width: 50px;
                height: 50px;
                position: absolute;
                left: 10px;
                top:-10px;
                background-color: #656565;
                border-radius: 50%;
                line-height: 50px;
                text-align: center;
                .num{
                    position: absolute;
                    right:0;
                    top: 0;
                    width: 30px;
                    height: 30px;
                    line-height: 30px;
                    text-align: center;
                    background-color: #fb4e44;
                    color: #fff;
                    border-radius: 50%;
                    transform: scale(0.5) translate(50%,-50%);
                }
                .icon-gouwuche{
                    font-size: 28px;
                    color: #c4c4c4;
                }
                &.active{
                    background-color: #f8c74e;
                    .icon-gouwuche{
                        color: #333;
                    }
                }
            }
            .cart-price{
                margin-left:70px;
                flex: 1;
                color: #999;
                .price{
                    display: none;
                }
                .deliver{
                    line-height: 50px;
                    font-size: 14px;
                }
                &.active{
                    .price{
                        display: block;
                        font-size:24px;
                        color: #fff;
                        line-height: 33px;
                    }
                    .deliver{
                        line-height: 16px;
                        font-size: 11px;
                    }
                }
            }
            .cart-buy{
                width:108px;
                line-height: 50px;
                color: #999;
                font-size: 14px;
                font-weight: 800;
                text-align: center;
                &.active{
                    background-color: #f8c74e;
                    font-size: 18px;
                    font-weight: 400;
                    color: #333;
                }
            }
        }
        .ball{
            position: fixed;
            left:30px;
            bottom: 23px;
            transition: all 0.4s cubic-bezier(0.48, -0.28, 0.73, 0.42);
            .inner{
                height: 16px;
                width: 16px;
                background-color: #00a0dc;
                border-radius: 50%;
                transition: all 0.4s linear;
            }
        }
        .cart-list-box{
            position: absolute;
            z-index:-1;
            left: 0;
            bottom:50px;
            background-color: #fff;
            width: 100%;
            border-top:1px solid #e4e4e4;
            .title{
                height: 30px;
                line-height: 30px;
                padding:0 10px;
                text-align: right;
                font-size:12px;
                background-color: #f4f4f4;
                color: #2c3e50;
            }
            .list-box{
                padding:0 10px;
                .list{
                    padding: 14px 0;
                    border-bottom: 1px solid #e4e4e4;
                    display: flex;
                    .name{
                        flex:1;
                        min-width: 0;
                        overflow: hidden;
                        white-space: nowrap;
                        text-overflow: ellipsis;
                    }
                    .price{
                        color: #fb4e44;
                        padding: 0 25px;
                    }
                }
            }

            
        }
    }
</style>