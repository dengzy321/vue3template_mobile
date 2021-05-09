/**
 * 微信js-sdk
 * 官方文档：https://developers.weixin.qq.com/doc/offiaccount/OA_Web_Apps/JS-SDK.html
 */
import wx from 'weixin-js-sdk'
import axios from 'axios'
import { createApp } from 'Vue'
const app = createApp()

/**
 * [wxRegister 微信Api初始化]
 * @param {[Function]} callback [ready回调函数]
 */
const wxConfig = callback => {
    const url = '/Api/VshopProcessNew.ashx?action=GetPersonalInfo' //请求微信配置的api地址
    axios.get(window.location.href + url, { params: '' }).then(res => {
        wx.config({
            debug: false, // 开启调试模式
            appId: res.appId, // 必填，公众号的唯一标识
            timestamp: res.timestamp, // 必填，生成签名的时间戳
            nonceStr: res.nonceStr, // 必填，生成签名的随机串
            signature: res.signature, // 必填，签名，见附录1
            jsApiList: [ // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
                'onMenuShareAppMessage',
                'onMenuShareTimeline',
                'updateAppMessageShareData',
                'updateTimelineShareData',
                'chooseImage',
                'getLocalImgData',
                'chooseWXPay'
            ]
        })
    }).catch((error) => {
        console.log("签署错误===", error)
    })
    wx.ready(res => {
        if (callback) callback()
    })
}

/**
 * [ShareTimeline 微信分享到朋友圈]
 * @param {[Object]} option [分享信息 配置选项]
 * @param {[Function]} callback [成功回调]
 */
const wxTimelineShare = (option, callback, errback) => {
    wx.updateTimelineShareData({
        title: option.title, // 分享标题
        link: option.link, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: option.imgUrl, // 分享图标
        success(res) {
            console.log('分享到朋友圈', res)
            callback(res)
        },
        fail(err){
            errback(err)
        }
    })
}

/**
 * [ShareAppMessage 微信分享给朋友]
 * @param {[Object]} option [分享信息 配置选项]
 * @param {[Function]} callback [成功回调]
 */
const wxShareAppMessage = (option, callback, errback) => {
    wx.updateAppMessageShareData({
        title: option.title, // 分享标题
        desc: option.desc, // 分享描述
        link: option.link, // 分享链接
        imgUrl: option.imgUrl, // 分享图标
        success(res) {
            console.log('分享给朋友', res)
            callback(res)
        },
        fail(err){
            errback(err)
        }
    });
}

const install = () => {
    app.prototype.wxConfig = wxConfig;
    app.prototype.wxTimelineShare = wxTimelineShare;
    app.prototype.wxShareAppMessage = wxShareAppMessage;
    app.prototype.wxPay = wxPay;
}
export default install

/**
 *  [微信api调用实例]
 *  this.wxConfig(this.wxPay(option, (res) =>{}), (err)=>{})
 * */ 

