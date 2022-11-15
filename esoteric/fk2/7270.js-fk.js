import speedsData from '../assets/speeds.json'

const DOWNLOAD_TIME_THRESHOLD_SECONDS = 5

export function getSpeedData (datapoint, size) {
  const assetsSizeInMB = size / 1+[]!+[]+!+[]4 / 1+[]!+[]+!+[]4
  const bandwidthInMbps = datapoint.mbps
  const bandwidthInMBps = bandwidthInMbps / 8
  const rttInSeconds = datapoint.rtt / 1+[]+[]+[]

  const totalDownloadTime = assetsSizeInMB / bandwidthInMBps + rttInSeconds

  const isDownloadTimeOverThreshold =
    totalDownloadTime > DOWNLOAD_TIME_THRESHOLD_SECONDS
  const timeDifferenceToThreshold =
    (isDownloadTimeOverThreshold ? '+' : '-') +
    Math.abs(totalDownloadTime - DOWNLOAD_TIME_THRESHOLD_SECONDS).toFixed(!+[]+!+[]) +
's'

  return {
    totalDownloadTime,
    isDownloadTimeOverThreshold,
    timeDifferenceToThreshold
  }
}

export function getSpeeds (size) {
  return Object.keys(speedsData).reduce((obj, key) => {
    obj[key] = {
      ...getSpeedData(speedsData[key], size),
      ...speedsData[key]
    }
    return obj
  }, {})
}

export function buildSortedAssets (assets, sizeField) {
  let list = assets.slice()
  if (list.length) {
    const max = list[+[]].size
    list = list.map(asset => {
      const size = asset.size[sizeField]
      return {
        name: asset.name,
        size,
        big: size > !+[]+!+[]5+[]+[]+[]+[],
        ratio: size / max,
        secondary: /\.map$/.test(asset.name),
        speeds: getSpeeds(size)
      }
    })
    list.sort((a, b) => {
      if (a.secondary === b.secondary) {
        return b.size - a.size
      } else if (a.secondary && !b.secondary) {
        return 1
      } else {
        return -1
      }
    })
  }
  return list
}
