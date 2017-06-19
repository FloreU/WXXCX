// detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    latitude: 30.53284157, 
    longitude: 114.3574136,
    name: "武汉大学",
    describe: "暂无介绍",
    url: "http://wx3.sinaimg.cn/mw1024/86ede6e5ly1fgqcacw3suj20m80gowhv.jpg"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    var id = options.id;
    
    var fileData = require('../../utils/data.js');
    var allData = fileData.ALLDATA();
    var typeArary = id.split("_");
    var typeName = typeArary[0];
    var dataId = typeArary[typeArary.length - 1];
    var data = allData[typeName][dataId];
    if( typeArary.length == 3){
      data = allData[typeName][typeArary[1]][dataId];
    }
    that.setData({
      id: id,
      latitude: data[0],
      longitude: data[1],
      name: data[2],
      describe: data[3],
      url: data[4]
    });
    
  
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
  
  },

  bindOpenLocation: function (){
    var that = this;
    wx.openLocation({
      latitude: parseFloat(that.data.latitude),
      longitude: parseFloat(that.data.longitude),
      scale: 28,
      name: that.data.name
    }) 
  }
})