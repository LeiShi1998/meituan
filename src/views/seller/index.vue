<template>
    <div class="seller-box">
        <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-weizhi"></span>
                <span>{{seller.address}}</span>
            </li>
        </ul>
        <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-icon212"></span>
                <span>配送服务：{{seller.server}}</span>
            </li>
             <li class="list">
                <span class="iconfont icon-shijian"></span>
                <span>配送时间：{{seller.delivery_time}}</span>
            </li>
        </ul>
         <ul class="list-box">
            <li class="list">
                <span class="iconfont icon-jian"></span>
                <span>{{seller.full}}</span>
            </li>
             <li class="list">
                <span class="iconfont icon-shou"></span>
                <span class="sale">{{seller.sales}}</span>
            </li>
            <li class="list">
                <span class="iconfont icon-xin"></span>
                <span>{{seller.sales}}</span>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        props:["seller"],
        
    }
</script>

<style lang="scss" scoped>
    .seller-box{
        padding:0 0.3rem;
        .list-box{
            border-bottom: 1px solid #ebedf0;
            padding-top: 0.36rem;
            .list{
                display: flex;
                color: #333;
                padding-bottom: 0.36rem;
                .iconfont{
                    color: #c0c0c0;
                    margin-right: 0.28rem;
                }
                .icon-jian,.icon-shou,.icon-xin{
                    color:#fb4d41;
                }
                .sale{
                    display: inline-block;
                    text-align: left;
                }
            }
        }
    }
</style>