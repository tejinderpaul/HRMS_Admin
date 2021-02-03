<template>
  <div v="customer">
    <div class="card">
      <div class="card-header">
        <h1>Customer Details</h1>
        <h4 class="text-right mt-20">
          <small>
            <button
              class="btn btn-success"
              v-on:click="navigate()"
              style="margin-top: -53px"
            >
              View All Customers
            </button>
          </small>
        </h4>
      </div>
      <div class="card-body row">
        <div class="col-md-4">
          <img
            src=""
            onerror="this.onerror=null;this.src='https://www.maxpixel.net/static/photo/640/Elderly-Serious-Grandmother-Woman-Old-Aged-156097.png';"
            style="width: 200px"
          />
        </div>
        <div class="col-md-4">
          <h4 style="text-transform: Uppercase">
            <CIcon name="cil-user" /><b> {{ customer.first_name }}</b>
          </h4>
          <h4><CIcon name="cil-user" /> {{ customer.phone_number }}2</h4>
          <h4><CIcon name="cil-user" /> {{ customer.email }}</h4>
        </div>
        <div class="col-md-4">
          <p class="">
            <button
              class="btn btn-sm btn btn-danger"
              data-confirm="Are you sure you want to block this Customer?"
              data-method="post"
              disabled
              v-on:click="deleteCustomer(customer._id)"
              style="vertical-align: inherit; text-transform: capitalize"
            >
              Block
            </button>
            <button
              class="btn btn-sm btn btn-danger"
              data-confirm="Are you sure you want to delete this item?"
              v-on:click="deleteCustomer(customer._id)"
              style="
                margin: 10px;
                vertical-align: inherit;
                text-transform: capitalize;
              "
            >
              Delete
            </button>
          </p>
        </div>
      </div>
      <div class="customer-view">
        <div class="row">
          <div class="col-md-2">
            <img class="pull-left img-responsive" src="NA" alt="" />
          </div>
        </div>
        <table id="w0" class="table table-striped table-bordered detail-view">
          <tbody>
            <tr>
              <th>Full Name</th>
              <td style="text-transform: capitalize">
                {{ customer.first_name }}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:Jhonny@cbb.gkkl">{{ customer.email }}</a>
              </td>
            </tr>
            <tr>
              <th>Phone Number</th>
              <td>{{ customer.phone_number }}</td>
            </tr>
            <tr>
              <th>Address</th>
              <td>{{ customer.phone_number }}</td>
            </tr>
            <tr>
              <th>City</th>
              <td>{{ customer.phone_number }}</td>
            </tr>
            <tr>
              <th>State</th>
              <td>{{ customer.phone_number }}</td>
            </tr>
            <tr>
              <th>Postal Code</th>
              <td>{{ customer.phone_number }}</td>
            </tr>
            <tr>
              <th>Last Active On</th>
              <td>{{ new Date(customer.last_login) }}</td>
            </tr>
            <tr>
              <th>Notification</th>
              <td>{{ customer.is_notification }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="card">
      <div class="card-header" style="text-align: center">
        <h1>Booking Details</h1>
        <div v-if="history.length === 0">
          <h2>No Booking found at the moment</h2>
        </div>
      </div>
      <div class="">
        <table class="table table-bordered">
          <thead class="thead-dark">
            <tr>
              <th scope="col">Trip ID</th>
              <th scope="col">Pickup Address</th>
              <th scope="col">Drop Address</th>
              <th scope="col">Driver Name</th>
              <th scope="col">Truck No.</th>
              <th scope="col">Fare</th>
              <th scope="col">Distance</th>
              <th scope="col">BookingOn</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="history in history" :key="history._id">
              <td>
                {{ history.booking_prifix }}{{ history.booking_trip_count }}
              </td>
              <td>{{ history.pickup_address }}</td>
              <td>{{ history.destination_address }}</td>
              <td>{{ history.driver_name }}</td>
              <td>{{ history.truck_no }}</td>
              <td>{{ history.net_fare }}</td>
              <td>{{ history.distance }}</td>
              <td>{{ new Date(history.booking_on) }}</td>
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
// import LoginVue from "../pages/Login.vue";
export default {
  name: "customer-view",
  data() {
    return {
      customer: [],
      history: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getCustomer(this.id);
  },
  methods: {
    getCustomer() {
      axios
        .get(`http://127.0.0.1:3000/adminuser/getcustomer/${this.id}`)
        .then((response) => {
          this.customer = response.data.data;
          this.history = response.data.history;
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