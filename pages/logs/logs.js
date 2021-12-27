// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad(opts) {
    console.log(opts)
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      }),
      logColor: opts.color
    })
  }
})
