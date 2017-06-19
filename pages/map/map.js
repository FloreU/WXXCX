// map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    Height: 0,
    scale: 16,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [],
    circles: [],
    tapColor: ["#1472e0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0"],
    tapSize: [34, 30, 30, 30, 30, 30, 30, 30],
    view:{
      Height: 755
    }
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  buslines:[],
  template: {},
  onLoad: function (options) {
    var _this = this;
    var DXHL=[];
    var fileData = require('../../utils/data.js');
    _this.template = require('../../utils/template.js');
    _this.setData({
      controls: _this.template.leftInitControls()
    });
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          view: {
            Height: res.windowHeight - res.windowWidth / 750 * 80,
          }
        })
      }
    }),
    _this.setData({
      latitude: 30.536408589564083,
      longitude: 114.36216115951538,
      markers: fileData.JIUYE()
    });
    // wx.getLocation({
    //   type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标
    //   success: function (res) {
    //     _this.setData({
    //       latitude: res.latitude,
    //       longitude: res.longitude,
    //       // markers: fileData.GXB_M(),
    //       // polyline: fileData.GXB_L()
    //     });
    //   }
    // })
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

  /**
   * 点击标记点运行
   */
  markertap(e){
    var id = e.markerId;
    wx.navigateTo({
      url: '../detail/detail?id=' + id
    })
  },

  controltap(e) {
    var that = this;
    var fileData = require('../../utils/data.js');
    if (e.controlId === 1){
      wx.getLocation({
        type: 'gcj02',
        success: function (res) {
          that.setData({
            latitude: res.latitude,
            longitude: res.longitude,
            scale: 16,
          });
        }
      })
    };
    if (e.controlId === 11) {
      that.setData({
        markers: fileData.GXB_M(),
        polyline: fileData.GXB_L(),
        controls: that.template.buslineClickControls1()
      });
    };
    if (e.controlId === 12) {
      that.setData({
        markers: fileData.WLXB_M(),
        polyline: fileData.WLXB_L(),
        controls: that.template.buslineClickControls2()
      });
    };
    if (e.controlId === 13) {
      that.setData({
        markers: fileData.DXH_M(),
        polyline: fileData.DXH_L(),
        controls: that.template.buslineClickControls3()
      });
    };
  },
  swichNav(e){
    var fileData = require('../../utils/data.js');
    var id = Number(e.currentTarget.dataset.current);
    var that = this;
    var colorArray = ["#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0"];
    var sizeArray = [30, 30, 30, 30, 30, 30, 30, 30];
    colorArray[id] = "#1472e0";
    sizeArray[id] = 34;
    that.setData({
      tapColor: colorArray,
      tapSize: sizeArray
    });
    var showBusline = function(){
      that.setData({
        controls: that.template.buslineClickControls3()
      });
    };
    var hideBusline = function(){
      that.setData({
        controls: that.template.leftInitControls(),
        polyline: []
      });
    }
    switch(id){
      case 0: hideBusline(); that.setData({ markers: fileData.JIUYE() }); break;
      case 1: hideBusline(); that.setData({ markers: fileData.BAOGAOTING() }); break;
      case 2: hideBusline(); that.setData({ markers: fileData.TIYUGUAN() }); break;
      case 3: hideBusline(); that.setData({ markers: fileData.SCHOOLS() }); break;
      case 4: hideBusline(); that.setData({ markers: fileData.SCHOOLS_GATE() }); break;
      case 5: hideBusline(); showBusline(); that.setData({ markers: fileData.DXH_M(), polyline: fileData.DXH_L()}); break;
      case 6: hideBusline(); that.setData({ markers: fileData.DITIE() }); break;
      case 7: showBusline(); break;
    }
  }
})