//app.js
App({
  onLaunch: function () {
    if (!wx.cloud) {
      console.error('请使用 2.2.3 或以上的基础库以使用云能力')
    } else {
      wx.cloud.init({
        // env 参数说明：
        //   env 参数决定接下来小程序发起的云开发调用（wx.cloud.xxx）会默认请求到哪个云环境的资源
        //   此处请填入环境 ID, 环境 ID 可打开云控制台查看
        //   如不填则使用默认环境（第一个创建的环境）
        env: 'test-grtkm',
        traceUser: true,
      })
    }

    this.globalData = {}
  },
  switchTabWithRole: function(role){
    if(role == 1){
      this.globalData.tabList =[
        {
          "pagePath": "pages/playlist/playlist",
          "iconPath": "images/logo.png",
          "selectedIconPath": "images/logo-blue.png",
          "text": "音乐1"
        },
        {
          "pagePath": "pages/blog/blog",
          "iconPath": "images/file-add.png",
          "selectedIconPath": "images/file-add-active.png",
          "text": "博客2"
        },
        {
          "pagePath": "pages/profile/profile",
          "iconPath": "images/user.png",
          "selectedIconPath": "images/user-active.png",
          "text": "我的3"
        }
      ]
      if (this.changeTabbarCallback) {
        this.changeTabbarCallback(this.globalData.tabList)
      }
      wx.switchTab({
       url: '/pages/playlist/playlist',
      })
    }

    if(role == 2){
      this.globalData.tabList =[
        {
          "pagePath": "pages/playlist/playlist",
          "iconPath": "images/logo.png",
          "selectedIconPath": "images/logo-blue.png",
          "text": "音乐2"
        },
        {
          "pagePath": "pages/blog/blog",
          "iconPath": "images/file-add.png",
          "selectedIconPath": "images/file-add-active.png",
          "text": "博客2"
        },
        {
          "pagePath": "pages/profile/profile",
          "iconPath": "images/user.png",
          "selectedIconPath": "images/user-active.png",
          "text": "我的2"
        }
      ]
      if (this.changeTabbarCallback) {
        this.changeTabbarCallback(this.globalData.tabList)
      }
      wx.switchTab({
       url: '/pages/profile/profile',
      })

    }
  },
  globalData: {
    userInfo: null,
    tabList: []
  }
})
