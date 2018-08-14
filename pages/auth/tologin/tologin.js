// pages/auth/reset/reset.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  login: function () {
    wx.navigateTo({
      url: '/pages/auth/login/login'
    })
  },
  wechatLogin: function () {
    var that = this;
    wx.getUserInfo({
      success: function (res) {
        console.log(res.userInfo);
        app.globalData.userInfo = res.userInfo;
        app.globalData.userInfo.username = "微信用户";

        //存储用户信息
        wx.setStorageSync('userInfo', app.globalData.userInfo);
        wx.setStorageSync('isLogin', true);
        let isLogin = wx.getStorageSync('isLogin');
        wx.navigateBack({
          delta: 1
        })
      }
    })
  }
})