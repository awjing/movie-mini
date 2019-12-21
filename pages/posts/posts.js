// pages/posts/posts.js
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
    var post_content = [{
      date: 'Dec 21 2019',
      title: '我是小静静～',
      post_img: '/images/post/crab.png',
      content: '最近正在减肥，然后饿了，想吃火鸡面、螺狮粉、烤肉、麻辣烫、麻婆豆腐、油泼面、蘸水面、凉皮、肉夹馍、蒸饺、炸鸡等等，哈哈哈哈哈哈哈哈哈哈',
      view_num: '112',
      collect_num: '96',
      author_img: '/images/avatar/2.png',
      text_condition: true
    },
    {
      date: 'Dec 21 2019',
      title: '我是小静静～',
      post_img: '/images/post/crab.png',
      content: '最近正在减肥，然后饿了，想吃火鸡面、螺狮粉、烤肉、麻辣烫、麻婆豆腐、油泼面、蘸水面、凉皮、肉夹馍、蒸饺、炸鸡等等，哈哈哈哈哈哈哈哈哈哈',
      view_num: '112',
      collect_num: '96',
      author_img: '/images/avatar/2.png',
      text_condition: true
    }]
    this.setData({post_content})
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

  }
})