<template>
    <div class="container">
        <div class="header" @click="$router.push('/')">
            <span class="iconfont icon-xiangzuo"></span>
        </div>
        <div class="seller-box">
            <div class="img-box">
                <img :src="seller.img">
            </div>
            <div class="info-box"> 
                <div class="time">{{seller.delivery_time}}分钟 {{seller.distance}}</div>
                <div class="notice" >{{seller.notice}}</div>
                <div class="sale">{{seller.full}}</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props:["seller"]
        
    }
</script>

<style lang="scss" scoped>
.container{
    background-color: #2e2f3b;
    .header{
        height: 0.8rem;
        line-height: 0.8rem;
        color: #fff;
        padding-left: 0.2rem;
    }
    .seller-box{
        display: flex;
        padding: 0.1rem 0.2rem 0.2rem;
        .img-box{
            width:1.7rem;
            flex: 0 0 1.7rem;
            padding-right: 0.2rem;
            img{
                width:100%;
            }
        }
    }
    .info-box{
            color: #fff;
            font-size: 0.24rem;
            flex: 1;
            width:0;
            .time{
                height: 0.32rem;
                line-height: 0.32rem;
                margin-bottom: 0.1rem;
            }
            .notice{
                height: 0.32rem;
                line-height: 0.32rem;
                margin-bottom: 0.2rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
            .sale{
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
}

</style>