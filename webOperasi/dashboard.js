Highcharts.chart("container", {
  data: {
    table: "datatable",
  },
  chart: {
    type: "column",
  },
  title: {
    text: "Grafik Capaian Operasi Pengamanan Kawasan",
  },
  yAxis: {
    allowDecimals: false,
    title: {
      text: "Kegiatan",
    },
  },
  tooltip: {
    formatter: function () {
      return "<b>" + this.series.name + "</b><br/>" + this.point.y + "#" + this.point.name.toLowerCase();
    },
  },
});
