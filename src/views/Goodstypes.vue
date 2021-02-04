<template>
  <div class="container" style="background-color: white">
    <div class="text-center">
      <h1>Goods Type List</h1>
      <router-link
        :to="{
          name: 'create-goods-types',
        }"
        class="btn btn-md btn-primary"
        style="float: right; margin-bottom: 10px"
        >Create Goods Type</router-link
      >
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
              <CButton
                class="m-1"
                :to="{
                  name: 'edit-goods-types',
                  params: { id: row._id },
                }"
                block
                variant="outline"
                color="success"
                >Edit</CButton
              >
              <CButton
                class="m-1"
                block
                variant="outline"
                color="danger"
                v-on:click="deleteGood(row._id, 0)"
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
      columns: ["title", "description","action"],
      tableData: [],
      options: {
        sortable: ["title", "description"],
        filterable: ["title", "description"],
        texts: {
          filterPlaceholder: "Enter Title/ Description",
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
    this.axios.post("http://127.0.0.1:3000/goodstype/allgoods").then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    deleteGood(id, index) {
      if (confirm("Are you sure you want to delete this item?"))
        axios
          .delete("http://127.0.0.1:3000/goodstype/deletegoods/" + id)
          .then((resp) => {
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