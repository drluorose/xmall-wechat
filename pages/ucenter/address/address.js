// pages/ucenter/address/address.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    addressList: [
      {
        id: '1',
        name: 'Exrick',
        mobile: '17621230884',
        region: '四川省 成都市 武侯区',
        address: '益州大道888号香月湖7栋',
        isDefault: true
      },
      {
        id: '2',
        name: 'xhy',
        mobile: '17621230888',
        region: '四川省 成都市 武侯区',
        address: '益州大道888号香月湖66栋',
        isDefault: false
      }
    ]
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
  deleteAddress: function () {
    let that = this
    wx.showModal({
      title: '提示',
      content: '确认要删除所选地址？',
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            addressList: []
          })
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  addressAddOrUpdate: function (e) {
    console.log(e)
    let address = e.currentTarget.dataset.address
    let url = ''
    if (address) {
      url = '/pages/ucenter/addressAdd/addressAdd?id=' + address.id + '&name=' + address.name + '&mobile=' + address.mobile + '&region=' + address.region + '&address=' + address.address + '&isDefault=' + address.isDefault
    } else {
      url = '/pages/ucenter/addressAdd/addressAdd'
    }
    wx.navigateTo({
      url: url
    })
  }
})