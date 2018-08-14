// pages/ucenter/index/index.js
var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    isLogin: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '个人中心'
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
    let userInfo = wx.getStorageSync('userInfo');
    let isLogin = wx.getStorageSync('isLogin');

    // 页面显示
    if (userInfo && isLogin) {
      this.setData({
        userInfo: userInfo,
        isLogin: isLogin
      });
    } else {
      //未登录信息
      this.setData({
        userInfo: app.globalData.userInfo
      });
    }
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
  goLogin: function() {
    wx.navigateTo({
      url: '/pages/auth/tologin/tologin?from=ucenter',
    })
  },
  callService: function () {
    wx.makePhoneCall({
      phoneNumber: '17621230884'
    })
  },
  afterSale: function () {
    wx.showModal({
      title: '提示',
      content: '请在官网或APP中申请售后',
      showCancel: false,
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  toLogin: function () {
    wx.navigateTo({
      url: '/pages/auth/tologin/tologin',
    })
  },
  toOrder: function () {
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/ucenter/order/order',
      })
    } else {
      this.toLogin()
    }
  },
  toCoupon: function () {
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/ucenter/coupon/coupon',
      })
    } else {
      this.toLogin()
    }
  },
  toAddress: function () {
    if (this.data.isLogin) {
      wx.navigateTo({
        url: '/pages/ucenter/address/address',
      })
    } else {
      this.toLogin()
    }
  }
})