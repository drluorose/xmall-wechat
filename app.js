var util = require('./utils/util.js');
var api = require('./api/api.js');
var user = require('./services/user.js');

//app.js
App({
  onLaunch: function () {
    
  },
  globalData: {
    userInfo: {
      nickName: 'Hi，游客',
      username: '点击去登录',
      avatarUrl: 'http://yanxuan.nosdn.127.net/8945ae63d940cc42406c3f67019c5cb6.png'
    },
    token: '',
  }
})