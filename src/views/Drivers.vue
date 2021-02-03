<template>
  <div class="container" style="background-color: white;">
    <h1 class="text-center">All Drivers List</h1>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="status" slot-scope="{ row }">
        <td>
          <a
            v-if="row.is_verified == false"
            href="javascript:;"
            class="btn btn-sm btn-primary"
            v-on:click="ApproveDriver(row._id, 0)"
            >Approve</a
          >
          <a
            v-if="row.is_verified == true"
            href="javascript:;"
            class="btn btn-sm btn-danger"
            v-on:click="BlockDriver(row._id, 0)"
            >Block</a
          >
        </td>
      </span>
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
                      name: 'driver-view',
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
                    v-on:click="deletedriver(row._id)"
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
        "status",
        "action",
      ],
      tableData: [],
      options: {
        sortable: ["first_name", "last_name", "email", "phone_number", "status"],
        filterable: ["first_name", "email", "phone_number", "status"],
      },
    };
  },
  mounted() {
    this.axios
      .post("http://127.0.0.1:3000/drivers/alldrivers")
      .then((res) => {
        this.tableData = res.data.driver;
      });
  },
  methods: {
    ApproveDriver(id, index) {
      if (confirm("are you sure?"))
        axios
          .get("http://127.0.0.1:3000/drivers/approveDriver/" + id)
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    BlockDriver(id, index) {
      if (confirm("are you sure?"))
        axios
          .get("http://127.0.0.1:3000/drivers/rejectDriver/" + id)
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    onChange(event) {
      axios
        .get("http://127.0.0.1:3000/filterDriver/" + event)
        .then(
          (data) => (
            console.log(data.data.data), (this.drivers = data.data.data)
          )
        )
        .catch((error) => {
          console.log(error);
        });
    },
      deletedriver(id) {
      if (confirm("are you sure?"))
        axios
          .delete("http://localhost:3000/drivers/deleteDriverDocuments/" + id)
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
.VueTables__search-field{
  margin-bottom: -80px;

}
.VueTables__limit{
  float:right;
}
.VueTables__search-field{
  margin-bottom: 1px;
}
/* .VueTables__search{
  position:absolute;
} */
</style>