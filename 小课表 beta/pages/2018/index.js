// pages/2018/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    x:0,
    y:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  tap: function (e) {
    this.setData({
      x:30,
      y:30
    })
  },
  onChange:function(e){
    console.log(e.detail)
  },
  onScale:function(e){
    console.log(e.detail)
  }
  })