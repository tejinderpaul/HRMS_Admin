<template>
  <div class="container" style="background-color: white;">
    <h1 class="text-center">All Customers List</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <!-- <span slot="status_type" slot-scope="{ row }"> -->
        <!-- <td>
          <a
            v-if="row.status == true"
            href="javascript:;"
            class="btn btn-sm btn-primary"
            v-on:click="DeactivateCustomer(row._id, 0)"
            >Deactivate</a
          >
          <a
            v-if="row.status == false"
            href="javascript:;"
            class="btn btn-sm btn-danger"
            v-on:click="ActivateCustomer(row._id, 0)"
            >Activate</a
          >
        </td> -->


  <!-- <template >
        <td>
          <CBadge :color="getBadge(row.status)">
            {{row.status}}
          </CBadge>
        </td>
      </template> 


      </span> -->
      <span slot="action" slot-scope="{ row }">
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 20px">
            <template>
              <CDropdown
                color="transparent p-0"
                placement="bottom-end"
                :caret="false"
              >
                <template #toggler-content>
                  <CIcon name="cil-list" />
                </template>
                <CDropdownItem>
                  <CButton
                    :to="{
                      name: 'customer-view',
                      params: { id: row._id },
                    }"
                    block
                    variant="outline"
                    color="dark"
                    >View</CButton
                  >
                </CDropdownItem>
                <CDropdownItem>
                  <CButton
                    block
                    variant="outline"
                    color="danger"
                    v-on:click="deleteCustomer(row._id, 0)"
                    >Delete</CButton
                  ></CDropdownItem
                >
              </CDropdown>
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
        "first_name",
        "last_name",
        "email",
        "country_code",
        "phone_number",
        "action",
      ],
      tableData: [],
      options: {
        sortable: ["first_name", "last_name", "email", "phone_number"],
        filterable: ["first_name", "email", "phone_number"],
      },
    };
  },
  mounted() {
    this.axios
      .post("http://127.0.0.1:3000/customers/allcustomers")
      .then((res) => {
        this.tableData = res.data.customers;
      });
  },
  methods: {
    deleteCustomer(id, index) {
      if (confirm("are you sure?"))
        axios
          .get("http://127.0.0.1:3000/adminuser/deletecustomer/" + id)
          .then((resp) => {
            router.go("/");
          })
          .catch((error) => {
            console.log(error);
          });
    },
    DeactivateCustomer(id, index) {
      if (confirm("are you sure?"))
        axios
          .post("http://127.0.0.1:3000/adminuser/deactivatecustomer/" + id)
          .then((resp) => {
            console.log(resp);
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    ActivateCustomer(id, index) {
      if (confirm("are you sure?"))
        axios
          .post("http://127.0.0.1:3000/adminuser/activatecustomer/" + id)
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
        .post("http://127.0.0.1:3000/adminuser/filterCustomer/" + event)
        .then((data) => (this.customers = data.data.data))
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
</style>