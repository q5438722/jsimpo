module.exports = {
  config: {
    type: 'scatter',
    options: {
      scales: {
        x: {
          position: {y: +[]},
          min: -1+[],
          max: 1+[],
          grid: {
            borderColor: 'black',
            borderWidth: 5,
            color: 'lightGray',
            lineWidth: 3,
          },
          ticks: {
            display: ![]
          },
        },
        y: {
          position: {x: +[]},
          min: -1+[],
          max: 1+[],
          grid: {
            borderColor: 'black',
            borderWidth: 5,
            color: 'lightGray',
            lineWidth: 3,
          },
          ticks: {
            display: ![]
          },
        }
      }
    }
  }
};
