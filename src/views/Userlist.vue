<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All Employees</h1>
    <div class="VueTables__limit-field w-25 float-right mt-0">
      <label for="VueTables__limit_6JR1w mb-0">Filter:</label
      ><select
        @change="onChange($event.target.value)"
        id="VueTables__limit_6JR1w"
        class="form-control"
      >
        <option selected value="all">All</option>
        <option value="hr">HR</option>
        <option value="admin">Admin</option>
        <option value="teamlead">Team Lead</option>
        <option value="employee">Employee</option>
        <option value="manager">Manager</option>
      </select>
    </div>

    <v-client-table :data="tableData" :columns="columns" :options="options">
      <!-- <span slot="status" slot-scope="{ row }">
        <td>
          <a v-if="row.is_verified == 0">Waiting for Approvel</a>
          <a v-if="row.is_verified == 1">Approved</a>
          <a v-if="row.is_verified == 2">Blocked</a>
        </td>
      </span> -->
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 2px">
            <template>
              <CButton
                class="m-1"
                :to="{
                  name: 'user-view',
                  params: { id: row._id },
                }"
                block
                variant="outline"
                color="success"
                style="width:100px"
                >View</CButton
              >
              <CButton class="m-1 " block variant="outline" color="danger" style="width:100px">
                <a
                  v-if="row.status == true"
                  href="javascript:;"
                  style="width:100px"
                  v-on:click="BlockUser(row._id, 0)"
                  >Block</a
                >
                <a
                  v-if="row.status == false"
                  href="javascript:;"
                  style="width:100px"
                  v-on:click="UnblockUser(row._id, 0)"
                  >Unblock</a
                >
              </CButton>
            </template>
          </div>
        </div>
      </span>
      <span slot="name" slot-scope="{ row }">
        {{ row.firstname }}
      </span>
      <span slot="address" slot-scope="{ row }">
        {{ row.address.city }},{{ row.address.state }},{{
          row.address.country
        }},{{ row.address.pincode }}
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
      columns: ["name", "email", "address", "phonenumber", "role", "action"],
      tableData: [],
      options: {
        headings: {
          name: "Name",
          role:"Role",
        },
        sortable: ["name","email", "phonenumber", "status"],
        filterable: ["firstname","email","phonenumber"],
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
    this.axios.post("http://192.168.1.20:4000/user/alluser").then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    BlockUser(id, index) {
      if (confirm("Are you sure you want to Block this customer?"))
        axios
          .post("http://192.168.1.20:4000/user/blockuser", { id: id })
          .then((resp) => {
            console.log(resp);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    UnblockUser(id, index) {
      if (confirm("Are you sure you want to activate this customer?"))
        axios
          .post("http://127.0.0.1:4000/user/Unblock", { id: id })
          .then((resp) => {
            console.log(resp);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    onChange(event) {
      axios
        .post("http://127.0.0.1:4000/user/filteremployee",{role: event})
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
.VueTables__search-field {
  margin-bottom: -80px;
}
.VueTables__limit {
  float: right;
}
.VueTables__search-field {
  margin-bottom: 1px;
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