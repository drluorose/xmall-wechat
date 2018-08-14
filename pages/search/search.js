// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotKeyword: [
      {
        keyword: '美味超值99选9',
        isHot: true
      },
      {
        keyword: '春装2件7折',
        isHot: true
      },
      {
        keyword: '女鞋',
        isHot: false
      }
    ],
    historyKeyword: [
      'IPhone',
      '手表'
    ],
    keyword: '',
    searchStatus: false,
    currentSortType: 'default',
    currentSortOrder: '',
    helpKeyword: [
      "IPone X",
      "IPhone 8",
      "IPhone 手机壳"
    ],
    goodsList: [
      {
        picUrl: 'https://resource.smartisan.com/resource/0040590e9adb840def3e10e39edf79d5.png',
        name: '卫衣 开衫 经典款',
        price: '299.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/e6d343e9190f4659e2e8d683214d7582.png',
        name: '卫衣 大爆炸',
        price: '249.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/0b03734196f5f9cf72111d6427af8bf5.png',
        name: '卫衣 热血',
        price: '249.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/4a38a3678f151ec9c022f5f676c2b7da.jpg',
        name: '记事本',
        price: '49.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/5ff83a138b1186b0cdf2c76fee2b6e44.jpg',
        name: '明信片',
        price: '9.90'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '搜索'
    })

    //举例演示 初始化数据
    let history = wx.getStorageSync('historyKeyword')
    if (history == "") {
      let array = new Array("IPhone", "手表")
      wx.setStorageSync('historyKeyword', array)
    }

    this.getHistoryKeyword()
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
  getHistoryKeyword: function () {
    let history = wx.getStorageSync('historyKeyword')
    if (history != "") {
      this.setData({
        historyKeyword: history
      })
    }
  },
  onKeywordConfirm: function (e) {
    //记录搜索历史
    let value = e.detail.value
    if (value == "") {
      return
    }
    let array = new Array(value)
    let history = wx.getStorageSync('historyKeyword')
    if (history != "") {
      history.push(value)
      wx.setStorageSync('historyKeyword', history)
    } else {
      wx.setStorageSync('historyKeyword', array)
    }
    //开始搜索
    this.setData({
      searchStatus: true
    })
  },
  inputChange: function (e) {
    let value = e.detail.value
    this.setData({
      keyword: value
    })
  },
  inputFocus: function () {
    this.setData({
      searchStatus: false,
    });
    if (this.data.keyword) {
      this.getHelpKeyword();
    }
  },
  clearKeyword: function () {
    this.setData({
      keyword: '',
      searchStatus: false
    })
  },
  closeSearch: function () {
    wx.switchTab({
      url: '/pages/index/index'
    });
  },
  onKeywordTap: function (e) {
    let value = e.target.dataset.keyword
    this.setData({
      keyword: value,
      searchStatus: true
    })
  },
  clearHistory: function () {
    let that = this;
    wx.showModal({
      title: '提示',
      content: '确认要删除搜索历史记录？',
      confirmColor: '#b4282d',
      success: function (res) {
        if (res.confirm) {
          that.setData({
            historyKeyword: []
          })
          wx.removeStorageSync('historyKeyword')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  getHelpKeyword: function () {

  },
  openSortFilter: function (e) {
    let id = e.currentTarget.id
    this.setData({
      currentSortType: id
    })
    let sort = this.data.currentSortOrder
    if (id === 'price') {
      if (sort === 'asc') {
        sort = 'desc'
      } else {
        sort = 'asc'
      }
    }
    this.setData({
      currentSortOrder: sort
    })
  }
})