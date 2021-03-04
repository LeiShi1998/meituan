import {getProdById} from './../api/detail';
import Vue from 'vue'

const product = {
    namespaced:true,
    state: {
        prodList:[]
    },
    getters:{
        selectList(state){
            let result = [];
            state.prodList.forEach(obj => {
                obj.content.forEach(prod =>{
                    if(prod.count){
                        result.push(prod);
                    }
                })
            });
            return result;
        },
        totalPrice(state,getter){
            return getter.selectList.reduce((price,prod)=>{
                return price + prod.count*prod.price;
            },0)

        },
        total(state,getter){
            return getter.selectList.reduce((total,prod)=>{
                return total + prod.count;
            },0)

        }
    },
    mutations: {
        saveProdList(state,arr){
            state.prodList = [...arr];
        },
        add(state,{type,index}){
            let prod = state.prodList[type].content[index];
            if(prod.count){
                Vue.set(prod,'count',prod.count+1);
            }else{
                Vue.set(prod,'count',1);
            }
        },
        reduce(state,{type,index}){
            let prod = state.prodList[type].content[index];
            if(prod.count){
                Vue.set(prod,'count',prod.count-1);
            }
        },
        clearList(state){
            state.prodList.forEach(item=>{
                item.content.forEach(prod=>{
                    if(prod.count){
                        prod.count = 0;
                    }
                })
            })
        }
    },
    actions: {
        getProdList({commit},id){
            return new Promise(resolve=>{
                getProdById({id}).then(res=>{
                    let list = res.data.goods;
                    list.forEach((item,type)=>{
                        item.content.forEach((prod,index)=>{
                            prod.type = type;
                            prod.index = index;
                        })
                    })
                    commit('saveProdList',list);
                    resolve();
                })
            })
        }
    },
  };

  export default product;