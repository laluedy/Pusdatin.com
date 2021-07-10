/* globals Chart:false, feather:false */

(function () {
  "use strict";

  feather.replace({ "aria-hidden": "true" });

  // Graphs
  var ctx = document.getElementById("myChart");
  // eslint-disable-next-line no-unused-vars
  var myChart = new Chart(ctx, {
    type: "line",
    data: {
      labels: ["Bandung", "Bantul", "Jombang", "Lombok Tengah", "Ngawi", "Serang", "Situbondo", "Sukabumi"],
      datasets: [
        {
          data: [21797.3, 434.6, 37348, 3593.55, 10867.2, 5062.2, 1320, 4095.79],
          lineTension: 0,
          backgroundColor: "transparent",
          borderColor: "#007bff",
          borderWidth: 4,
          pointBackgroundColor: "#007bff",
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: false,
            },
          },
        ],
      },
      legend: {
        display: false,
      },
    },
  });
})();
