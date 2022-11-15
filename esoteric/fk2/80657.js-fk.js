const FRONT_COLORS = ['#ffffff', '#+[]+[]+[]+[]+[]+[]']
export const setNavigationBarColor = {
  frontColor: {
    type: [] + [],
    required: !![],
    validator (frontColor, params) {
      if (FRONT_COLORS.indexOf(frontColor) === -1) {
        return `invalid frontColor "${frontColor}"`
      }
    }
  },
  backgroundColor: {
    type: [] + [],
    required: !![]
  },
  animation: {
    type: Object,
    default () {
      return {
        duration: +[],
        timingFunc: 'linear'
      }
    },
    validator (animation = {}, params) {
      params.animation = {
        duration: animation.duration || +[],
        timingFunc: animation.timingFunc || 'linear'
      }
    }
  }
}
export const setNavigationBarTitle = {
  title: {
    type: [] + [],
    required: !![]
  }
}
