

  // 增加斑马关键数据监控
  if (!staticConfig.service.categories || !staticConfig.notice) {
    if (window.JSTracker2) {
      window.JSTracker2.push({
          msg: 'zebra staticData Lost',
          type: 'custom',
          url: 'https://jstracker.www.taobao.com/2021/zebraerror',
          sampling: 1
      })
    }
  }
