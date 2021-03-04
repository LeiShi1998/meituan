<template>
    <div class="score-box">
        <div class="seller-score">
            <div class="num">5.0</div>
            <div class="desc">商家评分</div>
        </div>
        <div class="pack-score">
            <div class="item">
                <span>口味</span>
                <star></star>
                <span>4.9</span>
            </div>
            <div class="item">
                <span>包装</span>
                <star></star>
                <span>4.8</span>
            </div>
        </div>
        <div class="deliver-score">
            <div class="num">4.8</div>
            <div class="desc">配送评分</div>
        </div>
        
    </div>
</template>

<script>
import star from './../../components/star/index';
    export default {
         components:{
            star
        },
    }
</script>

<style lang="scss" scoped>
.score-box{
    display: flex;
    padding: 0.3rem;
    border-bottom: 10px solid #eee;
    .seller-score,.deliver-score{
        width:1.86rem;
        flex:0 0 1.86rem;
        text-align: center;
        .num{
            font-size: 0.54rem;
            height: 0.6rem;
            line-height: 0.6rem;
            font-weight: 600;
        }
    }
    .pack-score{
        flex:1;
        min-width: 0;
        font-size: 0.26rem;
        color: #666;
        .item{
            margin: 0.06rem 0 0.2rem;
        }
    }
     .seller-score{
        .num{
            color:#ffb000;
        }
    }
    .deliver-score{
        border-left: 1px solid #ccc;
        .num{
            color:#999;
        }
    }

}

</style>