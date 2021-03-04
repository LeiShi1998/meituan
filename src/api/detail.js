import request from '@/utils/request.js';

export function getStoreById(data) { 
    return request({
        url:'/get_store_id',
        data
    })
 }
 
 export function getProdById(data) { 
    return request({
        url:'/get_nav',
        data
    })
 }