var colors = ["red", "green", "blue", "cyan", "magenta"];

Plotly.d3.csv("/data_csv_plotly.csv", function (err, rows) {
  function unpack(rows, key) {
    return rows.map(function (row) {
      return row[key];
    });
  }

  var CapacitorA = {
    x: unpack(rows, "x1"),
    y: unpack(rows, "y1"),
    z: unpack(rows, "z1"),
    mode: "markers",
    marker: {
      color: "red",
      size: 7,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 2,
      },
      opacity: 0.8,
    },
    type: "scatter3d",
  };

  var CapacitorB = {
    x: unpack(rows, "x2"),
    y: unpack(rows, "y2"),
    z: unpack(rows, "z2"),
    mode: "markers",
    marker: {
      color: "green",
      size: 7,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 2,
      },
      opacity: 0.2,
    },
    type: "scatter3d",
  };

  var CapacitorC = {
    x: unpack(rows, "x3"),
    y: unpack(rows, "y3"),
    z: unpack(rows, "z3"),
    mode: "markers",
    marker: {
      color: "blue",
      size: 7,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 2,
      },
      opacity: 0.2,
    },
    type: "scatter3d",
  };

  var CapacitorD = {
    x: unpack(rows, "x4"),
    y: unpack(rows, "y4"),
    z: unpack(rows, "z4"),
    mode: "markers",
    marker: {
      color: "cyan",
      size: 7,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 2,
      },
      opacity: 0.2,
    },
    type: "scatter3d",
  };

  var CapacitorE = {
    x: unpack(rows, "x5"),
    y: unpack(rows, "y5"),
    z: unpack(rows, "z5"),
    mode: "markers",
    marker: {
      color: "magenta",
      size: 7,
      symbol: "circle",
      line: {
        color: "rgb(204, 204, 204)",
        width: 2,
      },
      opacity: 0.2,
    },
    type: "scatter3d",
  };

  var data = [CapacitorA, CapacitorB, CapacitorC, CapacitorD, CapacitorE];
  var layout2 = {
    title: "Sales Growth",
    scene: {
      xaxis: {
        type: "log",
        range: [0, 2.3],
      },
      yaxis: {
        range: [0, 0.6],
      },
      zaxis: {
        range: [-60, -10],
      },
    },
    //     yaxis: {
    //       title: 'Percent',
    //       showline: false
    //     },

    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },

    width: "1500",
    height: "1500",
  };

  var layout = {
    title: "Sales Growth",
    scene: {
      xaxis: {
        type: "log",
        range: [0, 4],
      },
      yaxis: {
        range: [0, 0.6],
      },
      zaxis: {
        range: [-60, -10],
      },
    },
    //     yaxis: {
    //       title: 'Percent',
    //       showline: false
    //     },

    margin: {
      l: 0,
      r: 0,
      b: 0,
      t: 0,
    },

    width: "1500",
    height: "1500",
  };

  Plotly.newPlot("myDiv", data, layout);
  Plotly.newPlot("myDivLower", data, layout2);
});
