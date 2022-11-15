module.exports = {
  config: {
    type: 'scatter',
    options: {
      scales: {
        x: {
          position: { y: 0 },
          min: '-1',
          max: '1',
          grid: {
            borderColor: 'black',
            borderWidth: 5,
            color: 'lightGray',
            lineWidth: 3
          },
          ticks: {
            display: false
          }
        },
        y: {
          position: { x: 0 },
          min: '-1',
          max: '1',
          grid: {
            borderColor: 'black',
            borderWidth: 5,
            color: 'lightGray',
            lineWidth: 3
          },
          ticks: {
            display: false
          }
        }
      }
    }
  }
};
