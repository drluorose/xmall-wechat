//index.js
//获取应用实例
const util = require('../../utils/util.js');
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    banner: [
      {
        id: '1',
        type: 0,
        linkId: '1',
        bannerName: '',
        imageUrl: 'https://resource.smartisan.com/resource/w/white25wap.png'
      },
      {
        id: '2',
        type: 1,
        linkId: '2',
        bannerName: '新品热卖',
        imageUrl: 'https://resource.smartisan.com/resource/9402b4117bf1c1754dca08b52c98cca0.png'
      },
      {
        id: '3',
        type: 0,
        linkId: '3',
        bannerName: '',
        imageUrl: 'https://resource.smartisan.com/resource/B/BS2000WAP.png'
      }
    ],
    channel: [
      {
        id: '1',
        type: 0,
        linkId: '3',
        iconUrl: 'https://resource.smartisan.com/resource/5224f868cca31a8b913411ff9d69dcaf.png',
        name: 'IPhone X'
      },
      {
        id: '1',
        type: 0,
        linkId: '3',
        iconUrl: 'https://resource.smartisan.com/resource/e98cfb0a63e8b8c80e5b87ca66bda64c.png',
        name: '购买空净'
      },
      {
        id: '3',
        type: 1,
        linkId: '3',
        iconUrl: 'http://oweupqzdv.bkt.clouddn.com/%E9%85%8D%E4%BB%B61.png',
        name: '新品配件'
      },
      {
        id: '4',
        type: 1,
        linkId: '4',
        iconUrl: 'https://resource.smartisan.com/resource/75892aebb63f998fa9b37e9a18984a98.png',
        name: '服装'
      },
      {
        id: '5',
        type: 1,
        linkId: '5',
        iconUrl: 'http://oweupqzdv.bkt.clouddn.com/%E5%88%86%E7%B1%BB1.png',
        name: '更多'
      }
    ],
    layout1: [
      {
        id: '1',
        imageUrl: 'https://resource.smartisan.com/resource/e/erfenzhiyiqingrenjieapp.png'
      },
      {
        id: '2',
        imageUrl: 'https://resource.smartisan.com/resource/s/shangchengguanggaowei.png'
      },
    ],
    layout2: [
      {
        id: '1',
        imageUrl: 'https://resource.smartisan.com/resource/3a7c77edcd70a9d3621bc3e7d0fba1c1.png'
      },
      {
        id: '2',
        imageUrl: 'https://resource.smartisan.com/resource/4bf08546b25b1527cc715a9717db6327.png'
      },
    ],
    brand: [
      {
        picUrl: 'https://resource.smartisan.com/resource/605cb133a9430c1650cf3cd2fc3f8dff.png',
        name: '坚果 Pro',
        description: '漂亮得不像实力派',
        price: '1299.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/71432ad30288fb860a4389881069b874.png',
        name: '畅呼吸智能空气净化器',
        description: '超强净化能力，超低噪音',
        price: '1299.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/c71ce2297b362f415f1e74d56d867aed.png',
        name: '坚果 Pro 2',
        description: '漂亮得不像实力派',
        price: '1799.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/ff8106afb5fe0ed8ec23e3594766b4f7.png',
        name: '卫衣 开衫 热血',
        description: '风格简洁、舒适服帖',
        price: '299.00'
      }
    ],
    newGoods: [
      {
        picUrl: 'https://resource.smartisan.com/resource/3bd5267edd7257e719e7965b756e2c2e.png',
        name: '坚果 Pro',
        description: '漂亮的不像实力派',
        price: '1299.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/90be7779c2454407ee5f4b6184c929ed.jpg',
        name: '半入耳式耳机 心动版',
        description: '哑光表面、专业级调音',
        price: '99.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/ca332140775bb0646f65e516942d3adc.jpg',
        name: '坚果 Pro 2 软胶保护套',
        description: 'TPU 环保材质、完美贴合',
        price: '49.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/6ac979a77402f1d0652df480e8c9adb0.jpg',
        name: 'S-1001 圈铁耳机',
        description: '极简造型、复合振膜',
        price: '199.00'
      }
    ],
    around: [
      {
        picUrl: 'https://resource.smartisan.com/resource/0040590e9adb840def3e10e39edf79d5.png',
        name: '卫衣 开衫 经典款',
        description: '风格简洁、舒适服帖',
        price: '299.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/e6d343e9190f4659e2e8d683214d7582.png',
        name: '卫衣 大爆炸',
        description: '风格简洁、舒适服帖',
        price: '249.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/0b03734196f5f9cf72111d6427af8bf5.png',
        name: '卫衣 热血',
        description: '风格简洁、舒适服帖',
        price: '249.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/4a38a3678f151ec9c022f5f676c2b7da.jpg',
        name: '记事本',
        description: '优质米色纸、不洇不透',
        price: '49.00'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/5ff83a138b1186b0cdf2c76fee2b6e44.jpg',
        name: '明信片',
        description: '优质卡纸、包装精致、色彩饱满',
        price: '9.90'
      },
      {
        picUrl: 'https://resource.smartisan.com/resource/804edf579887b3e1fae4e20a379be5b5.png',
        name: '任天堂发售红白机',
        description: '100% 美国 SUPIMA 棉、舒适拉绒质地',
        price: '149.00'
      }
    ]
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onShareAppMessage: function () {
    return {
      title: 'XMall',
      desc: 'XMall小程序商城',
      path: '/pages/index/index'
    }
  },
  onLoad: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          console.log(res)
          //服务器请求https://api.weixin.qq.com/sns/jscode2session?appid=APPID&secret=SECRET&js_code=JSCODE&grant_type=authorization_code获取用户openid并自定义登录状态
          // wx.request({
          //   url: 'https://exrick.cn/wexinLogin',
          //   data: {
          //     code: res.code,
          //   }
          // })
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    });
  },
  toSearch: function () {
    wx.navigateTo({
      url: '/pages/search/search'
    });
  },
  bannerNav: function (e) {
    let banner = e.target.dataset.value;
    if (banner.type === 0) {
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + banner.linkId,
      })
    } else if (banner.type === 1) {
      wx.navigateTo({
        url: '/pages/promotion/promotion?title=' + banner.bannerName,
      })
    }
  },
  channelNav: function (e) {
    let channel = e.target.dataset.value;
    if (channel.type === 0) {
      wx.navigateTo({
        url: '/pages/goods/goods?id=' + channel.linkId,
      })
    } else if (channel.type === 1) {
      wx.navigateTo({
        url: '/pages/promotion/promotion?title=' + channel.name,
      })
    }
  }
})
