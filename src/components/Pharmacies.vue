<template>
  <div class="row h-100 text-center">
    <div class="col-sm-12 my-auto">
      <b-spinner
        style="width: 5rem; height: 5rem;"
        class="align-middle"
        v-if="result.length == 0"
        variant="primary"
        type="grow"
        label="Chargement.."
      ></b-spinner>
      <b-table-simple v-else responsive style="margin-bottom: 50px;">
        <b-thead>
          <b-tr>
            <b-th>Date</b-th>
            <b-th>Heure</b-th>
            <b-th>Commune</b-th>
            <b-th>Pharmacien</b-th>
            <b-th>Adresse</b-th>
          </b-tr>
        </b-thead>
        <b-tbody>
          <b-tr v-for="(item, index) in result" v-bind:key="index">
            <b-td width="100">{{item[0]}}</b-td>
            <b-td width="100">{{item[1]}}</b-td>
            <b-td>{{item[2]}}</b-td>
            <b-td>{{item[3]}}</b-td>
            <b-td>{{item[4]}}</b-td>
          </b-tr>
        </b-tbody>
      </b-table-simple>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: "Pharmacies",
  props: {
    wilaya: String,
    communes: Array
  },
  data: function() {
    return {
      result: []
    };
  },
  created() {
    var result = [];
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    today = dd + "-" + mm + "-" + yyyy;
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/http://www.sante.gov.dz/garde/garde.php",
        qs.stringify({
          wilay2: this.wilaya,
          valide: "true",
          wil: "true",
          options: this.communes
        }),
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" }
        }
      )
      .then(function(response) {
        let doc = new DOMParser().parseFromString(response.data, "text/html");
        let tbody = doc.body.querySelectorAll("tbody")[3];
        let trs = tbody.querySelectorAll("tr");
        trs.forEach(element => {
          var r = [];
          if (element.querySelectorAll("td")[0].textContent.trim() == today) {
            element.querySelectorAll("td").forEach(td => {
              r.push(td.textContent.trim().replace("\\", ""));
            });
          }
          if (r.length != 0) {
            result.push(r);
            r = [];
          }
        });
      })
      .then(this.result = result)
  }
};
</script>

<style scoped>
</style>
