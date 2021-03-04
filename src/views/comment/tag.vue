<template>
    <div class="tag-box" >
        <span class="tag-item active">1111111</span>
        <span class="tag-item">1111111</span>
        <span class="tag-item">1111111</span>
        <span class="tag-item">1111111</span>
        <span class="tag-item">1111111</span>
        <span class="tag-item">1111111</span>
        
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
@import '@/assets/css/mixin.scss';
    .tag-box{
        padding: 0.3rem 0.28rem 0.1rem;
        border-bottom: 4px solid #f4f4f4;
        .tag-item{
            padding: 0 0.24rem;
            display: inline-block;
            height: 0.52rem;
            line-height: 0.52rem;
            text-align: center;
            font-size: 13px;
            color: #666;
            margin: 0 0.2rem 0.2rem 0;
            @include border-fix(#bbb,0.52rem);
            &.active{
                @include border-fix(#fff000,0.52rem);
                background-color: #fffbf1;
            }
        }
    }

</style>