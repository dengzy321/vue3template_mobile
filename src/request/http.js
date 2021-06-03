import { createApp } from 'Vue'
import axios from './axios'
import HTTP_URL from './url'
const app = createApp()

function mapUrlObjToFuncObj(urlObj){
  const http = {};
  Object.keys(urlObj).forEach((key)=>{
    const item = urlObj[key]; 
    http[key]=function(params){
      return axios[item.method](item.url,params,item.option);
    }
  });
  return http;
}

function mapUrlObjToStrObj(urlObj){
  const Url = {};
  Object.keys(urlObj).forEach((key)=>{
    const item = urlObj[key];
    Url[key]=item.url;
  });
  return Url;
}

const install = () => {
  app.config.globalProperties.http = mapUrlObjToFuncObj(HTTP_URL);
  app.config.globalProperties.URL = mapUrlObjToStrObj(HTTP_URL);
}
export default install
   