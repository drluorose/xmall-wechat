// pages/ucenter/coupon/coupon.js
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
            title: '未使用',
          },
          {
            id: '2',
            title: '已使用',
          },
          {
            id: '3',
            title: '已失效',
          }
        ],
        selectedId: '1',
        scroll: false,
        height: 45
      },
      couponList: [
        {
          id: '1',
          tag: '新人专享',
          name: '限时免单券',
          time: '2018.03.20-2018.03.30',
          description: '饮食类目专享；限时购等详情页标注不可用券的商品除外不可用券的商品除外',
          showAll: false
        }
      ],
      couponCode: ''
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
        title: '优惠券'
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
    showAllDes: function (e) {
      let index = e.target.dataset.index
      this.setData({
        [`couponList[${index}].showAll`]: !this.data.couponList[index].showAll
      })
    },
    clearInput: function () {
      this.setData({
        couponCode: '',
      })
    },
    inputChange: function (e) {
      let value = e.detail.value
      this.setData({
        couponCode: value
      })
    },
    changeCoupon: function (e) {
      if (this.data.couponCode === '') {
        return
      }
      wx.showToast({
        title: '优惠码错误',
        image: '/images/error.png',
      })
    }
  })
)