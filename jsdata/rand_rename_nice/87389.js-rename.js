'use strict';
module.exports = {
  config : {
    type : "line",
    data : {
      datasets : [{
        data : [10, 5, 0, 25, 78, -10]
      }],
      labels : ["tick1", "tick2", "tick3", "tick4", "tick5", "tick6"]
    },
    options : {
      layout : {
        padding : function(styles) {
          const stringOrNumberPropType = styles.chart.width * .1;
          const virtualBorderColor = styles.chart.height * .1;
          return {
            top : virtualBorderColor,
            right : stringOrNumberPropType,
            bottom : virtualBorderColor,
            left : stringOrNumberPropType
          };
        }
      },
      plugins : {
        legend : false
      },
      scales : {
        x : {
          type : "category",
          ticks : {
            maxRotation : 0,
            autoSkip : false
          }
        },
        y : {
          type : "linear",
          position : "right"
        }
      }
    }
  },
  options : {
    spriteText : true,
    canvas : {
      height : 150,
      width : 512
    }
  }
};

