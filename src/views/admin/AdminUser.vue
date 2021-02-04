<template>
  <div class="container" style="background-color: white">
    <div class="text-center">
      <h1>All Admin Users List</h1>

      <router-link
        :to="{
          name: 'create-admin-user',
        }"
        class="btn btn-md btn-primary"
        style="float: right; margin-bottom: 10px"
        >Create Admin User</router-link
      >
      <!-- <div v-if="adminUsers.length === 0">
        <h2>No records found at the moment</h2>
      </div> -->
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
              <CButton
                v-on:click="deleteadminuser(row._id, 0)"
                block
                variant="outline"
                color="danger"
                >Delete</CButton
              >
            </template>
          </div>
        </div>
      </span>
      <span slot="last_login" slot-scope="{ row }">
        {{ date(row.last_login) }}
      </span>
    </v-client-table>
  </div>
</template>

<script>
import Vue from "vue";
import router from "../../router";
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
      columns: ["name", "email", "phone", "role", "last_login", "action"],
      tableData: [],
      options: {
        sortable: ["name", "email", "phone", "role"],
        filterable: ["name", "email", "phone", "role"],
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
    this.axios
      .post("http://localhost:3000/adminuser/getalladminuser")
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

    deleteadminuser(id, index) {
      if (confirm("Are you sure you want to delete this admin?"))
        axios
          .get("http://127.0.0.1:3000/adminuser/deleteadminuser/" + id)
          .then((resp) => {
            router.go("/");
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
/* .VueTables__search-field {
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
.VueTables__heading{
  float: left;
}
</style>