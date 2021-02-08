<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All Leaves List</h1>
    <!-- <div class="VueTables__limit-field w-25 float-right mt-0">
      <label for="VueTables__limit_6JR1w mb-0">Filter:</label
      ><select
        @change="onChange($event.target.value)"
        id="VueTables__limit_6JR1w"
        class="form-control"
      >
        <option value="1">All Customers</option>
        <option value="2">Active Customers</option>
        <option value="3">Deactive Customers</option>
      </select>
    </div> -->
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <!-- <span slot="status" slot-scope="{ row }">
        <td>
          <a v-if="row.status == true">Active</a>
          <a v-if="row.status == false">Deactive</a>
        </td>
      </span> -->

      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
              <CButton
                class="m-1"
                block
                variant="outline"
                color="success"
                v-on:click="approve(row._id, 0)"
                >Approve
              </CButton>
              <CButton
                class="m-1"
                block
                variant="outline"
                color="success"
                v-on:click="reject(row._id, 0)"
                >Reject
              </CButton>
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
        "name",
        "leaveType",
        "fromDate",
        "toDate",
        "note",
        "mangerName",
        "status",
        "action",
      ],
      tableData: [],
      options: {
        headings: {
          name: "Name",
        },
        sortable: ["first_name", "last_name", "email", "phone_number"],
        filterable: ["first_name", "email", "phone_number"],
        texts: {
          filterPlaceholder: "Enter Name/ Number/ Email",
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
    this.axios.post("http://127.0.0.1:4000/leaves/alleaves").then((res) => {
      console.log(res);
      this.tableData = res.data.data;
    });
  },
  methods: {
    approve(id, index) {
      if (confirm("Are you sure you want to Block this customer?"))
        axios
          .post("http://127.0.0.1:4000/leaves/approve", { id: id })
          .then((resp) => {
            console.log(resp);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    reject(id, index) {
      if (confirm("Are you sure you want to activate this customer?"))
        axios
          .post("http://127.0.0.1:4000/user/reject", { id: id })
          .then((resp) => {
            console.log(resp);
            window.location.reload();
          })
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
  position: absolute;

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
.VueTables__row span td {
  border: none;
}
.VueTables__row span td a {
  padding: 8px;
}
.VueTables__row td {
  padding: 5px;
}
.VueTables__heading {
  float: left;
}
select {
  -webkit-appearance: menulist;
}
</style>