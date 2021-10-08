// examples.js
const sixNodeDagre = {
  elements: {
     nodes:[
       { data: { id: 'a', series: [10, 30.2, 90.9, 50.5]} },
       { data: { id: 'b', series: [10, 30.2, 34.5, 65.5]} },
       { data: { id: 'c', series: [10, 30.2, 78.4, 50.5]} },
       { data: { id: 'd', series: [10, 15, 45.9, 50.5]} },
       { data: { id: 'e', series: [10, 30.2, 45.9, 85.8]} },
       { data: { id: 'f', series: [10, 30.2, 70.8, 50.5]} },
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

export default sixNodeDagre
