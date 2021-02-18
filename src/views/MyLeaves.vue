<template>
  <div class="container" style="background-color: white">
    <h1 class="text-center">All Leaves List</h1>
    <div class="VueTables__limit-field w-25 float-right mt-0">
      <label for="VueTables__limit_6JR1w mb-0">Filter:</label
      ><select
        @change="onChange($event.target.value)"
        id="VueTables__limit_6JR1w"
        class="form-control"
      >
        <option value="all">All Leaves</option>
        <option value="0">Pending Leaves</option>
        <option value="1">Approved Leaves</option>
        <option value="2">Rejected Leaves</option>
      </select>
    </div>
    <v-client-table :data="tableData" :columns="columns" :options="options">
      <span slot="status" slot-scope="{ row }">
        <td>
          <p v-if="row.status == 0">Pending</p>
          <p v-if="row.status == 1">Approved</p>
          <p v-if="row.status == 2">Rejected</p>
        </td>
      </span>

      <span slot="action" slot-scope="{ row }" >
        <div class="d-flex justify-content-between align-items-center">
          <div class="btn-group" style="margin-bottom: 1px">
            <template>
              <CButton
                class="m-1"
                block
                variant="outline"
                color="success"
                :disabled="row.status == 2&&1 "
                v-on:click="approve(row._id)"
                >Approve
              </CButton>

              <CButton
                class="m-1"
                block
                variant="outline"
                color="success"
                :disabled="row.status == 2&&1"
                v-on:click="reject(row._id)"
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
import config from "@/config";
import router from "../router";

Vue.use(VueAxios, axios);
Vue.use(ClientTable);
export default {
  components: {
    ClientTable,
  },
  data() {
    return {
      user:"",
      columns:"",
      tableData: [],
      options: {
        headings: {
          name: "Name",
          leaveType: "Subject",
          fromDate: "From",
          toDate: "To",
          mangerName: "Email TO",
        },
        sortable: ["name", "leaveType", "phone_number"],
        filterable: ["name", "leaveType", "mangerName"],
        texts: {
          filterPlaceholder: "Enter Name/ Number/ MangerName",
        },
      },
    };
  },
  created() {
   
     // this.tableData = [];
    this.user = JSON.parse(localStorage.getItem("data"));
    this.token = this.user.token;
     if((this.user.role=="admin")||(this.user.role=="superadmin")){
      this.columns =[
        "name",
        "leaveType",
        "fromDate",
        "toDate",
        "note",
        "mangerName",
        "status",
       "action",
      ];
    }else{
      this.columns =[
        "name",
        "leaveType",
        "fromDate",
        "toDate",
        "note",
        "mangerName",
        "status",
      ];
    }
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  mounted() {
    let options = {
      method: "post",
      url: `${config.apiUrl}/leaves/myall_leaves`,
      headers: {
        token: this.token,
      },
    };
    this.axios.post(`${config.apiUrl}/leaves/myall_leaves`,{"userId":this.user._id}, {
      headers: {
        token: this.token,
      }
    }
    ).then((res) => {
      this.tableData = res.data.data;
    });
  },
  methods: {
    approve(id) {
      if (confirm("Are you sure you want to Approve this leave?"))
        axios
          .post(
            `${config.apiUrl}/leaves/approve`,
            { id: id },
            {
              headers: {
                token: this.token,
              },
            }
          )
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {});
    },
    reject(id) {
      if (confirm("Are you sure you want to Reject this leave?"))
        axios
          .post(
            `${config.apiUrl}/leaves/reject`,
            { id: id },
            {
              headers: {
                token: this.token,
              },
            }
          )
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {});
    },
    onChange(event) {
      axios
        .post(
          `${config.apiUrl}/leaves/filterleave`,
          { status: event },
          {
            headers: {
              token: this.token,
            },
          }
        )
        .then((res) => (this.tableData = res.data.data))
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