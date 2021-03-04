<template>
    <div>
        <!-- header -->
        <van-sticky :offset-top="0">
            <div class="header">
                <input type="text" class="search" placeholder="请输入商家或者商品名称">
            </div>
        </van-sticky>
        <category></category>
        <div class=" title">
            附近商家
        </div>
        <list></list>

        

    </div>
</template>

<script>
    import category from './category'
    import list from './list'
    export default {
        components:{
            category,
            list
        }
    }
</script>

<style lang="scss" scoped>
    .header{
        background-color: #1c1b20;
        padding: 0.2rem;
        .search{
            width: 100%;
            height: 0.6rem;
            line-height: 0.6rem;
            border-radius: 0.3rem;
            border: none;
            outline: none;
            padding: 0 0.3rem;
            box-sizing: border-box;
            font-size: 0.2rem;

        }
        
    }
    .title{
        font-size: 0.34rem;
        font-weight: 800;
        text-align: center;
        height: 0.46rem;
        line-height: 0.46rem;
        margin: 0.3rem 0 0.1rem;
    }
    .title::after,.title::before{
        content: "";
        height: 1px;
        width: 0.6rem;
        display: inline-block;
        vertical-align: middle;
        background-color: #666;
    }

</style>