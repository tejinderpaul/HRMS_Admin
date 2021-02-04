<template>
  <div v="driver">
    <div class="card">
      <div class="card-header">
        <h1>Driver Details</h1>
        <h4 class="text-right mt-20">
          <small>
            <button
              class="btn btn-success"
              v-on:click="navigate()"
              style="margin-top: -53px"
            >
              View All Drivers
            </button>
          </small>
        </h4>
      </div>
      <div class="card-body row">
        <div class="col-md-4">
          <img
            src="https://demo-res.cloudinary.com/image/upload/sample.png"
            style="width: 200px"
          />
        </div>
        <div class="col-md-4">
          <h4 style="text-transform: Uppercase">
            <CIcon name="cil-user" /><b> {{ driver.first_name }}</b>
          </h4>
          <h4><CIcon name="cil-user" /> {{ driver.phone_number }}2</h4>
          <h4><CIcon name="cil-user" /> {{ driver.email }}</h4>
        </div>
        <div class="col-md-4">
          <p class="">
            <router-link
              :to="{
                path: 'driver-weekly-earning/' + driver._id,
                name: 'driver-weekly-earning',
              }"
              class="btn btn-md btn btn-success"
              style="vertical-align: inherit; text-transform: capitalize"
              >{{ driver.first_name }} Weekly Earnings</router-link
            >
            &nbsp;&nbsp;&nbsp;
            <a
              href="javascript:;"
              class="btn btn-md btn-danger"
              style="margin: 5px"
              v-on:click="deleteDriverDocument(driver._id, 0)"
              >Delete Driver</a
            >
            <a
              v-if="driver.is_verified == 2 || driver.is_verified == 0"
              href="javascript:;"
              class="btn btn-md btn-primary"
              v-on:click="ApproveDriver(driver._id, 0)"
              >Approve</a
            >
            <a
              v-if="driver.is_verified == 1"
              href="javascript:;"
              class="btn btn-md btn-danger"
              v-on:click="BlockDriver(driver._id, 0)"
              >Block</a
            >
          </p>
        </div>
      </div>
      <div class="driver-view">
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
                {{ driver.first_name }}
              </td>
            </tr>
            <tr>
              <th>Email</th>
              <td>
                <a href="mailto:#">{{ driver.email }}</a>
              </td>
            </tr>
            <tr>
              <th>Country Code</th>
              <td>{{ driver.country_code }}</td>
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
              <th>Document Verified</th>
              <td v-if="driver.is_document_verified == 1"><b>Yes</b></td>
              <td v-else><b>No</b></td>
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
    </div>
    <div class="card">
      <div class="card-header">
        <h1>Documents</h1>
      </div>
      <div class="card-body">
        <a
          v-if="driver.is_document_verified == 0"
          href="javascript:;"
          class="btn btn-sm btn-primary"
          v-on:click="ApproveDriverDocument(driver._id, 0)"
          >Approve Documents</a
        >

        <ul>
          <img
            class="image"
            v-for="(image, i) in images"
            :key="i"
            :src="image"
            @click="index = i"
          />
          <vue-gallery-slideshow
            :images="images"
            :index="index"
            @close="index = null"
          ></vue-gallery-slideshow>
        </ul>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h1>Booking Details</h1>
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
            <tr v-for="booking in booking" :key="booking._id">
              <td>
                {{ booking.booking_prifix }}{{ booking.booking_trip_count }}
              </td>
              <td>{{ booking.pickup_address }}</td>
              <td>{{ booking.destination_address }}</td>
              <td>{{ booking.driver_name }}</td>
              <td>{{ booking.truck_no }}</td>
              <td>{{ parseFloat(booking.net_fare).toFixed(2) }}</td>
              <td>{{ parseFloat(booking.distance).toFixed(2) }}</td>
              <td>{{ new Date(booking.booking_on) }}</td>
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
import LoginVue from "../pages/Login.vue";
import VueGallerySlideshow from "vue-gallery-slideshow";
export default {
  name: "driver-view",
  components: {
    VueGallerySlideshow,
  },
  data() {
    return {
      driver: [],
      files: [],
      booking: [],
      images: [],
      last_login: [],
      index: null,
    };
  },
  created() {
    this.id = this.$route.params.id;
    this.getDriver(this.id);
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    onClick(i) {
      this.index = i;
    },
    getDriver() {
      axios
        .get(`http://127.0.0.1:3000/drivers/getDriverDetails/${this.id}`)
        .then((response) => {
          this.driver = response.data.data;
          this.files = response.data.files;
          this.booking = response.data.booking;
          this.images = response.data.filesArr;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    ApproveDriver(id, index) {
      if (confirm("Are you sure you want to approve this driver?"))
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
      if (confirm("Are you sure you want to block this driver?"))
        axios
          .get("http://127.0.0.1:3000/drivers/rejectDriver/" + id)
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    navigate() {
      router.go(-1);
    },
    ApproveDriverDocument(id, index) {
      if (confirm("are you sure?"))
        axios
          .get("http://127.0.0.1:3000/drivers/approveDriverDocuments/" + id)
          .then((resp) => {
            window.location.reload();
          })
          .catch((error) => {
            console.log(error);
          });
    },
    deleteDriverDocument(id, index) {
      if (confirm("are you sure?"))
        axios
          .get("http://127.0.0.1:3000/drivers/deleteDriverDocuments/" + id)
          .then((resp) => {
            router.go(-1);
          })
          .catch((error) => {
            console.log(error);
          });
    },
  },
};
</script>
<style scoped>
body {
  font-family: sans-serif;
}

.image {
  width: 100px;
  height: 100px;
  background-size: contain;
  cursor: pointer;
  margin: 10px;
  border-radius: 3px;
}
</style>