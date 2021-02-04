<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All Bookings List</h1>
    <div class="VueTables__limit-field w-25 float-right mt-0">
      <label for="VueTables__limit_6JR1w mb-0">Filter:</label
      ><select
        @change="onChange($event.target.value)"
        id="VueTables__limit_6JR1w"
        class="form-control"
      >
        <option value="1">All Bookings</option>
        <option value="2">Pending Bookings</option>
        <option value="3">Complete Bookings</option>
        <option value="4">Cancel By Driver</option>
        <option value="5">Cancel By Customer</option>
      </select>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="status" slot-scope="{ row }">
        <td>
          <a v-if="row.status == 1 || row.status == 2 || row.status == 3"
            >Pending</a
          >
          <a v-if="row.status == 4">Complete</a>
          <a v-if="row.status == 5">Cancel by driver</a>
          <a v-if="row.status == 6">cancel by customer</a>
        </td>
      </span>
      <span slot="booking_prifix" slot-scope="{ row }">
        {{ row.booking_prifix }}{{ row.booking_trip_count }}
      </span>
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
        {{ date(row.booking_on) }}
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
        "status",
        "booking_on",
        "action",
      ],
      tableData: [],
      options: {
        headings: {
          booking_prifix: "Booking Id",
          net_fare: "Fare Amount",
        },
        editableColumns: ["truck_no"],
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
          "pickup_address",
          "destination_address",
          "driver_name",
          "truck_no",
          "net_fare",
        ],
        texts: {
          filterPlaceholder: "Enter Name/ Truck No",
        },
      },
    };
  },
  created() {
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    let event = 1;
    this.axios
      .get("http://localhost:3000/adminuser/allbooking/" + event)
      .then((res) => {
        this.tableData = res.data.data;
      });
  },
  methods: {
    date(utc) {
      var date = new Date(utc);
      date.toString();
      return date;
    },
    onChange(event) {
      axios
        .get("http://localhost:3000/adminuser/allbooking/" + event)
        .then((data) => (this.tableData = data.data.data))
        .catch((error) => {
          console.log(error);
        });
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
.VueTables__limit-field label {
  margin: 0px;
}
.VueTables__search-field label {
  display: none;
}
.VueTables__search-field::before {
  content: "Search:";
  display: inherit;
}
.VueTables__heading{
  float: left;
}
select {
  -webkit-appearance: menulist;
}
</style>