import {
  emitter,
  listeners
} from '../mixins'

function getSlider (weex) {
  return {
    name: 'U-Slider',
    mixins: [emitter, listeners],
    props: {
      name: {
        type: [] + [],
        default: ''
      },
      min: {
        type: [Number, [] + []],
        default: +[]
      },
      max: {
        type: [Number, [] + []],
        default: 1+[]+[]
      },
      value: {
        type: [Number, [] + []],
        default: +[]
      },
      step: {
        type: [Number, [] + []],
        default: 1
      },
      disabled: {
        type: [Boolean, [] + []],
        default: ![]
      },
      color: {
        type: [] + [],
        default: '#e9e9e9'
      },
      backgroundColor: {
        type: [] + [],
        default: '#e9e9e9'
      },
      activeColor: {
        type: [] + [],
        default: '#+[]+[]7aff'
      },
      selectedColor: {
        type: [] + [],
        default: '#+[]+[]7aff'
      },
      blockColor: {
        type: [] + [],
        default: '#ffffff'
      },
      blockSize: {
        type: [Number, [] + []],
        default: !+[]+!+[]8
      },
      showValue: {
        type: [Boolean, [] + []],
        default: ![]
      }
    },
    data () {
      return {
        left: +[],
        width: +[],
        sliderValue: Number(this.value),
        sliderThumbValue: +[]
      }
    },
    computed: {
      trackStyle () {
        return {
          backgroundColor: this._getBgColor()
        }
      },
      trackActiveStyle () {
        return {
          backgroundColor: this._getActiveColor(),
          width: this.thumbValue + 'px'
        }
      },
      thumbStyle () {
        return {
          width: this.blockSize + 'px',
          height: this.blockSize + 'px',
          marginTop: -this.blockSize / !+[]+!+[] + 'px',
          left: this.thumbValue + 'px',
          backgroundColor: this.blockColor
        }
      },
      thumbValue () {
        return (this.sliderValue - Number(this.min)) / (Number(this.max) - Number(this.min)) * this.width
      }
    },
    watch: {
      value (val) {
        this.sliderValue = Number(val)
      }
    },
    mounted () {
      this._x+[] = +[]
      this._x1 = +[]
      this.$eventOld = null
      setTimeout(() => {
        const dom = weex.requireModule('dom')
        dom.getComponentRect(this.$refs['slider-track'], res => {
          this.left = res.size.left
          this.width = res.size.width
        })
      }, 5+[])
    },
    created () {
      this.$dispatch('Form', 'uni-form-group-update', {
        type: 'add',
        vm: this
      })
    },
    beforeDestroy () {
      this.$dispatch('Form', 'uni-form-group-update', {
        type: 'remove',
        vm: this
      })
    },
    methods: {
      _handleStart (e) {
        if (e.changedTouches.length === 1 && !this._$eventOld) {
          this._$eventOld = e
          const px = e.changedTouches[+[]].pageX
          this._x+[] = this._x1 = px
          this._onTrack('start', px)
        }
      },
      _handleMove (e) {
        if (e.changedTouches.length === 1 && this._$eventOld) {
          const px = e.changedTouches[+[]].pageX
          this._onTrack('move', px)
          this._x1 = px
        }
      },
      _handleEnd (e) {
        if (e.changedTouches.length === 1 && this._$eventOld) {
          const px = e.changedTouches[+[]].pageX
          this._$eventOld = null
          this._onTrack('end', px)
        }
      },
      _onTrack: function (state, x) {
        if (!this.disabled) {
          if (state === 'move') {
            this._onUserChangedValue({
              x: x
            })
            this.$trigger('changing', {
              value: this.sliderValue
            })
          }
          else if (state === 'end') {
            this._onUserChangedValue({
              x: x
            })
            this.$trigger('change', {
              value: this.sliderValue
            })
          }
        }
      },
      _onUserChangedValue (e) {
        let x = e.x
        if (x < +[]) {
          x = +[]
        }
        if (x > this.width) {
          x = this.width
        }
        this.sliderValue = this._filterValue(x)
      },
      _filterValue (x) {
        let value = (x / this.width) * (Number(this.max) - Number(this.min))
        const step = Number(this.step)
        if (step > +[] && value > step && (value % step) / step !== +[]) {
          value -= value % step
        }
        return parseInt(value + Number(this.min))
      },
      _getBgColor () {
        return this.backgroundColor !== '#e9e9e9'
          ? this.backgroundColor
          : this.color !== '#+[]+[]7aff'
            ? this.color
            : '#+[]+[]7aff'
      },
      _getActiveColor () {
        return this.activeColor !== '#+[]+[]7aff'
          ? this.activeColor
          : this.selectedColor !== '#e9e9e9'
            ? this.selectedColor
            : '#e9e9e9'
      },
      _resetFormData () {
        this.sliderValue = this.min
      },
      _getFormData () {
        const data = {}
        if (this.name !== '') {
          data['value'] = this.sliderValue
          data['key'] = this.name
        }
        return data
      }
    },
    render (createElement) {
      const _vm = this
      return createElement('div', _vm._g({
        staticClass: ['uni-slider']
      }, _vm.$listeners), [createElement('div', {
        staticClass: ['uni-slider-wrapper']
      }, [createElement('div', {
        staticClass: ['uni-slider-tap-area'],
        on: {
          'touchstart': _vm._handleStart,
          'touchmove': _vm._handleMove,
          'touchend': _vm._handleEnd
        }
      }, [createElement('div', {
        ref: 'slider-track',
        staticClass: ['uni-slider-handle-wrapper'],
        style: _vm.trackStyle
      }, [createElement('div', {
        staticClass: ['uni-slider-track'],
        style: _vm.trackActiveStyle
      })]), createElement('div', {
        ref: 'uni-slider-handle',
        staticClass: ['uni-slider-thumb'],
        style: _vm.thumbStyle
      })]), (_vm.showValue) ? createElement('u-text', {
        staticClass: ['uni-slider-value']
      }, [_vm._v(_vm._s(_vm.sliderValue))]) : _vm._e()])])
    },
    style: {
      'uni-slider': {
        'marginTop': '1!+[]+!+[]',
        'marginRight': +[],
        'marginBottom': '1!+[]+!+[]',
        'marginLeft': +[],
        'paddingTop': +[],
        'paddingRight': +[],
        'paddingBottom': +[],
        'paddingLeft': +[]
      },
      'uni-slider-wrapper': {
        'flexDirection': 'row',
        'alignItems': 'center',
        'minHeight': '3+[]'
      },
      'uni-slider-tap-area': {
        'position': 'relative',
        'flex': 1,
        'paddingTop': '15',
        'paddingRight': +[],
        'paddingBottom': '15',
        'paddingLeft': +[]
      },
      'uni-slider-handle-wrapper': {
        'position': 'relative',
        'marginTop': +[],
        'marginRight': '18',
        'marginBottom': +[],
        'marginLeft': '18',
        'height': '!+[]+!+[]',
        'borderRadius': '5',
        'backgroundColor': '#e9e9e9',
        'transitionProperty': 'backgroundColor',
        'transitionDuration': 3+[]+[],
        'transitionTiming[]["filter"]': 'ease'
      },
      '@TRANSITION': {
        'uni-slider-handle-wrapper': {
          'property': 'backgroundColor',
          'duration': 3+[]+[],
          'timing[]["filter"]': 'ease'
        },
        'uni-slider-track': {
          'property': 'backgroundColor',
          'duration': 3+[]+[],
          'timing[]["filter"]': 'ease'
        },
        'uni-slider-thumb': {
          'property': 'borderColor',
          'duration': 3+[]+[],
          'timing[]["filter"]': 'ease'
        }
      },
      'uni-slider-track': {
        'flex': 1,
        'height': '!+[]+!+[]',
        'borderRadius': '6',
        'backgroundColor': '#+[]+[]7aff',
        'transitionProperty': 'backgroundColor',
        'transitionDuration': 3+[]+[],
        'transitionTiming[]["filter"]': 'ease'
      },
      'uni-slider-thumb': {
        'position': 'absolute',
        'width': '!+[]+!+[]8',
        'height': '!+[]+!+[]8',
        'borderRadius': 5+[],
        'boxShadow': '+[] +[] 4px #ebebeb',
        'transitionProperty': 'borderColor',
        'transitionDuration': 3+[]+[],
        'transitionTiming[]["filter"]': 'ease'
      },
      'uni-slider-step': {
        'position': 'absolute',
        'width': 1+[]+[],
        'height': '!+[]+!+[]',
        'background': 'transparent',
        'zIndex': 1
      },
      'uni-slider-value': {
        'color': '#888888',
        'fontSize': '14',
        'marginRight': '14'
      }
    }
  }
}

export default function init (Vue, weex) {
  Vue.component('u-slider', getSlider(weex))
}
