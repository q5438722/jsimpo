'use strict';
import{
  emitter as emitter,
  listeners as listeners
}from "../mixins";
function init(context) {
  return {
    name : "U-Slider",
    mixins : [emitter, listeners],
    props : {
      name : {
        type : String,
        default : ""
      },
      min : {
        type : [Number, String],
        default : 0
      },
      max : {
        type : [Number, String],
        default : 100
      },
      value : {
        type : [Number, String],
        default : 0
      },
      step : {
        type : [Number, String],
        default : 1
      },
      disabled : {
        type : [Boolean, String],
        default : false
      },
      color : {
        type : String,
        default : "#e9e9e9"
      },
      backgroundColor : {
        type : String,
        default : "#e9e9e9"
      },
      activeColor : {
        type : String,
        default : "#007aff"
      },
      selectedColor : {
        type : String,
        default : "#007aff"
      },
      blockColor : {
        type : String,
        default : "#ffffff"
      },
      blockSize : {
        type : [Number, String],
        default : 28
      },
      showValue : {
        type : [Boolean, String],
        default : false
      }
    },
    data() {
      return {
        left : 0,
        width : 0,
        sliderValue : Number(this.value),
        sliderThumbValue : 0
      };
    },
    computed : {
      trackStyle() {
        return {
          backgroundColor : this._getBgColor()
        };
      },
      trackActiveStyle() {
        return {
          backgroundColor : this._getActiveColor(),
          width : this.thumbValue + "px"
        };
      },
      thumbStyle() {
        return {
          width : this.blockSize + "px",
          height : this.blockSize + "px",
          marginTop : -this.blockSize / 2 + "px",
          left : this.thumbValue + "px",
          backgroundColor : this.blockColor
        };
      },
      thumbValue() {
        return (this.sliderValue - Number(this.min)) / (Number(this.max) - Number(this.min)) * this.width;
      }
    },
    watch : {
      value(e) {
        this.sliderValue = Number(e);
      }
    },
    mounted() {
      this._x0 = 0;
      this._x1 = 0;
      this.$eventOld = null;
      setTimeout(() => {
        const dom = context.requireModule("dom");
        dom.getComponentRect(this.$refs["slider-track"], (e) => {
          this.left = e.size.left;
          this.width = e.size.width;
        });
      }, 50);
    },
    created() {
      this.$dispatch("Form", "uni-form-group-update", {
        type : "add",
        vm : this
      });
    },
    beforeDestroy() {
      this.$dispatch("Form", "uni-form-group-update", {
        type : "remove",
        vm : this
      });
    },
    methods : {
      _handleStart(event) {
        if (event.changedTouches.length === 1 && !this._$eventOld) {
          this._$eventOld = event;
          const x0 = event.changedTouches[0].pageX;
          this._x0 = this._x1 = x0;
          this._onTrack("start", x0);
        }
      },
      _handleMove(event) {
        if (event.changedTouches.length === 1 && this._$eventOld) {
          const x0 = event.changedTouches[0].pageX;
          this._onTrack("move", x0);
          this._x1 = x0;
        }
      },
      _handleEnd(event) {
        if (event.changedTouches.length === 1 && this._$eventOld) {
          const ev_raw_x = event.changedTouches[0].pageX;
          this._$eventOld = null;
          this._onTrack("end", ev_raw_x);
        }
      },
      _onTrack : function(type, x0) {
        if (!this.disabled) {
          if (type === "move") {
            this._onUserChangedValue({
              x : x0
            });
            this.$trigger("changing", {
              value : this.sliderValue
            });
          } else {
            if (type === "end") {
              this._onUserChangedValue({
                x : x0
              });
              this.$trigger("change", {
                value : this.sliderValue
              });
            }
          }
        }
      },
      _onUserChangedValue(objectToMeasure) {
        let x = objectToMeasure.x;
        if (x < 0) {
          x = 0;
        }
        if (x > this.width) {
          x = this.width;
        }
        this.sliderValue = this._filterValue(x);
      },
      _filterValue(tileNum) {
        let i = tileNum / this.width * (Number(this.max) - Number(this.min));
        const size = Number(this.step);
        if (size > 0 && i > size && i % size / size !== 0) {
          i = i - i % size;
        }
        return parseInt(i + Number(this.min));
      },
      _getBgColor() {
        return this.backgroundColor !== "#e9e9e9" ? this.backgroundColor : this.color !== "#007aff" ? this.color : "#007aff";
      },
      _getActiveColor() {
        return this.activeColor !== "#007aff" ? this.activeColor : this.selectedColor !== "#e9e9e9" ? this.selectedColor : "#e9e9e9";
      },
      _resetFormData() {
        this.sliderValue = this.min;
      },
      _getFormData() {
        const formData = {};
        if (this.name !== "") {
          formData["value"] = this.sliderValue;
          formData["key"] = this.name;
        }
        return formData;
      }
    },
    render(h) {
      const _vm = this;
      return h("div", _vm._g({
        staticClass : ["uni-slider"]
      }, _vm.$listeners), [h("div", {
        staticClass : ["uni-slider-wrapper"]
      }, [h("div", {
        staticClass : ["uni-slider-tap-area"],
        on : {
          touchstart : _vm._handleStart,
          touchmove : _vm._handleMove,
          touchend : _vm._handleEnd
        }
      }, [h("div", {
        ref : "slider-track",
        staticClass : ["uni-slider-handle-wrapper"],
        style : _vm.trackStyle
      }, [h("div", {
        staticClass : ["uni-slider-track"],
        style : _vm.trackActiveStyle
      })]), h("div", {
        ref : "uni-slider-handle",
        staticClass : ["uni-slider-thumb"],
        style : _vm.thumbStyle
      })]), _vm.showValue ? h("u-text", {
        staticClass : ["uni-slider-value"]
      }, [_vm._v(_vm._s(_vm.sliderValue))]) : _vm._e()])]);
    },
    style : {
      "uni-slider" : {
        marginTop : "12",
        marginRight : 0,
        marginBottom : "12",
        marginLeft : 0,
        paddingTop : 0,
        paddingRight : 0,
        paddingBottom : 0,
        paddingLeft : 0
      },
      "uni-slider-wrapper" : {
        flexDirection : "row",
        alignItems : "center",
        minHeight : "30"
      },
      "uni-slider-tap-area" : {
        position : "relative",
        flex : 1,
        paddingTop : "15",
        paddingRight : 0,
        paddingBottom : "15",
        paddingLeft : 0
      },
      "uni-slider-handle-wrapper" : {
        position : "relative",
        marginTop : 0,
        marginRight : "18",
        marginBottom : 0,
        marginLeft : "18",
        height : "2",
        borderRadius : "5",
        backgroundColor : "#e9e9e9",
        transitionProperty : "backgroundColor",
        transitionDuration : 300,
        transitionTimingFunction : "ease"
      },
      "@TRANSITION" : {
        "uni-slider-handle-wrapper" : {
          property : "backgroundColor",
          duration : 300,
          timingFunction : "ease"
        },
        "uni-slider-track" : {
          property : "backgroundColor",
          duration : 300,
          timingFunction : "ease"
        },
        "uni-slider-thumb" : {
          property : "borderColor",
          duration : 300,
          timingFunction : "ease"
        }
      },
      "uni-slider-track" : {
        flex : 1,
        height : "2",
        borderRadius : "6",
        backgroundColor : "#007aff",
        transitionProperty : "backgroundColor",
        transitionDuration : 300,
        transitionTimingFunction : "ease"
      },
      "uni-slider-thumb" : {
        position : "absolute",
        width : "28",
        height : "28",
        borderRadius : 50,
        boxShadow : "0 0 4px #ebebeb",
        transitionProperty : "borderColor",
        transitionDuration : 300,
        transitionTimingFunction : "ease"
      },
      "uni-slider-step" : {
        position : "absolute",
        width : 100,
        height : "2",
        background : "transparent",
        zIndex : 1
      },
      "uni-slider-value" : {
        color : "#888888",
        fontSize : "14",
        marginRight : "14"
      }
    }
  };
}
export default function use(next, api) {
  next.component("u-slider", init(api));
}
;
