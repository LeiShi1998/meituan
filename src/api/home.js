import request from '@/utils/request.js';

export function getCategory(data) { 
    return request({
        url:'/get_type',
        data
    })
 }

 export function getStore(data) { 
    return request({
        url:'/get_store',
        data
    })
 }