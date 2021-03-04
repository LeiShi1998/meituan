<template>
    <div class="list-box">
        <ul class="content">
            <li class="list">
                <div class="img-box">
                    <img src="@/assets/naixue.jpg" alt="">
                </div>
                <div class="info-box">
                    <div class="basic">
                        <span class="name">用户名</span>
                        <span class="date">发表时间</span>
                    </div>
                    <div class="time">具体时间</div>
                    <div class="desc">具体评论</div>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.content{
    padding: 0 0.3rem;
    .list{
        display: flex;
        padding:0.3rem 0 0.2rem 0;
        .img-box{
            width: 0.8rem;
            flex: 0 0 0.8rem;
            margin-right: 0.2rem;
            img{
                width:100%;
                border-radius: 50%;
            }
        }
        .info-box{
            flex:1;
            min-width: 0;
            .basic{
                color: #2f2f2f;
                font-size: 0.32rem;
                .date{
                    color: #898989;
                    font-size:0.24rem;
                    float: right;
                }
            }
            .time{
                color: #666;
                font-size:0.24rem;
                margin-top: 0.14rem;
            }
            .desc{
                line-height: 0.4rem;
                color: #2f2f2f;
                padding:0.28rem 0 0.16rem 0;
            }
        }
    }
}
</style>