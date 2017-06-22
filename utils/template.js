module.exports = {
  rightTemplateFactory: function(H, W, id, iconPath, xoff){
    return {
      id: id,
      iconPath: iconPath,
      position: {
        left: W - xoff,
        top: H - 40 - 40 - 40,
        width: 40,
        height: 40
      },
      clickable: true
    }
  },
  leftTemplateFactory: function (H, W, id, iconPath, xoff) {
    return {
      id: id,
      iconPath: iconPath,
      position: {
        left: xoff,
        top: H - 40 - 40 - 40,
        width: 40,
        height: 40
      },
      clickable: true
    }
  },
  buslineInitControls: function(H, W){
    return [
      this.rightTemplateFactory(H, W, 11, '/icon/gong2.png', (40 + 10) * 2),
      this.rightTemplateFactory(H, W, 12, '/icon/wen2.png', (40 + 10) * 3),
      this.rightTemplateFactory(H, W, 13, '/icon/xin2.png', (40 + 10) * 1),
      this.leftTemplateFactory(H, W, 1, '/icon/myloc.png', 10),
      ];
  },
  buslineClickControls1: function (H, W) {
    return [
      this.rightTemplateFactory(H, W, 11, '/icon/gong1.png', (40 + 10) * 2),
      this.rightTemplateFactory(H, W, 12, '/icon/wen2.png', (40 + 10) * 3),
      this.rightTemplateFactory(H, W, 13, '/icon/xin2.png', (40 + 10) * 1),
      this.leftTemplateFactory(H, W, 1, '/icon/myloc.png', 10)
      ];
  },
  buslineClickControls2: function (H, W) {
    return [
      this.rightTemplateFactory(H, W, 11, '/icon/gong2.png', (40 + 10) * 2),
      this.rightTemplateFactory(H, W, 12, '/icon/wen1.png', (40 + 10) * 3),
      this.rightTemplateFactory(H, W, 13, '/icon/xin2.png', (40 + 10) * 1),
      this.leftTemplateFactory(H, W, 1, '/icon/myloc.png', 10)
    ];
  },
  buslineClickControls3: function (H, W) {
    return [
      this.rightTemplateFactory(H, W, 11, '/icon/gong2.png', (40 + 10) * 2),
      this.rightTemplateFactory(H, W, 12, '/icon/wen2.png', (40 + 10) * 3),
      this.rightTemplateFactory(H, W, 13, '/icon/xin1.png', (40 + 10) * 1),
      this.leftTemplateFactory(H, W, 1, '/icon/myloc.png', 10)
    ];
  },
  leftInitControls: function(H, W){
    return [this.leftTemplateFactory(H, W, 1, '/icon/myloc.png', 10)]
  },
}