// map.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    array: ["哲学学院", "国学院", "文学院", "外国语言文学学院", "新闻与传播学院", "艺术学院", "历史学院", "经济与管理学院", "法学院", "马克思主义学院", "社会学系", "政治与公共管理学院", "教育科学研究院", "信息管理学院", "国际教育学院", "数学与统计学院", "物理科学与技术学院", "化学与分子科学学院", "生命科学学院", "资源与环境科学学院", "高等研究院", "动力与机械学院", "电气工程学院", "城市设计学院", "土木建筑工程学院", "水利水电学院", "电子信息学院", "计算机学院", "国际软件学院", "测绘学院", "遥感信息工程学院", "印刷与包装系", "医学研究院", "基础医学院", , "健康学院", "第一临床医学院", "第二临床医学院", "口腔医学院", "药学院", "医学职业技术学院", "医学部机关"],
    index: 0,
    Height: 0,
    scale: 16,
    latitude: "",
    longitude: "",
    markers: [],
    controls: [],
    circles: [],
    tapColor: ["#1472e0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0"],
    tapSize: [34, 30, 30, 30, 30, 30, 30, 30, 30],
    view:{
      Height: 755
    },
    windowHeight: 603,
    windowWidth: 375,
    mylocLat: "",
    mylocLong: "",
    mapCtx: {}
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
    wx.getSystemInfo({
      success: function (res) {
        //设置map高度，根据当前设备宽高满屏显示
        _this.setData({
          controls: _this.template.leftInitControls(res.windowHeight, res.windowWidth)
        });
        _this.setData({
          windowHeight: res.windowHeight,
          windowWidth: res.windowWidth,
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
    _this.data.mapCtx = wx.createMapContext('map');
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
  bindPickerChange: function (e) {
    var that = this;
    var fileData = require('../../utils/data.js');
    var school = fileData.SCHOOLS()[e.detail.value];
    that.setData({
      index: e.detail.value,
      markers: [school],
      latitude: school.latitude,
      longitude: school.longitude,   
    });
  },
  controltap(e) {
    var that = this;
    var H = that.data.windowHeight;
    var W = that.data.windowWidth;
    var fileData = require('../../utils/data.js');
    if (e.controlId === 1){
      // wx.getLocation({
      //   type: 'gcj02',
      //   success: function (res) {
      //     that.setData({
      //       mylocLat: res.latitude,
      //       mylocLong: res.longitude
      //     });
      //   },
      //   fail: function (res){
      //     console.log("fail");
      //   },
      //   complete: function (res) {
      //     var lat = that.data.mylocLat ;
      //     var long = that.data.mylocLong ;
      //     that.setData({
      //       latitude: lat,
      //       longitude: long,
      //       scale: 16,
      //     });
      //   }
      // })
      that.data.mapCtx.moveToLocation();
    };
    if (e.controlId === 11) {
      that.setData({
        markers: fileData.GXB_M(),
        polyline: fileData.GXB_L(),
        controls: that.template.buslineClickControls1(H, W)
      });
    };
    if (e.controlId === 12) {
      that.setData({
        markers: fileData.WLXB_M(),
        polyline: fileData.WLXB_L(),
        controls: that.template.buslineClickControls2(H, W)
      });
    };
    if (e.controlId === 13) {
      that.setData({
        markers: fileData.DXH_M(),
        polyline: fileData.DXH_L(),
        controls: that.template.buslineClickControls3(H, W)
      });
    };
  },
  swichNav(e){
    var fileData = require('../../utils/data.js');
    var id = Number(e.currentTarget.dataset.current);
    var that = this;
    var colorArray = ["#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0", "#7BB2F0"];
    var sizeArray = [30, 30, 30, 30, 30, 30, 30, 30];
    var H = that.data.windowHeight;
    var W = that.data.windowWidth;
    colorArray[id] = "#1472e0";
    sizeArray[id] = 34;
    that.setData({
      tapColor: colorArray,
      tapSize: sizeArray
    });
    var showBusline = function(){
      that.setData({
        controls: that.template.buslineClickControls3(H, W)
      });
    };
    var hideBusline = function(){
      that.setData({
        controls: that.template.leftInitControls(H, W),
        polyline: []
      });
    }
    switch(id){
      case 0: hideBusline(); that.setData({ markers: fileData.JIUYE() }); break;
      case 1: hideBusline(); that.setData({ markers: fileData.BAOGAOTING() }); break;
      case 5: hideBusline(); that.setData({ markers: fileData.TIYUGUAN() }); break;
      case 2: hideBusline(); break;
      case 3: hideBusline(); that.setData({ markers: fileData.SCHOOLS_GATE() }); break;
      case 4: hideBusline(); showBusline(); that.setData({ markers: fileData.DXH_M(), polyline: fileData.DXH_L()}); break;
      case 6: hideBusline(); that.setData({ markers: fileData.DITIE() }); break;
      case 7: hideBusline();  break;
    }
  }
})