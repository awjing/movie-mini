var postsData = require('../../../data/posts-data.js')

Page({
  data: {},
  onLoad: function (options) {
    var postId = options.id
    this.data.currentPostId = postId
    var postData = postsData.postList[postId]
    // 如果在onLoad方法中，不是异步的去执行一个数据绑定
    // 则不需要使用this.setData方法
    // 只需要对this.data赋值即可
    // this.data.postData = postData ?
    this.setData({
      postData: postData
    })

    // 获取缓存posts_collected数据
    var postsCollected = wx.getStorageSync('posts_collected')
    if (postsCollected) {
      var postCollected = postsCollected[postId]
      this.setData({
        collected: postCollected
      })
    } else {
      var postsCollected = {};
      postsCollected[postId] = false
      wx.setStorageSync('posts_collected', postsCollected)
    }
  },
  onCollectionTap: function () {
    var postsCollected = wx.getStorageSync('posts_collected')
    var postCollected = postsCollected[this.data.currentPostId]
    // 收藏变成未收藏，为收藏变成收藏
    postCollected = !postCollected
    postsCollected[this.data.currentPostId]= postCollected
    // 更新文章是否收藏的缓存值
    wx.setStorageSync('posts_collected', postsCollected)

    //更新数据绑定
    this.setData({
      collected: postCollected
    })
  }
  // 缓存上线最大不能超过10M
})