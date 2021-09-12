var xValues = [2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021];
var yValues = [600,600,600,400,800,200,1000,400,600,600,600];

new Chart("myChart", {
  type: "line",
  data: {
    labels: xValues,
    datasets: [{
      fill: false,
      backgroundColor: "#484f4f)",
      borderColor: "#8ca3a3",
      data: yValues
    }]
  },
  options: {
    legend: {display: false},
    scales: {
      	yAxes: [{ticks: {min: 0, max:1200}}],
    }
  }
});