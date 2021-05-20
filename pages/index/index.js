// pages/index/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mes: 'aaa',
    userInfo: {
      //姓名
      nickName: "未登录",
      //头像
      avatarUrl: "/static/images/nvsheng.jpg"
    }
  },

  /**
   * 跳转到logs
   */
  toLogs() {
    wx.navigateTo({
      url: '/pages/logs/logs'
    })
  },
  /**
   * 获取用户信息的回调
   */
  handlegetUserInfo(res){
    //看有没有值，判断用户是否授权
    if(res.detail.userInfo){
      this.setData({
        //有值就赋值
        userInfo: res.detail.userInfo
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    //用户有授权的话，获取用户信息
    wx.getUserInfo({
      //成功的回调，res就是用户信息
      success:(res)=>{
        console.log(res)
        //把用户信息写入
        this.setData({
          userInfo: res.userInfo
        })
      },
      //失败的回调，err
      fail:(err)=>{
        console.log(err);
      }
    })
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