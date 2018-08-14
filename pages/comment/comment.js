// pages/comment/comment.js
const { Tab, extend } = require('../../zanui/dist/index');

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
            title: '全部(999+)',
          },
          {
            id: '2',
            title: '有图(999+)',
          },
        ],
        selectedId: '1',
        scroll: false,
        height: 45
      },
      comments:[
        {
          userInfo:{
            avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/0',
            nickname:'Exrick',
          },
          spec:'深空灰色 256G',
          content:'IPhone惊艳之作  很好用 面部识别很方便',
          createTime: '2018-03-28 16:58:06',
          picList:[
            'http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20180328153017.png',
          ]
        }
      ]
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
        title: '用户评价'
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
    previewImage: function (e) {
      let commentIndex = e.target.dataset.commentIndex
      let picIndex = e.target.dataset.picIndex
      wx.previewImage({
        current: this.data.comments[commentIndex].picList[picIndex], // 当前显示图片的http链接
        urls: this.data.comments[commentIndex].picList // 需要预览的图片http链接列表
      })
    },
  })
)