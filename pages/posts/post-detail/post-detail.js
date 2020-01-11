var postsData = require('../../../data/posts-data.js')

Page({
  data: {
    isPlayingMusic: false
  },
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
    this.showToast(postsCollected, postCollected)
  },
  // showModal: function (postsCollected, postCollected) {
  //   var that = this
  //   wx.showModal({
  //     title: '收藏',
  //     content: postCollected ? '收藏该文章？' : '取消收藏该文章？',
  //     showCancel: "true",
  //     cancelText: "取消",
  //     cancelColor: "#333",
  //     confirmText: "确认",
  //     confirmColor: "#405f80",
  //     success: function (res) {
  //       if  (res.confirm) {
  //         // 更新文章是否收藏的缓存值
  //         wx.setStorageSync('posts_collected', postsCollected)

  //         //更新数据绑定
  //         that.setData({
  //           collected: postCollected
  //         })
  //       }
  //     }
  //   })
  // },
  showToast: function (postsCollected, postCollected) {
    // 更新文章是否收藏的缓存值
    wx.setStorageSync('posts_collected', postsCollected)

    //更新数据绑定
    this.setData({
      collected: postCollected
    })
    wx.showToast({
      title: postCollected ? '收藏成功': '取消成功',
      duration: 1000,
      icon: 'success'
    })
  },
  onShareTap: function (event) {
    var itemList = [
      '分享给微信好友',
      '分享到朋友圈',
      '分享到qq',
      '分享到微博'
    ]
    wx.showActionSheet({
      itemList: itemList,
      itemColor: "#405f80",
      success (res) {
        // res.cancel 用户是不是点击了取消按钮
        // res.tapIndex 数组元素的序号，从0开始
        wx.showModal({
          title: '用户' + itemList[res.tapIndex],
          content: '用户是否取消' + res.cancel + '现在无法实现分享功能'
        })
      },
      fail (res) {
        console.log(res.errMsg)
      }
    })
  },
  onMusicTap: function (event) {
    var isPlayingMusic = this.data.isPlayingMusic
    var currentPostId = this.data.currentPostId
    var postData = postsData.postList[currentPostId]
    if (isPlayingMusic) {
      wx.pauseBackgroundAudio()
      this.setData({
        isPlayingMusic: false
      })
    } else {
      wx.playBackgroundAudio({
        dataUrl: postData.music.url,
        title: postData.music.title,
        coverImgUrl: postData.music.coverImg
      })
      this.setData({
        isPlayingMusic: true
      })
    }

  }
  // 缓存上线最大不能超过10M
})