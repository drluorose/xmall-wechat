// pages/category/category.js
const { Tab, extend } = require('../../zanui/dist/index');

Page(extend({}, Tab,
  {
    /**
     * 页面的初始数据
     */
    data: {
      id: '1',
      tab: {
        list: [
          {
            id: '1',
            title: '床件被套',
            description: 'MUJI等品牌制造商出品'
          },
          {
            id: '2',
            title: '被枕',
            description: '守护你的睡眠时光'
          },
          {
            id: '3',
            title: '家具',
            description: '大师级工艺'
          },
          {
            'id': '4',
            title: '收纳',
            description: '选自古驰竹柄原料供应商'
          },
          {
            'id': '5',
            title: '布艺软装',
            description: '各种风格软装装点你的家'
          }
        ],
        selectedId: '1',
        scroll: true,
        height: 45
      },
      currentCategory: 'MUJI等品牌制造商出品',
      around: [
        {
          list_pic_url: 'https://resource.smartisan.com/resource/0040590e9adb840def3e10e39edf79d5.png',
          name: '卫衣 开衫 经典款',
          description: '风格简洁、舒适服帖',
          price: '299.00'
        },
        {
          list_pic_url: 'https://resource.smartisan.com/resource/e6d343e9190f4659e2e8d683214d7582.png',
          name: '卫衣 大爆炸',
          description: '风格简洁、舒适服帖',
          price: '249.00'
        },
        {
          list_pic_url: 'https://resource.smartisan.com/resource/0b03734196f5f9cf72111d6427af8bf5.png',
          name: '卫衣 热血',
          description: '风格简洁、舒适服帖',
          price: '249.00'
        },
        {
          list_pic_url: 'https://resource.smartisan.com/resource/4a38a3678f151ec9c022f5f676c2b7da.jpg',
          name: '记事本',
          description: '优质米色纸、不洇不透',
          price: '49.00'
        },
        {
          list_pic_url: 'https://resource.smartisan.com/resource/5ff83a138b1186b0cdf2c76fee2b6e44.jpg',
          name: '明信片',
          description: '优质卡纸、包装精致、色彩饱满',
          price: '9.90'
        },
        {
          list_pic_url: 'https://resource.smartisan.com/resource/804edf579887b3e1fae4e20a379be5b5.png',
          name: '任天堂发售红白机',
          description: '100% 美国 SUPIMA 棉、舒适拉绒质地',
          price: '149.00'
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
        title: '分类'
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
)