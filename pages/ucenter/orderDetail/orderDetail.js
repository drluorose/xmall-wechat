// pages/ucenter/orderDetail/orderDetail.js

Page({
    /**
     * 页面的初始数据
     */
    data: {
      orderInfo: {
        createTime: '2018-03-11 16:03:23',
        orderSn: '2080320',
        actualPrice: '1.00',
        orderStatusText: '待付款',
        freightPrice: '0.00',
        goodsPrice: '1.00',
        couponPrice: '0.00',
        orderStatus: 0
      },
      orderGoods: [
        {
          id: '1',
          picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
          name: 'IPhone X 全面屏 全面绽放 256G',
          specifitionNameValue: '灰色 256G',
          number: '1',
          originPrice: '9599.00',
          price: '1.00'
        }
      ],
      address: {
        name: 'Exrick',
        mobile: '176****0884',
        fullAddress: '四川省成都市武侯区益州大道中段888号香月湖11栋1888丰巢柜'
      }
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
    cancelOrder: function () {
      wx.showModal({
        title: '提示',
        content: '确认要取消所选订单？',
        confirmColor: '#b4282d',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    },
    callService: function() {
      wx.makePhoneCall({
        phoneNumber: '17621230884'
      })
    }
  })