<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All Complaints List</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="created_on" slot-scope="{ row }">
        {{ date(row.created_on) }}
      </span>
      <span slot="type" slot-scope="{ row }">
        <p v-if="row.type == 1"><b>Complaint from Driver</b></p>
        <p v-else><b>Complaint from Customer</b></p>
      </span>
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
              <CButton
                class="m-1"
                :to="{
                  name: 'complaint-reply-view',
                  params: { id: row.id },
                }"
                block
                variant="outline"
                color="success"
                >View</CButton
              >
              <CButton
                class="m-1"
                block
                variant="outline"
                color="danger"
                v-on:click="deleteComplaint(row.id, 0)"
                >Delete</CButton
              >
            </template>
          </div>
        </div>
      </span>
    </v-client-table>
  </div>
</template>

<script>
import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);
Vue.use(ClientTable);
export default {
  components: {
    ClientTable,
  },
  data() {
    return {
      columns: [
        "title",
        "description",
        "name",
        "email",
        "customer",
        "driver",
        "type",
        "action",
      ],
      tableData: [],
      options: {
        sortable: [
          "title",
          "description",
          "bookingTo",
          "bookingFrom",
          "customer",
          "driver",
          "type",
        ],
        filterable: [
          "title",
          "description",
          "name",
          "email",
          "customer",
          "driver",
        ],
        texts: {
          filterPlaceholder: "Enter Name/ Title/ Email",
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
    this.axios.post("http://localhost:3000/query/get-all").then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    deleteComplaint(id, index) {
      if (confirm("Are you sure you want to delete this complaint?"))
        axios
          .get("http://127.0.0.1:3000/query/deletecomplaint/" + id)
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    date(utc) {
      var date = new Date(utc);
      date.toString();
      return date;
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
.VueTables__search-field {
  margin-bottom: -80px;
}
.VueTables__limit {
  float: right;
}
.VueTables__search-field {
  margin-bottom: 1px;
}
/* .VueTables__search{
  position:absolute;
} */
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
</style>