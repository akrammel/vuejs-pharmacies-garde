<template>
<div id="app">
    <b-container class="bv-example-row">
    <b-row class="justify-content-md-center">
      <b-col md="6" class="text-center"><b-form-group><b-form-select v-model="wilayaChosis" :options="wilayas"></b-form-select></b-form-group></b-col>
      <b-col md="6" class="text-center"><b-form-group><b-form-select v-model="wilayaChosis" :options="wilayas"></b-form-select></b-form-group></b-col>
      <b-col md="12" class="text-center"><b-button variant="outline-primary" style="width: 100%">Button</b-button></b-col>
    </b-row>
  </b-container>
    <Pharmacies :wilaya="wilayaChosis" :communes="communesChoisis"/>
</div>
</template>

<script>
import Pharmacies from './components/Pharmacies.vue'
import axios from "axios";

export default {
  name: 'App',
  components: {
    Pharmacies
  },
  data: function () {
    return {
      wilayas: [],
      communes: [],
      wilayaChosis: "09",
      communesChoisis: ["0901"]

    }
  },created () {
    axios
      .get('../../wilayas.json')
      .then(response => (this.wilayas = response.data));
    axios
      .get('../../communes.json')
      .then(response => (this.communes = response.data));
  }
}
</script>

<style>

</style>
