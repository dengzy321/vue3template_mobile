/*
 * @Author: dengzy 
 * @Date: 2019-10-17 11:35:28
 * @last modify Author: dengzy
 * @last Date: 2020-05-21 17:15:28
   请求借口封装    
 */
import axios from 'axios';
import { Toast } from 'vant';
import router from '@/router'
import qs from 'qs'

const instance=axios.create({
  //超时时间
  timeout:3000,
  //响应前处理
  transformResponse:(responseData)=>{
    return responseData;
  }
})

// 请求拦截
instance.interceptors.request.use(function(config){
  if(config.method == 'post'){
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'
    config.data = qs.stringify(config.data)
  }
  return config
})

//响应拦截
instance.interceptors.response.use(function (response) {
  const {status,data,statusText,headers}=response;
  if(status===200){
    // 跳转登录
    if(typeof data == 'string'? JSON.parse(data).Status == 'login' : data.Status == 'login'){
      Toast(typeof data == 'string'? JSON.parse(data).ErrorMessage : data.ErrorMessage)
      setTimeout(() =>{
        router.push({
          path: ''
        })
      }, 2000)
    }
    return headers['content-type']==='application/json'? JSON.parse(data):data;  
  }else{
    return response;  
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default {
  get:(url,params,option)=>{
    return instance.get(url,Object.assign({},option,{params}));
  },
  post:(url,params,option)=>{
    return instance.post(url,params,option); 
  },
  delete:(url,params,option)=>{
    return instance.delete(url,Object.assign({},option,{params}));
  }
}