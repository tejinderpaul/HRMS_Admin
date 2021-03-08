<template>
  <div v="user">
    <div class="card">
      <div class="card-header">
        <h1>Employee Details</h1>
        <h4 class="text-right mt-20">
          <small>
            <button
              class="btn btn-success"
              v-on:click="navigate()"
              style="margin-top: -53px"
            >
              View All Users
            </button>
          </small>
        </h4>
      </div>
      <div class="card-body row">
        <div class="col-md-4">
          <img
            src=""
            onerror="this.onerror=null;this.src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmvxg0chV2I5KAJXiA5_85VpSCeMwaiQe0CA&usqp=CAU';"
            style="width: 200px"
          />
        </div>
        <div class="col-md-4">
          <h4 style="text-transform: Uppercase">
            <CIcon name="cil-user" /><b> {{ user.firstname }}</b>
          </h4>
          <h4><CIcon name="cil-user" /> {{ user.phonenumber }}</h4>
          <h4><CIcon name="cil-user" /> {{ user.email }}</h4>
        </div>
        <!-- <div class="col-md-4">
          <p class="">
            <a
              v-if="user.status == true"
              href="javascript:;"
              class="btn btn-sm btn-primary"
              v-on:click="Deactivateuser(user._id, 0)"
              >Deactivate</a
            >
            <a
              v-if="user.status == false"
              href="javascript:;"
              class="btn btn-sm btn-danger"
              v-on:click="Activateuser(user._id, 0)"
              >Activate</a
            >
            <button
              class="btn btn-sm btn btn-danger"
              data-confirm="Are you sure you want to delete this item?"
              v-on:click="deleteuser(user._id)"
              style="
                margin: 10px;
                vertical-align: inherit;
                text-transform: capitalize;
              "
            >
              Delete
            </button>
          </p>
        </div> -->
      </div>
      <div class="user-view">
        <div class="row">
          <div class="col-md-2">
            <img class="pull-left img-responsive" src="NA" alt="" />
          </div>
        </div>
        <table id="w0" class="table table-striped table-bordered detail-view">
          <tbody>
            <tr>
              <th>Employee ID</th>
              <td style="text-transform: capitalize">
                {{ user.employeeId }}
              </td>
            </tr>
            <tr>
              <th>Full Name</th>
              <td style="text-transform: capitalize">
                {{ user.firstname }} {{ user.lastname }}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                {{ user.email }}
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{{ user.phonenumber }}</td>
            </tr>
            <tr>
              <th>Gender</th>
              <td>{{ user.gender }}</td>
            </tr>
            <tr>
              <th>DOB</th>
              <td>{{ user.dob }}</td>
            </tr>
            <tr>
              <th>Marital Status</th>
              <td>{{ user.maritalStatus }}</td>
            </tr>
            <tr>
              <th>Role</th>
              <td>{{ user.role }}</td>
            </tr>
            <tr>
              <th>Department</th>
              <td>{{ user.department }}</td>
            </tr>
            <tr>
              <th>Designation</th>
              <td>{{ user.designation }}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{{ user.address.city }}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{{ user.address.state }}</td>
            </tr>
            <tr>
              <th>Country</th>
              <td>{{ user.address.country }}</td>
            </tr>
            <tr>
              <th>Pincode</th>
              <td>{{ user.address.pincode }}</td>
            </tr>
            <tr>
              <th>Date of joining</th>
              <td>{{ user.dateOfRegistration.slice(0,10 ) }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header" style="text-align: center">
        <h1>Leaves Details</h1>
        <div v-if="leave.length === 0">
          <h2>No Leaves Applied</h2>
        </div>
      </div>
      <div class="">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Name</th>
              <th scope="col">From</th>
              <th scope="col">To</th>
              <th scope="col">Leave Type</th>
              <th scope="col">Assign To</th>
              <th scope="col">Note</th>
              <th scope="col">status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="leave in leave" :key="leave._id">
              <td>
                {{ leave.name }}
              </td>
              <td>{{ leave.fromDate.slice(0,10) }}</td>
              <td>{{ leave.toDate.slice(0, 10) }}</td>
              <td>{{ leave.leaveType }}</td>
              <td>{{ leave.mangerName }}</td>
              <td>{{ leave.note }}</td>
              <td>
                <p v-if="leave.status == 0">Pending</p>
                <p v-if="leave.status == 1">Approved</p>
                <p v-if="leave.status == 2">Rejected</p>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import config from "@/config";
// import LoginVue from "../pages/Login.vue";
export default {
  name: "user-view",
  data() {
    return {
      user: [],
      leave: [],
    };
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("data"));
    this.token = this.user.token;
    this.id = this.$route.params.id;
    this.getuser(this.id);
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    getuser() {
      axios
        .post(`${config.apiUrl}/user/userview/${this.id}`,{},
        {
              headers: {
                token: this.token,
              },
            }
            )
        .then((response) => {
          this.user = response.data.data;
          this.leave = response.data.leave;
          console.log(this.user);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    navigate() {
      router.go(-1);
    },
  },
};
</script>