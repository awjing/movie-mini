var postsData = require('../../../data/posts-data.js')

Page({
  onLoad: function (options) {
    var postId = options.id
    var postData = postsData.postList[postId]
    // 如果在onLoad方法中，不是异步的去执行一个数据绑定
    // 则不需要使用this.setData方法
    // 只需要对this.data赋值即可
    // this.data.postData = postData ?
    this.setData({
      postData: postData
    })
  }
})