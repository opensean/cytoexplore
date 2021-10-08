<template>
  <v-container id="cy" fluid class="fill-height">
  </v-container>
</template>

<script>
  import cytoscape from 'cytoscape';
  import nodeHtmlLabel from 'cytoscape-node-html-label';
  import ApexCharts from "apexcharts";
  import dagre from 'cytoscape-dagre';
  import sixNodeDagre from '@/js/examples';
  
  cytoscape.use(dagre);
  nodeHtmlLabel( cytoscape );

  export default {
    name: 'cytoexplore',

    data: () => ({
      cyConfig: sixNodeDagre,
      nData: sixNodeDagre.elements.nodes.reduce(function(obj, x) {
           obj[x.data.id] = x.data;
           return obj;
         }, {}),
      cy: null,
      resolve: null,
      reject: null

    }),

    mounted: function(){
      // Select the node that will be observed for mutations
      const targetNode = document.getElementById('cy');
      
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true };

      const observer = new MutationObserver(this.filterEvents);
      observer.observe(targetNode, config);

      //cytoscape config
      this.cyConfig.container = document.getElementById('cy'); // container to render in
      //canvas
      var cyCanvas = cytoscape(this.cyConfig);
      cyCanvas.viewport({zoom:0.75});
      cyCanvas.center();
      //cy.layout({ name: 'klay'}).run()
      cyCanvas.nodeHtmlLabel([
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
                  if(node.id && node.id.startsWith("cyExRenderNode-")){
                    this.renderPlot(node.id);
                  }
                }
            }
         }
       },

       renderPlot: function(id) {
         // filter nodes to fetch data
         //console.log("rendering plot for " + id.split("renderNodePlot-")[1]);
         // use the result of id.split("renderNodePlot-") to find node data in elements
         //console.log(this.cy.$id(id.split("cyExRenderNode-")[0]));
         //console.log(this.cyConfig.elements.nodes);

         var options1 = {
                chart: {
                  width: 250,
                  type: "radialBar",
                },
                //fetch series from node data 
                series: this.nData[id.split("cyExRenderNode-")[1]].series,
                plotOptions: {
                  radialBar: {
                    dataLabels: {
                      total: {
                        show: true,
                        label: id.split("cyExRenderNode-")[1]
                      }
                    }
                  }
                },
                labels: ['TEAM A', 'TEAM B', 'TEAM C', 'TEAM D']
          };
          return new ApexCharts(document.getElementById(id), options1).render();
      },
 
    },

    updated: function(){

    }

  }
</script>
