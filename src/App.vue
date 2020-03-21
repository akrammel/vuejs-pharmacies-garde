<template>
<div id="app">
    <b-navbar type="light" variant="light">
      <b-navbar-brand class="title">Pharmacies de Garde <small>Algérie</small></b-navbar-brand>
    </b-navbar>

    <b-container style="margin-top: 50px;margin-bottom: 50px;">
    <b-row class="justify-content-md-center">
      <b-col md="6" style="margin-bottom: 50px;">
        <b-row>
          <b-col md="12" class="text-center"><b-form-group><b-form-select @change="chargercommunes" v-model="wilayaChosis" :options="wilayas"></b-form-select></b-form-group></b-col>
          <b-col md="12" class="text-left">
              <b-form-group>
                <b-form-checkbox-group
                  v-model="communesChoisis"
                  :options="communesnow"
                  
                ></b-form-checkbox-group>
              </b-form-group>
        </b-col>
        <b-col md="12" class="text-center"><b-button variant="outline-primary" style="width: 100%">Envoyer</b-button></b-col>
        </b-row>
      </b-col>
      <b-col md="6">
        <Pharmacies :wilaya="wilayaChosis" :communes="communesChoisis"/>
      </b-col>  
    </b-row>
  </b-container>
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
      communesnow: [],
      wilayaChosis: "",
      communesChoisis: []

    }
  },created () {
    axios
      .get('../../wilayas.json')
      .then(response => (this.wilayas = response.data));
    axios
      .get('../../communes.json')
      .then(response => (this.communes = response.data));
  },mounted () {

  }
  ,methods: {
    chargercommunes: function () {
      var s = [];
      this.communes.forEach(element => {
        if(element.wilaya == this.wilayaChosis){
          s.push(element.commune)
      }
      this.communesnow = s;
      });  
    }
  }
}
</script>

<style>
.title {
  font-size: 16px;
}
.title > small {
  font-size: 10px;
}
.navbar-brand {
  margin-right: auto!important;
  margin-left: auto!important;
}
.custom-control-inline {
  margin-right: 5px;
  margin-bottom: 5px;
  font-size: 14px!important;
  line-height: 1.8!important;
}
</style>
