// pages/ucenter/addressAdd/addressAdd.js
const { Field, Switch, extend } = require('../../../zanui/dist/index');
import { AreaPicker } from "../../../lib/areaSelector/selector.js";

Page(extend({}, Field, Switch, AreaPicker,
  {
    /**
     * 页面的初始数据
     */
    data: {
      name: {
        componentId: 'name',
        type: 'input',
        placeholder: '姓名'
      },
      mobile: {
        componentId: 'mobile',
        type: 'input',
        inputType: 'number',
        placeholder: '手机号码'
      },
      address: {
        componentId: 'address',
        type: 'input',
        placeholder: '详细地址, 如街道、楼盘号等'
      },
      region: '省份、城市、区县',
      selected: false,
      checked: true,
    },
    //添加用户选择地区完成的回调
    onAreaCommit(locationList) {
      let i = 0, region = '';
      for (i = 0; i < locationList.length; i++) {
        region += locationList[i].name + ' ';
      }
      this.setData({
        selected: true,
        region: region
      })
    },
    handleZanFieldChange(e) {
      console.log(e)
    },
    handleZanSwitchChange(e) {
      this.setData({
        checked: e.checked
      });
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      let title = '', isDefault = false
      if (options.isDefault == 'true') {
        isDefault = true
      } else {
        isDefault = false
      }
      if (options.id) {
        title = '编辑地址'
        this.setData({
          'name.value': options.name,
          'mobile.value': options.mobile,
          'region': options.region,
          'address.value': options.address,
          checked: isDefault,
          selected: true
        })
      } else {
        title = '添加地址'
      }
      wx.setNavigationBarTitle({
        title: title
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
    chooseAddress: function () {
      let that = this;
      wx.chooseAddress({
        success: function (res) {
          that.setData({
            'base.name.value': res.userName,
            'base.tel.value': res.telNumber,
            'base.region.value': res.provinceName + ' ' + res.countyName,
            'base.address.value': res.detailInfo,
          });
        }
      })
    },
    saveAddress: function () {
      wx.navigateBack({
        delta: 1,
      })
    }
  })
)