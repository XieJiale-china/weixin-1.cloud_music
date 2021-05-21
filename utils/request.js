//对请求进行封装

//1.引入配置项
import config from "./config";
export default (url, data={}, method='GET') => {

  return  new Promise((resolve, reject) => {
    wx.request({
      url: config.host + url,
      data,
      method,
      success: (res) => {
        resolve(res.data);
      },
      fail: (err) => {
        reject(err)
      }
    })

  })


}