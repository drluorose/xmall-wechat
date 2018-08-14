// pages/goods/goods.js
let WxParse = require('../../lib/wxParse/wxParse.js');
const { extend, Stepper } = require('../../zanui/dist/index');

Page(extend({}, Stepper,
  {
    /**
     * 页面的初始数据
     */
    data: {
      isLogin: false,
      gallery: [
        {
          id: '1',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FuMpJKl7eTLaSAZCY0wS_ZfA9nZu'
        },
        {
          id: '2',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/Fjyrefco9QCd1VMgiuQNoOCcPVtF'
        },
        {
          id: '3',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FoR36ELDFVsXHuRwdkHvgHfHULlw'
        },
        {
          id: '4',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_'
        },
        {
          id: '5',
          imgUrl: 'http://ow2h3ee9w.bkt.clouddn.com/Fv-R586maGmYxIm0mq_POxUEaiZ6'
        }
      ],
      goods: {
        name: 'IPhone X 全面屏 全面绽放 256G',
        description: '全面屏，全面绽放。',
        price: '1.00',
        originPrice: '9588.00'
      },
      brands: [
        {
          name: '官方自营品牌',
          brandId: '1'
        },
        {
          name: '新品',
          brandId: '1'
        }
      ],
      comment: {
        count: 1000,
        rate: '98.2',
        avatar: 'https://wx.qlogo.cn/mmopen/vi_32/Q0j4TwGTfTJTqQ5hNKicCNEwW3cATfOTaXk6xMlNEfh1gm0kicPDtJrXwTf5YEqQXYea3m5vsuPyJUXc3U0OicXtA/0',
        nickname: 'Exrick',
        addTime: '2018.03.15 15:30',
        content: 'IPhone惊艳之作  很好用 面部识别很方便',
        skuName: '深空灰色 256G',
        picList: [
          'http://oweupqzdv.bkt.clouddn.com/QQ%E6%88%AA%E5%9B%BE20180328153017.png',
        ]
      },
      attribute: [
        {
          name: '颜色',
          value: '灰色、黑色'
        },
        {
          name: '容量',
          value: '64G、256G'
        }
      ],
      relatedGoods: [
        {
          id: '1',
          picUrl: 'https://resource.smartisan.com/resource/0540778097a009364f2dcbb8c5286451.jpg',
          name: '快充移动电源',
          price: '59.00'
        },
        {
          id: '2',
          picUrl: 'https://resource.smartisan.com/resource/5fd44923e2615731033140914106fcd8.jpg',
          name: '蓝牙运动耳机',
          price: '299.00'
        }
      ],
      cartGoodsCount: 0,
      openAttr: false,
      openService: false,
      checkedSpecText: '',
      checkedSpec:
      {
        id: 1
      },
      spec: [
        {
          id: '1',
          name: '颜色',
          selected: '',
          valueList: [
            {
              id: '11',
              value: '深空灰色',
              picUrl: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_'
            },
            {
              id: '12',
              value: '银色',
              picUrl: 'http://oweupqzdv.bkt.clouddn.com/0070160971.jpg'
            }
          ]
        },
        {
          id: '2',
          name: '容量',
          selected: '',
          valueList: [
            {
              id: '21',
              value: '64GB',
              picUrl: ''
            },
            {
              id: '22',
              value: '256GB',
              picUrl: ''
            }
          ]
        }
      ],
      selectPic: 'http://ow2h3ee9w.bkt.clouddn.com/FpiLlu57NsXO97RR08rsP9CVHXK_',
      stepper: {
        stepper: 1,
        min: 1,
        max: 50
      },
      serviceList: [
        {
          id: '1',
          title: '48小时快速退款',
          desc: '收到退货包裹并确认无误后，将在48小时内办理退款，退款将原路返回，不同银行处理时间不同，预计1-5个工作日到账。'
        },
        {
          id: '2',
          title: '满88元免邮费',
          desc: '单笔订单金额（不含运费），大陆地区满88元免邮，不满88元收取10元邮费；港澳台地区满500元免邮，不满500元收取30元运费；海外地区以下单页提示运费为准。'
        },
        {
          id: '3',
          title: '官方自营品牌',
          desc: '官方原创生活类电商品牌，所有商品均为官方自营，品质保证。'
        },
        {
          id: '4',
          title: '国内部分地区无法配送',
          desc: '不支持省份: 台湾、香港、澳门、新疆'
        }
      ]
    },
    handleZanStepperChange(e) {
      let stepper = e.stepper;
      this.setData({
        'stepper.stepper': stepper
      });
      this.getSelectedText()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      wx.setNavigationBarTitle({
        title: '商品详情'
      })

      let goodsDetail = '<div><h1>我是HTML代码</h1></div>';
      /**
      * WxParse.wxParse(bindName , type, data, target,imagePadding)
      * 1.bindName绑定的数据名(必填)
      * 2.type可以为html或者md(必填)
      * 3.data为传入的具体数据(必填)
      * 4.target为Page对象,一般为this(必填)
      * 5.imagePadding为当图片自适应是左右的单一padding(默认为0,可选)
      */
      let that = this;
      WxParse.wxParse('goodsDetail', 'html', goodsDetail, that, 5);
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
      //判断登录
      let isLogin = wx.getStorageSync('isLogin');
      if (isLogin) {
        this.setData({
          isLogin: true
        })
      }
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
     * 用户点击右上角分享
     */
    onShareAppMessage: function () {

    },
    previewImage: function (e) {
      let index = e.target.dataset.index
      wx.previewImage({
        current: this.data.comment.picList[index], // 当前显示图片的http链接
        urls: this.data.comment.picList // 需要预览的图片http链接列表
      })
    },
    openCartPage: function () {
      wx.switchTab({
        url: '/pages/cart/cart'
      });
    },
    openOrCloseAttr: function () {
      this.setData({
        openAttr: !this.data.openAttr,
      });
    },
    //加入购物车
    addToCart: function () {
      if (!this.data.isLogin) {
        wx.navigateTo({
          url: '/pages/auth/tologin/tologin?from=goods'
        })
        return
      }
      if (this.data.checkedSpecText === '' && !this.data.openAttr) {
        //打开规格选择窗口
        this.openOrCloseAttr()
      } else {
        if (this.checkSelected() != true) {
          wx.showToast({
            title: '请选择: ' + this.checkSelected(),
            image: '/images/error.png'
          })
          return
        } else {
          this.setData({
            cartGoodsCount: this.data.cartGoodsCount + this.data.stepper.stepper
          })
          wx.showToast({
            title: '添加购物车成功',
            icon: 'success',
          })
        }
      }

    },
    clickSkuValue: function (e) {
      console.log(e.target.dataset)
      let specId = e.target.dataset.specId
      let specIndex = e.target.dataset.specIndex
      let valueId = e.target.dataset.value.id
      let valueIndex = e.target.dataset.valueIndex
      //样式checked
      this.setData({
        [`spec[${specIndex}].valueList[${valueIndex}].checked`]: !this.data.spec[specIndex].valueList[valueIndex].checked,
      })
      //选择属性赋值
      if (this.data.spec[specIndex].valueList[valueIndex].checked) {
        this.setData({
          [`spec[${specIndex}].selected`]: e.target.dataset.value.value
        })
      } else {
        this.setData({
          [`spec[${specIndex}].selected`]: ''
        })
      }
      //取消未选择样式
      let valueList = this.data.spec[specIndex].valueList
      for (let i = 0; i < valueList.length; i++) {
        if (valueList[i].id != valueId) {
          this.setData({
            [`spec[${specIndex}].valueList[${i}].checked`]: false
          })
        }
      }
      //设置属性文字
      this.getSelectedText()
      //设置选择属性图片
      let selectPic = this.data.spec[specIndex].valueList[valueIndex].picUrl
      if (selectPic != '') {
        this.setData({
          selectPic: selectPic
        })
      }
    },
    getSelectedText: function () {
      let text = ''
      let spec = this.data.spec
      for (let i = 0; i < spec.length; i++) {
        text += spec[i].selected + ' '
      }
      //去除末尾空格
      if (text.length > 0) {
        text = text.substring(0, text.length - 1)
      }
      if (text == ' ') {
        text = ''
      } else {
        text += ' ×' + this.data.stepper.stepper
      }
      this.setData({
        checkedSpecText: text
      })
    },
    checkSelected: function () {
      let spec = this.data.spec
      for (let i = 0; i < spec.length; i++) {
        if (spec[i].selected === '') {
          return spec[i].name
        }
      }
      return true
    },
    openService: function () {
      this.setData({
        openService: !this.data.openService,
      });
    },
    openIndexPage: function () {
      wx.switchTab({
        url: '/pages/index/index'
      });
    },
    openBrand: function (e) {
      let title = e.target.dataset.value
      wx.navigateTo({
        url: '/pages/promotion/promotion?title=' + title
      });
    },
    buyNow: function () {
      if (!this.data.isLogin) {
        wx.navigateTo({
          url: '/pages/auth/tologin/tologin'
        })
        return
      }
      if (this.checkSelected() != true) {
        wx.showToast({
          title: '请选择: ' + this.checkSelected(),
          image: '/images/error.png'
        })
        return
      }
      wx.navigateTo({
        url: '/pages/shopping/checkout/checkout'
      })
    },
    toRelatedGoods: function (e) {
      let id = e.currentTarget.dataset.id
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + id
      })
    }
  })
)