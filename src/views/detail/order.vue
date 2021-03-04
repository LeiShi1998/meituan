<template>
    <div>
        <div class="order-box">
            <div class="menu-box" ref="menuBox">
                <ul>
                    <li v-for="(item,index) in prodList" :key="index" class="menu-list" 
                    :class="getActive(index)" 
                    @click="changMenu(index)">{{item.name}}</li>
                </ul>
            </div>
            <div class="prod-box" ref="probox">
                <ul>
                    <li class="cate-list" v-for="(item,typeIndex) in prodList" :key="typeIndex">
                        <div  class="cate-title">{{item.name}}</div>
                        <ul >
                            <li class="prod-list" v-for="(prod,index) in item.content" :key="prod.id">
                                <div class="prod-img-box">
                                    <img :src="prod.img">
                                </div>
                                <div class="prod-info">
                                    <div class="name">{{prod.name}}</div>
                                    <div class="sale">
                                        <span class="num">月销{{prod.num}}</span>
                                        <span>赞{{prod.up}}</span>
                                        </div>
                                    <div class="price">￥{{prod.price}}</div>
                                </div>
                                <div class="add-cart-container">
                                    <addCart :type="typeIndex" :index="index"></addCart>
                                </div>
                            </li>
                        </ul>
                    </li>
                    
                </ul>
            </div>

        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import BScroll from 'better-scroll'
    import addCart from './../../components/add-cart/index'
    export default {
        components:{
            addCart,
        },
        data(){
            return{
                menuScroll:null,
                prodScroll:null,
                currentIndex:0,
                posY:[],
                menuList:[],
                scrollY:0,
            }
        },
        methods:{
            initScroll(){
                this.menuScroll = new BScroll('.menu-box',{
                    bounce:false,
                    click:true
                });
                this.prodScroll = new BScroll('.prod-box',{
                    bounce:false,
                    //click:true,
                    probeType:3
                });
                this.prodScroll.on("scroll",e=>{
                    this.scrollY = Math.abs(Math.round(e.y));
                })
                this.getPosY();
                this.menuList = this.$refs.menuBox.getElementsByClassName('menu-list')
            },
            changMenu(index){
                let prodList = this.$refs.probox.getElementsByClassName('cate-list');
                let el =prodList[index];
                this.prodScroll.scrollToElement(el,300);
                this.currentIndex = index;
            },
            getActive(index){
                if (index == this.currentIndex){
                    return "active";
                }else{
                    return "";
                }
            },
            getPosY(){
                let prodList = this.$refs.probox.getElementsByClassName('cate-list');
                let y = 0;
                for(let i=0; i < prodList.length;i++){
                    if (i == 0){
                        this.posY.push(y);
                    }else{
                        let preEle = prodList[i-1];
                        y += preEle.offsetHeight;
                        this.posY.push(y);
                    }
                }
            }
        },
        computed:{
            ...mapState('product',['prodList'])
        },
        created(){
            this.$store.dispatch('product/getProdList',this.$route.query.id).then(()=>{
                this.$nextTick(()=>{
                    this.initScroll();
                })
            })
        },

        watch:{
            scrollY(val){
                for(let i=0;i<this.posY.length;i++){
                    let pos1 = this.posY[i];
                    let pos2 = this.posY[i+1];
                    if(pos1 <= val && pos2 > val){
                        let el = this.menuList[i];
                        this.menuScroll.scrollToElement(el,300,0,-100);
                        this.currentIndex = i;
                        break;
                    }
                }
            }
        }
    };
</script>

<style lang="scss" scoped>
    .order-box{
        display: flex;
        height: calc(100vh - 44px);
        overflow: hidden;
        .menu-box{
            width:1.6rem;
            flex:0 0 1.6rem;
            background-color: #f5f5f5;
            height: calc(100vh - 94px);
            overflow: hidden;
            .menu-list{
                color: #2e3c50;
                padding:0.18rem 0.24rem 0.44rem;
                font-size: 0.26rem;
                line-height: 0.36rem;
                &.active{
                    color: #f00;
                }
            }
        }
        .prod-box{
            flex:1;
            min-width:0;
            height: calc(100vh - 94px);
            overflow: hidden;
            .cate-list{
                padding: 0 0.2rem;
                .cate-title{
                    height: 0.72rem;
                    line-height: 0.72rem;
                }
                .prod-list{
                    display: flex;
                    margin-bottom: 0.4rem;
                    position: relative;
                    .prod-img-box{
                        width: 1.5rem;
                        flex:0 0 1.5rem;
                        margin-right: 0.15rem;
                        img{
                            width: 100%;
                        }
                    }
                    .prod-info{
                        flex:1;
                        width:0;
                        .name{
                            font-size:0.32rem;
                            color:#333;
                            font-weight: 800;
                            line-height: 0.45rem;
                            overflow: hidden;
                            white-space: nowrap;
                            text-overflow: ellipsis;
                            margin-bottom: 0.04rem;
                        }
                        .sale{
                            color:#666;
                            font-size:0.22rem;
                            margin-bottom: 0.06rem;
                            .num{
                                margin-right: 0.2rem;
                            }
                        }
                        .price{
                            color:#fb4e44;
                            font-size: 0.36rem;
                        }
                    }
                    .add-cart-container{
                        position: absolute;
                        right: 0;
                        bottom: 0;
                    }
                }

            }
        }
    }

</style>