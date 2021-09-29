<template>
  <v-container id="cy" fluid class="fill-height">
  </v-container>
</template>

<script>
  import cytoscape from 'cytoscape';
  import nodeHtmlLabel from 'cytoscape-node-html-label';
  import ApexCharts from "apexcharts";
  import dagre from 'cytoscape-dagre';
  
  cytoscape.use(dagre);
  nodeHtmlLabel( cytoscape );

  export default {
    name: 'HelloWorld',

    data: () => ({
      cy: null,
    }),
    mounted: function(){
      // Select the node that will be observed for mutations
      const targetNode = document.getElementById('cy');
      
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true };

      const observer = new MutationObserver(this.filterEvents);
      observer.observe(targetNode, config);

      var cy = cytoscape({

        container: document.getElementById('cy'), // container to render in
        elements: {
           nodes:[
             { data: { id: 'a', value: 70, value2: 50} },
             { data: { id: 'b', value: 90, value2: 50} },
             { data: { id: 'c', value: 90, value2: 50} },
             { data: { id: 'd', value: 90, value2: 50} },
             { data: { id: 'e', value: 90, value2: 50} },
             { data: { id: 'f', value: 90, value2: 50} },
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

      });
      cy.viewport({zoom:0.75});
      cy.center();
      //cy.layout({ name: 'klay'}).run()
      cy.nodeHtmlLabel([
        {
          query: 'node', // cytoscape query selector
          halign: 'center', // title vertical position. Can be 'left',''center, 'right'
          valign: 'center', // title vertical position. Can be 'top',''center, 'bottom'
          halignBox: 'center', // title vertical position. Can be 'left',''center, 'right'
          valignBox: 'top', // title relative box vertical position. Can be 'top',''center, 'bottom'
          cssClass: '', // any classes will be as attribute of <div> container for every title
          tpl(data) {
            return '<div id="renderNodePlot-' + data.id +'"></div>'
          }
        }
      ]);
    },

    methods: {
      //filterEvents: function (mutationsList, observer) {
      filterEvents: function (mutationsList) {
        for(const mutation of mutationsList) {
            //console.log(mutation);
            if (mutation.type === 'childList') {
                //console.log('A child node has been added or removed.');
                for(const node of mutation.addedNodes){
                  if(node.id && node.id.startsWith("renderNodePlot-")){
                    this.renderPlot(node.id);
                  }
                }
            }
         }
       },
       renderPlot: function(id) {
         //console.log("rendering plot for " + id.split("renderNodePlot-")[1]);
         // use the result of id.split("renderNodePlot-") to find node data in elements
         var options1 = {
                chart: {
                  width: 200,
                  type: "radialBar",
                },
                series: [67, 84, 97, 61],
                plotOptions: {
                  radialBar: {
                    dataLabels: {
                      total: {
                        show: true,
                        label: id.split("renderNodePlot-")[1]
                      }
                    }
                  }
                },
                labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
          };
          return new ApexCharts(document.getElementById(id), options1).render();
      }
    },

    updated: function(){

    }

  }
</script>
