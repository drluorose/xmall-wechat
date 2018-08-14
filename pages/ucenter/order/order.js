// pages/ucenter/order/order.js
const { Tab, extend } = require('../../../zanui/dist/index');

Page(extend({}, Tab,
  {

    /**
     * 页面的初始数据
     */
    data: {
      tab: {
        list: [
          {
            id: '1',
            title: '全部',
          },
          {
            id: '2',
            title: '待付款',
          },
          {
            id: '3',
            title: '待发货',
          },
          {
            id: '4',
            title: '已发货',
          },
          {
            id: '5',
            title: '待评价',
          },
        ],
        selectedId: '1',
        scroll: false,
        height: 45
      },
      orderList: [
        {
          id: '1',
          orderSn: '20180320',
          orderStatusText: '待付款',
          goodsList: [
            {
              id: '1',
              picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
              name: 'IPhone X 全面屏 全面绽放 256G',
              number: '1',
            }
          ],
          actualPrice: '1.00',
          orderStatus: 0
        },
        {
          id: '2',
          orderSn: '20180321',
          orderStatusText: '已发货',
          goodsList: [
            {
              id: '1',
              picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
              name: 'IPhone X 全面屏 全面绽放 256G',
              number: '1',
            }
          ],
          actualPrice: '1.00',
          orderStatus: 3
        },
        {
          id: '3',
          orderSn: '20180321',
          orderStatusText: '已发货',
          goodsList: [
            {
              id: '1',
              picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
              name: 'IPhone X 全面屏 全面绽放 256G',
              number: '1',
            }
          ],
          actualPrice: '1.00',
          orderStatus: 4
        }
      ],
    },
    handleZanTabChange(e) {
      var componentId = e.componentId;
      var selectedId = e.selectedId;
      this.setData({
        'tab.selectedId': selectedId
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '我的订单'
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
    cancelOrder: function () {
      let that = this
      wx.showModal({
        title: '提示',
        content: '确认要取消所选订单？',
        confirmColor: '#b4282d',
        success: function (res) {
          if (res.confirm) {
            that.setData({
              'orderList[0].orderStatus': -1,
              'orderList[0].orderStatusText': '已取消'
            })
            wx.showToast({
              title: '取消订单成功',
              icon: 'success',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    confirmOrder: function () {
      let that = this
      wx.showModal({
        title: '提示',
        content: '您确认已收到货物？',
        confirmColor: '#b4282d',
        success: function (res) {
          if (res.confirm) {
            that.setData({
              'orderList[1].orderStatus': 4,
              'orderList[1].orderStatusText': '待评价'
            })
            wx.showToast({
              title: '确认收货成功',
              icon: 'success',
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    payOrder: function () {
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
    },
    showExpress: function () {
      wx.showModal({
        title: '提示',
        content: '请调用快递接口',
        showCancel: false,
        confirmColor: '#b4282d',
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定')
          }
        }
      })
    },
    commentOrder: function () {
      wx.navigateTo({
        url: '/pages/commentPost/commentPost',
      })
    },
  })
)