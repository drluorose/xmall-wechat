// pages/cart/cart.js
var app = getApp();
const { extend, Stepper } = require('../../zanui/dist/index');

Page(extend({}, Stepper,
  {
    /**
     * 页面的初始数据
     */
    data: {
      cartGoods: [
        {
          id: '1',
          checked: true,
          picUrl: 'https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png',
          name: '畅呼吸智能空气净化器',
          spec: '标准版 白色',
          number: 1,
          price: '1299.00',
          stepper: {
            stepper: 1,
            min: 1,
            max: 50
          },
        },
        {
          id: '2',
          checked: true,
          picUrl: 'https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png',
          name: '坚果 Pro 2',
          spec: '纯白色（限量版） 6G + 128G',
          number: 1,
          price: '1799.00',
          stepper: {
            stepper: 1,
            min: 1,
            max: 50
          },
        }
      ],
      checkedGoodsCount: 2,
      checkedGoodsAmount: '',
      isEditCart: false,
      isLogin: false,
      checkedAllStatus: true
    },
    handleZanStepperChange(e) {
      var componentId = e.componentId;
      var stepper = e.stepper;
      this.setData({
        [`cartGoods[${componentId}].stepper.stepper`]: stepper,
        [`cartGoods[${componentId}].number`]: stepper,
      });
      this.setData({
        checkedGoodsCount: this.getCheckedGoodsCount(),
        checkedGoodsAmount: this.getCheckedGoodsAmount()
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '购物车'
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
      let isLogin = wx.getStorageSync('isLogin');
      if (isLogin) {
        this.setData({
          isLogin: true
        })
      }

      this.setData({
        checkedGoodsCount: this.getCheckedGoodsCount(),
        checkedGoodsAmount: this.getCheckedGoodsAmount()
      });
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    goLogin: function () {
      wx.navigateTo({
        url: '/pages/auth/tologin/tologin',
      })
    },
    checkedItem: function (e) {
      let index = e.target.dataset.index
      let id = e.target.dataset.id
      this.setData({
        [`cartGoods[${index}].checked`]: !this.data.cartGoods[index].checked,
        checkedGoodsCount: this.getCheckedGoodsCount(),
        checkedGoodsAmount: this.getCheckedGoodsAmount()
      });
      this.setData({
        checkedGoodsCount: this.getCheckedGoodsCount(),
        checkedGoodsAmount: this.getCheckedGoodsAmount()
      });
    },
    getCheckedGoodsAmount: function () {
      let totalPrice = 0
      this.data.cartGoods.forEach(function (v) {
        if (v.checked === true) {
          totalPrice += v.price * v.number
        }
      })
      return totalPrice.toFixed(2)
    },
    getCheckedGoodsCount: function () {
      let checkedGoodsCount = 0
      this.data.cartGoods.forEach(function (v) {
        if (v.checked === true) {
          checkedGoodsCount += v.number
        }
      })
      return checkedGoodsCount
    },
    editCart: function () {
      this.setData({
        isEditCart: !this.data.isEditCart
      });
    },
    checkedAll: function () {
      if (this.data.checkedAllStatus) {
        this.setData({
          checkedAllStatus: !this.data.checkedAllStatus,
          checkedGoodsCount: '',
          checkedGoodsAmount: '0.00'
        });
        for (var i = 0; i < this.data.cartGoods.length;i++){
          this.setData({
            [`cartGoods[${i}].checked`]: false,
          })
        }
      } else {
        for (var i = 0; i < this.data.cartGoods.length; i++) {
          this.setData({
            [`cartGoods[${i}].checked`]: true,
          })
        }
        this.setData({
          checkedAllStatus: !this.data.checkedAllStatus,
          checkedGoodsCount: this.getCheckedGoodsCount(),
          checkedGoodsAmount: this.getCheckedGoodsAmount()
        });
      }
    },
    deleteCart: function () {
      let that = this
      wx.showModal({
        title: '提示',
        content: '确认要删除所选购物车商品？',
        confirmColor: '#b4282d',
        success: function (res) {
          if (res.confirm) {
            that.setData({
              cartGoods: []
            })
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    },
    checkoutOrder: function () {
      wx.navigateTo({
        url: '/pages/shopping/checkout/checkout',
      })
    }
  })
)