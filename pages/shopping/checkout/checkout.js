// pages/shopping/checkout/checkout.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkedAddress: {
      id: 1,
      isDefault: true,
      name: 'Exrick',
      mobile: '17621230884',
      region: '四川省成都市武侯区',
      address: '益州大道香月湖7栋188号'
    },
    couponId: '',
    couponName: '',
    couponCount: 1,
    couponPrice: '',
    goodsTotalPrice: 1.00,
    freightPrice: 0.00,
    checkedGoodsList: [
      {
        id: '1',
        picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
        name: 'IPhone X 全面屏 全面绽放 256G',
        specValue: '灰色',
        number: 1,
        retailPrice: '1.00',
        originPrice: '9599.00'
      },
    ],
    actualPrice: 1.00
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单'
    })
    this.setData({
      goodsTotalPrice: this.data.goodsTotalPrice.toFixed(2),
      freightPrice: this.data.freightPrice.toFixed(2),
      actualPrice: this.data.actualPrice.toFixed(2),
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

  },
  chooseAddress: function () {
    let checkedAddressId = this.data.checkedAddress.id
    let url = ''
    if (checkedAddressId) {
      url = '/pages/shopping/address/address?addressId=' + checkedAddressId
    }else {
      url = '/pages/shopping/address/address?addressId='
    }
    wx.navigateTo({
      url: url,
    })
  },
  chooseCoupon: function () {
    wx.navigateTo({
      url: '/pages/shopping/coupon/coupon?couponId=' + this.data.couponId,
    })
  },
  submitOrder: function () {
    wx.showModal({
      title: '提示',
      content: '此处需调用微信支付接口',
      showCancel: false,
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
          wx.redirectTo({
            url: '/pages/payResult/payResult?status=true',
          })
        }
      }
    })
    wx.requestPayment({
      'timeStamp': '',
      'nonceStr': '',
      'package': '',
      'signType': 'MD5',
      'paySign': '',
      'success': function (res) {
      },
      'fail': function (res) {
      }
    })
  }
})