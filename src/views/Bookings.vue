<template>
  <div class="container" style="background-color: white;">
    <h1 class="text-center">All Bookings List</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
             
                  <CButton
                    :to="{
                      name: 'booking-view',
                      params: { id: row._id },
                    }"
                    block
                    variant="outline"
                    color="dark"
                    >View</CButton
                  >
            </template>
          </div>
        </div>
      </span>
      <span slot="booking_on" slot-scope="{ row }"> 
  
             {{date(row.booking_on)}}

      </span> 
    </v-client-table>
  </div>
</template>

<script>
import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import axios from "axios";
import VueAxios from "vue-axios";
import router from "../router";
Vue.use(VueAxios, axios);
Vue.use(ClientTable);
export default {
  components: {
    ClientTable,
  },
  data() {
    return {
      columns: [
        "booking_prifix",
        "pickup_address",
        "destination_address",
        "driver_name",
        "truck_no",
        "net_fare",
        "truck_no",
        "booking_on",
        "action",
      ],
      tableData: [],
      options: {
        sortable: [
          "booking_prifix",
          "pickup_address",
          "destination_address",
          "driver_name",
          "truck_no",
          "net_fare",
          "truck_no",
        ],
        filterable: [
          "booking_prifix",
          "pickup_address",
          "destination_address",
          "driver_name",
          "truck_no",
          "net_fare",
          "truck_no",
        ],
      },
    };
  },
  mounted() {
    this.axios
      .get("http://localhost:3000/adminuser/allbooking")
      .then((res) => {
        this.tableData = res.data.data;
      });
  },
  methods: {
    date(utc) {
      var date = new Date(utc);
      date.toString()
      return date
    },
  },
};
</script>

<style>
#app {
  width: 95%;
  margin-top: 50px;
}
.VuePagination {
  text-align: center;
}
.vue-title {
  text-align: center;
  margin-bottom: 10px;
}
.vue-pagination-ad {
  text-align: center;
}
.glyphicon.glyphicon-eye-open {
  width: 16px;
  display: block;
  margin: 0 auto;
}
th:nth-child(3) {
  text-align: center;
}
.VueTables__child-row-toggler {
  width: 16px;
  height: 16px;
  line-height: 16px;
  display: block;
  margin: auto;
  text-align: center;
}
.VueTables__child-row-toggler--closed::before {
  content: "+";
}
.VueTables__child-row-toggler--open::before {
  content: "-";
}
/* .VueTables__search-field{
  margin-bottom: -80px;

} */
.VueTables__limit {
  float: right;
}
.VueTables__search-field {
  margin-bottom: 1px;
}
.VueTables__search {
  display: inline-table;
}
</style>