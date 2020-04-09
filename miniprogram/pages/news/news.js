// pages/news/news.js
var newsData = require("../data/newsData.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots:true,
    autoplay:true,
    interval:2000,
    circular:true,
    initData:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      initData:newsData.initData
    })
  },
  goNewsDetail:function(event){
    var newsId = event.currentTarget.dataset.newsId
    wx.navigateTo({
      url: 'news-detail/news-detail?newsId='+newsId,
    })
  }
  
})