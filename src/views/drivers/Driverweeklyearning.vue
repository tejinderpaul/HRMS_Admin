<template>
  <div class="container-fluid" v="earning">
    <div class="text-center">
      <h1>Weekly Earning</h1>
    </div>
    <div class="">
      <table class="table table-bordered">
        <thead class="thead-dark">
          <tr>
            <th scope="col">Start Week Date</th>
            <th scope="col">End Week Date</th>
            <th scope="col">Earning</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="earning in earning" :key="earning._id">
            <td>{{ new Date(earning.startdate) }}</td>
            <td>{{ new Date(earning.enddate) }}</td>
            <td>{{ earning.earning }}</td>
            <td>
              <CButton
                v="id"
                :to="{
                  name: 'driver-weekly-earning-details',
                  params: {
                    driver_id: id,
                    startdate: earning.startdate,
                    enddate: earning.enddate,
                  },
                }"
                block
                variant="outline"
                color="dark"
                >View</CButton
              >
            </td>
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
    this.id = this.$route.params.id;
    this.fetchDriverEarning(this.id);
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    fetchDriverEarning(id) {
      axios
        .post("http://127.0.0.1:3000/drivers/weekly_booking", { id: this.id })
        .then(
          (res) => (
            (this.earning = res.data.data), (this.id = this.$route.params.id)
          )
        );
    },
  },
};
</script>