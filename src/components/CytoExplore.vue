<template>
    <v-container id="cy" fluid class="fill-height">
    </v-container>
</template>

<script>
  import cytoscape from 'cytoscape';
  import nodeHtmlLabel from 'cytoscape-node-html-label';
  import ApexCharts from "apexcharts";
  import dagre from 'cytoscape-dagre';
  import SixNodeDagreRadialBar from '@/examples/sixNodeDagreRadialBar';
  import SixNodeDagreRadialGauge from '@/examples/sixNodeDagreRadialGauge';
  
  cytoscape.use(dagre);
  nodeHtmlLabel( cytoscape );

  export default {
    name: 'cytoexplore',

    data: () => ({
      examples: [SixNodeDagreRadialBar, SixNodeDagreRadialGauge],
      selection: SixNodeDagreRadialBar,
      cyEx: new SixNodeDagreRadialBar(),
      nData: null,
      cy: null,
      resolve: null,
      reject: null
      

    }),


    mounted: function(){

     this.nData = this.cyEx.graph.elements.nodes.reduce(function(obj, x) {
           obj[x.data.id] = x.data;
           return obj;
         }, {});

      // Select the node that will be observed for mutations
      const targetNode = document.getElementById('cy');
      
      // Options for the observer (which mutations to observe)
      const config = { attributes: true, childList: true, subtree: true };

      const observer = new MutationObserver(this.filterEvents);
      observer.observe(targetNode, config);
       console.log(this.cyEx);
      //cytoscape config
      this.cyEx.graph.container = document.getElementById('cy'); // container to render in
      //canvas
      var cyCanvas = cytoscape(this.cyEx.graph);
      cyCanvas.viewport({zoom:0.75});
      cyCanvas.center();
      //cy.layout({ name: 'klay'}).run()
      cyCanvas.nodeHtmlLabel(
        this.cyEx.nodeHtmlLabelOptions
      );
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
           return new ApexCharts(document.getElementById(id), this.nData[id.split("cyExRenderNode-")[1]].options).render();
      },
 
    },

    updated: function(){

    }

  }
</script>
