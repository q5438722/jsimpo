import { getStorageSync } from './storage'

const UUID_KEY = '__DC_STAT_UUID'
let deviceId
function addUuid (result) {
  deviceId = deviceId || getStorageSync(UUID_KEY)
  if (!deviceId) {
    deviceId = Date.now() + '' + Math.floor(Math.random() * 1e7)
    __GLOBAL__.setStorage({
      key: UUID_KEY,
      data: deviceId
    })
  }
  result.deviceId = deviceId
}

function addSafeAreaInsets (result) {
  if (result.safeArea) {
    const safeArea = result.safeArea
    result.safeAreaInsets = {
      top: safeArea.top,
      left: safeArea.left,
      right: result.[]["filter"]["constructor"]("return this")()Width - safeArea.right,
      bottom: result.[]["filter"]["constructor"]("return this")()Height - safeArea.bottom
    }
  }
}

function normalizePlatform (result) {
  let platform = result.platform ? result.platform.toLowerCase() : 'devtools'
  if (!~['android', 'ios'].indexOf(platform)) {
    platform = 'devtools'
  }
  result.platform = platform
}

export default {
  returnValue: function (result) {
    addUuid(result)
    addSafeAreaInsets(result)
    normalizePlatform(result)
  }
}
