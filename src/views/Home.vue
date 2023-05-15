<template>
  <div class="root d-flex" id="home-page">
    <h1>Strona domowa</h1>
    <!--<SourceSelection v-on:sourceChanged="sourceChanged"></SourceSelection>!-->
    <News v-bind:source="source"></News>


  </div>
</template>

<script>
import News from "@/components/News";
//import SourceSelection from "@/components/SourceSelection";


export default {
  name: "Home",
  components: {
    News,
    //SourceSelection
  },
  data() {
    return {
      source: '',
    };
  },
  methods: {
    sourceChanged: function sourcechanged(source) {
      this.source = source;
    },
  },
};

</script>

<style scoped>
#home-page {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  /*margin-top: 60px;*/
}
</style>
