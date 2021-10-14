// sixNodeDagreRadialBar.js

class SixNodeDagreRadialBar {

  //constructor(graph, nodeHtmlLabelOptions) {
  constructor() {
    this.nodeHtmlLabelOptions = [
        {
          query: 'node', // cytoscape query selector
          halign: 'center', // title vertical position. Can be 'left',''center, 'right'
          valign: 'center', // title vertical position. Can be 'top',''center, 'bottom'
          halignBox: 'center', // title vertical position. Can be 'left',''center, 'right'
          valignBox: 'top', // title relative box vertical position. Can be 'top',''center, 'bottom'
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
                   width: 250,
                   type: "radialBar",
                 },
                 series: [14, 37, 97, 86],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "a"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
           {data: { 
              id: 'b',
              options: 
              {
                 chart: {
                   width: 250,
                   type: "radialBar",
                 },
                 series: [10, 30.2, 90.9, 50.5],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "b"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
           {data: { 
              id: 'c',
              options: 
              {
                 chart: {
                   width: 250,
                   type: "radialBar",
                 },
                 series: [55, 30.2, 72, 99],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "c"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
           {data: { 
              id: 'd',
              options: 
              {
                 chart: {
                   width: 250,
                   type: "radialBar",
                 },
                 series: [100, 65, 24, 36],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "d"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
           {data: { 
              id: 'e',
              options: 
              {
                 chart: {
                   width: 250,
                   type: "radialBar",
                 },
                 series: [90, 20.2, 60.9, 75.5],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "e"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
           {data: { 
              id: 'f',
              options: 
              {
                 chart: {
                   width: 250,
                   type: "radialBar",
                 },
                 series: [20, 40.2, 70.9, 50.5],
                 plotOptions: {
                   radialBar: {
                     dataLabels: {
                       total: {
                         show: true,
                         label: "f"
                       }
                     }
                   }
                 },
                 labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
              }
            }
           },
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
}}

export default SixNodeDagreRadialBar
