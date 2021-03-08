<template>
  <div class="container" style="background-color: white">
    <div class="text-center">
      <loading :active="isLoading" :is-full-page="fullPage" :loader="loader" />
      <h1>All Employee Attendance List</h1>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="date" slot-scope="{ row }">
        {{ row.date }}
      </span>
      <span slot="firstname" slot-scope="{ row }">
        {{ row.user.firstname }}
      </span>
      <span slot="phonenumber" slot-scope="{ row }">
        {{ row.user.phonenumber }}
      </span>
      <span slot="time" slot-scope="{ row }">
        HH: {{ row.time.hours }} MM:{{ row.time.minutes }} SS:{{
          row.time.seconds
        }}
        MS:{{ row.time.milliseconds }}
      </span>
    </v-client-table>
  </div>
</template>

<script>
import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import axios from "axios";
import VueAxios from "vue-axios";
import config from "@/config";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";

Vue.use(VueAxios, axios);
Vue.use(ClientTable);
export default {
  components: {
    ClientTable,
    Loading,
  },
  data() {
    return {
      loader: "bars",
      isLoading: false,
      fullPage: true,
      columns: ["date", "firstname", "phonenumber", "time"],
      tableData: [],

      options: {
        headings: {
          firstname: "Name",
          phonenumber: "Phone number",
          time: "Time",
        },
        sortable: ["user.firstname", "user.phonenumber", "date"],
        filterable: ["user.firstname", "user.phonenumber", "date"],
        texts: {
          filterPlaceholder: "Enter text to search",
        },
      },
    };
  },
  created() {
    this.from = this.$route.params.from;
    this.to = this.$route.params.to;

    this.user = JSON.parse(localStorage.getItem("data"));
    this.token = this.user.token;
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    this.isLoading = true;
    this.axios
      .post(`${config.apiUrl}/user/allattendence`, {
        from: this.from,
        to: this.to,
      })
      .then((res) => {
        this.tableData = res.data.data;
        this.isLoading = false;
      });
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
.VueTables__heading {
  float: left;
}
</style>