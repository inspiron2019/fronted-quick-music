// pages/playlist/playlist.js
const app  = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
        var selected = 2;
        //role2的时候把我的页面的index 设置为0
        if(app.globalData.userInfo.role ==2){
          selected = 0;
        }
        this.getTabBar().setData({
          selected: selected
        })
    }
  },
  role1Taped:function(){
    app.globalData.userInfo={"userName":"role1","role":1};
    app.switchTabWithRole(1);
  },
  role2Taped:function(){
    app.globalData.userInfo={"userName":"role2","role":2};
    app.switchTabWithRole(2);
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