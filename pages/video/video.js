var req = require('../../utils/config.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    pages: 1,
    content: [],
    isform: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.showLoading({
      title: '正在加载',
    });
    var self = this;
    wx.request({
      url: req.url,
      data: {
        page: this.data.pages,
        type: 41
      },
      success: function (e) {
        var content_list = [];
        content_list = self.data.content.concat(e.data.showapi_res_body.pagebean.contentlist);
        self.setData({
          content: content_list,
          pages: self.data.pages + 1
        });
        wx.hideLoading();
      }
    })

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
    wx.showNavigationBarLoading();
    this.setData({
      pages: 1,
      content: []
    })
    this.onLoad();
    setTimeout(function () {
      wx.hideNavigationBarLoading()
      wx.stopPullDownRefresh()
    }, 1500);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    let that = this;
    that.onLoad();
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '每日一笑哈哈哈...，今天你笑了吗？',
      imageUrl: '/images/logo.png'
    }
  },
    /**
   * 长按识别二维码
   */
  sb: function (e) {
    wx.previewImage({
      urls: ['https://mmbiz.qpic.cn/mmbiz_jpg/g0ezR6PgKenEEraZmoQx1vmtIG8x7vqhSzeu1awia1DES6ejxXZXx7V4DHQAibv1UgAk6GsdNmJAZptf2J5PxtGA/0?wx_fmt=jpeg'],
    })
  }
})