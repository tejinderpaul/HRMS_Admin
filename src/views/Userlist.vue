<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All User List</h1>
    <!-- <div class="VueTables__limit-field w-25 float-right mt-0">
      <label for="VueTables__limit_6JR1w mb-0">Filter:</label
      ><select
        @change="onChange($event.target.value)"
        id="VueTables__limit_6JR1w"
        class="form-control"
      >
        <option value="1">All Drivers</option>
        <option value="4">Blocked Drivers</option>
        <option value="2">Approved Drivers</option>
        <option value="3">Waiting For Approvel Drivers</option>
      </select>
    </div> -->

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
          <div class="btn-group" style="margin-bottom: 20px">
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
                >View</CButton
              >
              <CButton class="m-1" block variant="outline" color="success">
                <a
                  v-if="row.status == true"
                  href="javascript:;"
                  class="btn btn-sm btn-primary"
                  v-on:click="BlockUser(row._id, 0)"
                  >Block</a
                >
                <a
                  v-if="row.status == false"
                  href="javascript:;"
                  class="btn btn-sm btn-danger"
                  v-on:click="UnblockUser(row._id, 0)"
                  >UnBlock</a
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
      columns: ["name", , "email", "address", "phonenumber", "role", "action"],
      tableData: [],
      options: {
        headings: {
          name: "Name",
        },
        sortable: [
          "first_name",
          "last_name",
          "email",
          "phone_number",
          "status",
        ],
        filterable: ["first_name", "email", "phonenumber"],
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
    this.axios.post("http://127.0.0.1:4000/user/alluser").then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    BlockUser(id, index) {
      if (confirm("Are you sure you want to Block this customer?"))
        axios
          .post("http://127.0.0.1:4000/user/blockuser", { id: id })
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