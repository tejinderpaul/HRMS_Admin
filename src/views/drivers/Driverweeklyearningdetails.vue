<template>
  <div class="container-fluid" v="earning">
    <div class="text-center">
      <h1>Weekly Earning</h1>
    </div>
    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Trip Id</th>
            <th scope="col">Pickup Address</th>
            <th scope="col">Drop Address</th>
            <th scope="col">Fare</th>
            <th scope="col">Distance</th>
            <th scope="col">Payment Method</th>
            <th scope="col">BookingOn</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="earning in earning" :key="earning._id">
            <td>{{ earning.booking_prifix + earning.booking_trip_count }}</td>
            <td>{{ earning.pickup_address }}</td>
            <td>{{ earning.destination_address }}</td>
            <td>{{ earning.net_fare }}</td>
            <td>{{ parseFloat(earning.distance).toFixed(2) }}</td>
            <td v-if="earning.pay_method == 1">Cash</td>
            <td v-else>Online</td>

            <td>{{ new Date(earning.booking_on) }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      earning: [],
      showModal: false,
    };
  },
  created() {
    this.driver_id = this.$route.params.driver_id;
    this.startdate = this.$route.params.startdate;
    this.enddate = this.$route.params.enddate;
    this.fetchDriverEarning(this.driver_id, this.startdate, this.enddate);
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    fetchDriverEarning(id) {
      axios
        .post("http://127.0.0.1:3000/drivers/weekly_booking_details", {
          driver_id: this.driver_id,
          startdate: this.startdate,
          enddate: this.enddate,
        })
        .then((res) => (this.earning = res.data.data));
    },
  },
};
</script>