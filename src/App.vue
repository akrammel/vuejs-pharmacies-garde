<template>
<div id="app">
    <b-navbar fixed="top" type="light" variant="light">
      <b-navbar-brand class="title">vuejs-pharmacies-garde</b-navbar-brand>
    </b-navbar>
    <b-container style="margin-top: 100px;margin-bottom: 100px;">
    <h1>Pharmacies de garde Algérie</h1>
    <b-row class="justify-content-md-center">
      <b-col md="6">
        <b-row>
          <b-col md="12" class="text-center">
            <b-form-group class="text-left">
              <label>Choisir la wilaya</label>
              <b-form-select @change="chargercommunes" v-model="wilayaChosis">
                <b-form-select-option v-for="(option, index) in wilayas" v-bind:key="index" v-bind:value="option.id">
                  {{ option.wilaya }}
                </b-form-select-option>
              </b-form-select>
            </b-form-group>
          </b-col>
          <b-col md="12" class="text-left">
            <label>Choisir la où les communes</label>
            <div class="btn-grp">
            <b-button @click="checkAll" variant="primary" v-if="communesnow.length != 0">Tout chocher</b-button>
            <b-button @click="uncheckAll" variant="outline-primary" v-if="communesnow.length != 0">Tout décohocher</b-button>
            </div>
              <b-form-group>
                <b-form-checkbox-group
                  v-model="communesChoisis"
                >
                <b-form-checkbox
                 v-for="(option, index) in communesnow" v-bind:key="index" v-bind:value="option.id"
              >
                {{option.commune}}
              </b-form-checkbox>
                </b-form-checkbox-group>
              </b-form-group>
        </b-col>
        <!--<b-col md="12" class="text-center"><b-button variant="outline-primary" style="width: 100%">Envoyer</b-button></b-col>-->
        </b-row>
      </b-col>
      <b-col md="6">
        <Pharmacies v-if="wilayaChosis.length != 0 && communesChoisis.length != 0" :wilaya="wilayaChosis" :communes="communesChoisis"/>
      </b-col>  
    </b-row>
  </b-container>
<footer class="text-center">
  <div class="row h-100">
    <div class="col-sm-12 my-auto">
        <span>©{{year}} <a href="https://github.com/akrammel">akrammel</a> tous droits réservés</span>
    </div>
  </div>
</footer>
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
      wilayaChosis: "16",
      communesChoisis: [],
      year: ""

    }
  },created () {
    this.year = new Date().getFullYear(); 
    axios
      .get('../../wilayas.json')
      .then(response => (this.wilayas = response.data));
    axios
      .get('../../communes.json')
      .then(response => (this.communes = response.data)).then(this.chargercommunes);
  },mounted () {

  }
  ,methods: {
    chargercommunes: function () {
      this.communesChoisis = [];
      var s = [];
      var w = "";
      this.wilayas.forEach(element => {
        if(element.id == this.wilayaChosis){
          w = element.wilaya;
      }
      });
      this.communes.forEach(element => {
        if(element.wilaya == w){
          s.push({commune: element.commune, id: element.id})
      }
      this.communesnow = s;
      });  
    },
    checkAll: function () {
      var s = [];
      var w = "";
      this.wilayas.forEach(element => {
        if(element.id == this.wilayaChosis){
          w = element.wilaya;
      }
      });
      this.communes.forEach(element => {
        if(element.wilaya == w){
          s.push(element.id)
      }
      this.communesChoisis = s;
      });  
    },
    uncheckAll: function(){
      this.communesChoisis = []
    }
  }
}
</script>

<style>
.title {
  font-size: 16px;
}
.navbar-brand {
  margin-right: auto!important;
  margin-left: auto!important;
}
.custom-control-inline {
  margin-right: 15px!important;
  margin-bottom: 5px!important;
  font-size: 14px!important;
  line-height: 1.8!important;
}
.btn-grp {
  margin-bottom: 15px;
}
.btn-grp > button {
  margin-right: 10px!important;
}
body {
  font-size: 16px!important;
}
table > tbody {
  font-size: 14px!important;
  text-transform: uppercase!important;
}
footer {
  position: fixed!important;
  bottom: 0;
  background-color: #f8f9fa;
  height: 40px;
  width: 100%;
  font-size: 12px!important;
}
</style>
