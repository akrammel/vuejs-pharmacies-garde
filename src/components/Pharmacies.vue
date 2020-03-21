<template>
  <div>
      
  </div>
      
</template>

<script>
import axios from "axios";
import qs from "qs";

export default {
  name: 'Pharmacies',
  props: {
    wilaya: String,
    communes: Array
  },
  data: function () {
    return {
      result: []
    }
  },
  created(){
    axios.post('https://cors-anywhere.herokuapp.com/http://www.sante.gov.dz/garde/garde.php', qs.stringify({
          wilay2: this.wilaya,
          valide: 'true',
          wil: 'true',
          options: this.communes
        }),{
          headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        })
        .then(function (response) {
          var result = [];
          let doc = new DOMParser().parseFromString(response.data, 'text/html');
          let tbody = doc.body.querySelectorAll('tbody')[3];
          let trs = tbody.querySelectorAll('tr');
          (trs).forEach(element => {
            var r = [];
            element.querySelectorAll('td').forEach(td => {
              r.push(td.textContent)
            });
            result.push(r);
            r = [];
          });
          console.log(result);

        });
  }
}
</script>

<style scoped>

</style>
