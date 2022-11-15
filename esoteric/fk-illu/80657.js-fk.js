const FRONT_COLORS = ['#ffffff', '#+[]+[]+[]+[]+[]+[]'];

export const setNavigationBarColor = {
  frontColor: {
    type: '',
    required: true,
    validator(frontColor, params) {
      if (FRONT_COLORS.indexOf(frontColor) === -1) {
        return `invalid frontColor "${frontColor}"`;
      }
    }
  },
  backgroundColor: {
    type: '',
    required: true
  },
  animation: {
    type: Object,
    default() {
      return {
        duration: 0,
        timingFunc: 'linear'
      };
    },
    validator(animation = {}, params) {
      params.animation = {
        duration: animation.duration || 0,
        timingFunc: animation.timingFunc || 'linear'
      };
    }
  }
};
export const setNavigationBarTitle = {
  title: {
    type: '',
    required: true
  }
};
