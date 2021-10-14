// sixNodeDagreRadialGauge.js

class SixNodeDagreRadialGauge {

  //constructor(graph, nodeHtmlLabelOptions) {
  constructor() {
    this.nodeHtmlLabelOptions = [
        {
          query: 'node', // cytoscape query selector
          halign: 'center', // title vertical position. Can be 'left',''center, 'right'
          valign: 'center', // title vertical position. Can be 'top',''center, 'bottom'
          halignBox: 'center', // title vertical position. Can be 'left',''center, 'right'
          valignBox: 'center', // title relative box vertical position. Can be 'top',''center, 'bottom'
          cssClass: '', // any classes will be as attribute of <div> container for every title
          tpl(data) {
            return '<div id="cyExRenderNode-' + data.id +'"></div>'
          }
        }
      ];

    this.graph = {
      elements: {
        nodes:[
          {data: {
             id: 'a',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          },
          {data: {
             id: 'b',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          },
          {data: {
             id: 'c',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          },
          {data: {
             id: 'd',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          },
          {data: {
             id: 'e',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          },
          {data: {
             id: 'f',
             options:
             {
               chart: {
                 height: 280,
                 type: "radialBar",
               },

               series: [67],
               colors: ["#20E647"],
               plotOptions: {
                 radialBar: {
                   hollow: {
                     margin: 0,
                     size: "70%",
                     background: "#293450"
                   },
                   track: {
                     dropShadow: {
                       enabled: true,
                       top: 2,
                       left: 0,
                       blur: 4,
                       opacity: 0.15
                     }
                   },
                   dataLabels: {
                     name: {
                       offsetY: -10,
                       color: "#fff",
                       fontSize: "13px"
                     },
                     value: {
                       color: "#fff",
                       fontSize: "30px",
                       show: true
                     }
                   }
                 }
               },
               fill: {
                 type: "gradient",
                 gradient: {
                   shade: "dark",
                   type: "vertical",
                   gradientToColors: ["#87D4F9"],
                   stops: [0, 100]
                 }
               },
               stroke: {
                 lineCap: "round"
               },
               labels: ["Progress"]
             }
           }
          }

        ],
        edges:[
        {data: {id: 'ab', source: 'a', target: 'b'}},
        {data: {id: 'ac', source: 'a', target: 'c'}},
        {data: {id: 'bd', source: 'b', target: 'd'}},
        {data: {id: 'cf', source: 'c', target: 'f'}},
        {data: {id: 'ce', source: 'c', target: 'e'}}
        ]
     },
    style: [ // the stylesheet for the graph
      {
        selector: 'node',
        style: {
          'background-color': '#666',
        }
      },

      {
        selector: 'edge',
        style: {
          'width': 3,
          'line-color': '#ccc',
          'target-arrow-color': '#ccc',
          'target-arrow-shape': 'triangle',
          'curve-style': 'bezier'
        }
      }
    ],
    layout: {
      name: 'dagre',
      spacingFactor: 3,
      rankDir: "LR"
    }
  }
}
}

export default SixNodeDagreRadialGauge;
