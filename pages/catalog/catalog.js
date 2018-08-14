// pages/catalog/catalog.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentCategory: {

    },
    currentCategory1: {
      id: '1',
      name: '居家',
      bannerId:'1',
      bannerUrl: 'http://yanxuan.nosdn.127.net/a263504e05a8e409cf531767e9e94e82.jpg',
      subCategoryList: [
        {
          id: '11',
          bannerUrl: 'http://yanxuan.nosdn.127.net/d77f8cd37529d4fc10932aaf708663bc.png',
          name: '床品件套'
        },
        {
          id: '12',
          bannerUrl: 'http://yanxuan.nosdn.127.net/fb0de30ab423322df3ab3c65f10e51a1.png',
          name: '被枕'
        },
        {
          id: '13',
          bannerUrl: 'http://yanxuan.nosdn.127.net/16b936a40daf74eb36fdefdd361c88b3.png',
          name: '家具'
        },
        {
          id: '14',
          bannerUrl: 'http://yanxuan.nosdn.127.net/6fef602bb1214c250ac662bb6cc95e9e.png',
          name: '收纳'
        },
        {
          id: '15',
          bannerUrl: 'http://yanxuan.nosdn.127.net/b0e937f66f164f0c05900fc27d8bc205.png',
          name: '布艺软装'
        }
      ]
    },
    currentCategory2: {
      id: '2',
      name: '配件',
      bannerId: '2',
      bannerUrl: 'http://yanxuan.nosdn.127.net/9301a1871e6bd54566da9f304c9adcb3.jpg',
      subCategoryList: [
        {
          id: '21',
          bannerUrl: 'http://yanxuan.nosdn.127.net/0e7fb49925312a624d95dff5b540891e.png',
          name: '行李箱'
        },
        {
          id: '22',
          bannerUrl: 'http://yanxuan.nosdn.127.net/b2210fd5d072617dcecd029ca493f0df.png',
          name: '男士包袋'
        }
      ]
    },
    navList: [
      {
        id: '1',
        name: '居家'
      },
      {
        id: '2',
        name: '配件'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '分类'
    })
    let that = this;
    that.setData({
      currentCategory: this.data.currentCategory1
    });
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
  switchCate: function (event) {
    var that = this;
    var currentTarget = event.currentTarget;
    console.log(currentTarget);
    if (this.data.currentCategory.id == event.currentTarget.dataset.id) {
      return false;
    }
    if (currentTarget.dataset.id == "1") {
      that.setData({
        currentCategory: this.data.currentCategory1
      });
    } else {
      that.setData({
        currentCategory: this.data.currentCategory2
      });
    }
  },
  toPromotion:function(){
    wx.navigateTo({
      url: '/pages/goods/goods?id=' + this.data.currentCategory.bannerId,
    })
  }
})