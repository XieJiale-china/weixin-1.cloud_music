// pages/index/index.js

//引入请求方法
import request from "../../utils/request";

Page({

  /**
   * 页面的初始数据
   */
  data: {
    bannerList: [], //轮播图数据
    personalizedList: [],  //推荐歌曲数据
    topList: [], // 排行榜数据
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取轮播图数据
    request('/banner', {type:'2'}).then(res => {
      //console.log(res);
      this.setData({
        bannerList: res.banners
      })
    }).catch(err => {
      console.log(err);
    })

    //获取推荐歌曲
    request('/personalized', {limit:'10'}).then(res => {
      this.setData({
        personalizedList: res.result
      })
    }).catch(err => {
      console.log(err);
    })

    // 获取排行榜数据
    /*
    * 需求分析：
    *   1. 需要根据idx的值获取对应的数据
    *   2. idx的取值范围是0-20， 我们需要0-4
    *   3. 需要发送5次请求
    * 前++ 和 后++的区别
    *   1. 先看到是运算符还是值
    *   2. 如果先看到的是运算符就先运算再赋值
    *   3. 如果先看到的值那么就先赋值再运算
    * */
    
    //计数器
   let index = 0;
   //data的数组不能直接push，所以做一个容器存放
   let resultArr = [];
   while (index < 5){

    request('/top/list', {idx: index++}).then(res => {
      let topListItem = {name: res.playlist.name, tracks: res.playlist.tracks.slice(0, 3)};
     //push到容器数组topListItem
     resultArr.push(topListItem);
     // 不需要等待五次请求全部结束才更新，用户体验较好，但是渲染次数会多一些
     this.setData({
       topList: resultArr
     })
    }).catch(err => {
      alert("请求失败，请稍后重试...");
    })
    
   }


  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})