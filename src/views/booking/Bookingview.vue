<template>
  <div v="booking">
    <div class="card">
      <div class="card-header">
        <h1>
          {{ booking.booking_prifix + booking.booking_trip_count }} Booking
          Details
        </h1>
        <h4 class="text-right mt-20">
          <small>
            <button
              class="btn btn-success"
              v-on:click="navigate()"
              style="margin-top: -53px"
            >
              View All Booking
            </button>
          </small>
        </h4>
      </div>
    </div>

    <!-- first -->
    <div v="booking">
      <div class="card-header" style="text-align: center">
        <h1>Booking Details</h1>
      </div>
      <table id="w0" class="table table-striped table-bordered detail-view">
        <tbody>
          <tr>
            <th>Trip Id</th>
            <td style="text-transform: capitalize">
              {{ booking.booking_prifix }}{{ booking.booking_trip_count }}
            </td>
          </tr>
          <tr>
            <th>Pickup Address</th>
            <td style="text-transform: capitalize">
              {{ booking.pickup_address }}
            </td>
          </tr>
          <tr>
            <th>Drop Address</th>
            <td>{{ booking.destination_address }}</td>
          </tr>
          <tr>
            <th>Fare</th>
            <td>{{ booking.net_fare }}</td>
          </tr>
          <tr>
            <th>Distance</th>
            <td>{{ parseFloat(booking.distance).toFixed(2) }}</td>
          </tr>
          <tr>
            <th>Pickup Person Name</th>
            <td>{{ booking.pickup_name }}</td>
          </tr>
          <tr>
            <th>Pickup Person Phone No.</th>
            <td>{{ booking.pickup_phone }}</td>
          </tr>
          <tr>
            <th>Destination Person Name</th>
            <td>{{ booking.destination_name }}</td>
          </tr>
          <tr>
            <th>Destination Person Phone No.</th>
            <td>{{ booking.destination_phone }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Second  -->
    <div v="customer">
      <div class="card-header" style="text-align: center">
        <h1>Customer Details</h1>
        <div v-if="customer === []">
          <h2>No Customer data found at the moment</h2>
        </div>
      </div>
      <table id="w0" class="table table-striped table-bordered detail-view">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td style="text-transform: capitalize">
              {{ customer.first_name + " " + customer.last_name }}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href="mailto:Customer">{{ customer.email }}</a>
            </td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{{ customer.phone_number }}</td>
          </tr>
          <tr>
            <th>Requirement</th>
            <td>{{ customer.requirement }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- third  -->
    <div v="driver">
      <div class="card-header" style="text-align: center">
        <h1>Driver Details</h1>
        <div v-if="driver === 0">
          <h2>No Driver data found at the moment</h2>
        </div>
      </div>
      <table id="w0" class="table table-striped table-bordered detail-view">
        <tbody>
          <tr>
            <th>Full Name</th>
            <td style="text-transform: capitalize">
              {{ driver.first_name + " " + driver.last_name }}
            </td>
          </tr>
          <tr>
            <th>Email</th>
            <td>
              <a href="mailto:Driver">{{ driver.email }}</a>
            </td>
          </tr>
          <tr>
            <th>Phone Number</th>
            <td>{{ driver.phone_number }}</td>
          </tr>
          <tr>
            <th>Address</th>
            <td>{{ driver.address }}</td>
          </tr>
          <tr>
            <th>City</th>
            <td>{{ driver.city }}</td>
          </tr>
          <tr>
            <th>State</th>
            <td>{{ driver.state }}</td>
          </tr>
          <tr>
            <th>Postal Code</th>
            <td>{{ driver.postal_code }}</td>
          </tr>
          <tr>
            <th>Last Active On</th>
            <td>{{ new Date(driver.last_login) }}</td>
          </tr>
          <tr>
            <th>Notification</th>
            <td>{{ driver.is_notification }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Fourth  -->
    <div v="vehicle">
      <div class="card-header" style="text-align: center">
        <h1>Vehicle Details</h1>
        <div v-if="vehicle == []">
          <h2>No vehicle data found at the moment</h2>
        </div>
      </div>
      <table id="w0" class="table table-striped table-bordered detail-view">
        <tbody>
          <tr>
            <th>Vehicle Name</th>
            <td style="text-transform: capitalize">
              {{ vehicle.truck_name }}
            </td>
          </tr>
          <tr>
            <th>Vehicle RC No.</th>
            <td>
              {{ vehicle.truck_rc }}
            </td>
          </tr>
          <tr>
            <th>Vehicle Number</th>
            <td>{{ vehicle.truck_no }}</td>
          </tr>
          <tr>
            <th>Vehicle Size</th>
            <td>{{ vehicle.truck_size }}</td>
          </tr>
          <tr>
            <th>Vehicle Capacity</th>
            <td>{{ vehicle.truck_capacity }}</td>
          </tr>
          <tr>
            <th>Vehicle Colour</th>
            <td>{{ vehicle.truck_colour }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- Enddddddddddddddddddddddddddddddddddd  -->
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
      booking: [],
      customer: [],
      driver: [],
      vehicle: [],
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getBookingDetails(this.id);
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    getBookingDetails() {
      axios
        .get(`http://127.0.0.1:3000/adminuser/bookingdetails/${this.id}`)
        .then((response) => {
          this.booking = response.data.bookingdata;
          this.customer = response.data.customerdata;
          this.driver = response.data.driverdata;
          this.vehicle = response.data.vehicledata;
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