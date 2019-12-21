var postsData = require('../../data/posts-data.js')

Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: 'Dec 21 2019',
    title: "我是小静静～"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({post_content: postsData.postList})
  },
  onPostTap: function (event) {
    var postId = event.currentTarget.dataset.postid
    wx.navigateTo({
      url: 'post-detail/post-detail',
    })
  }
})