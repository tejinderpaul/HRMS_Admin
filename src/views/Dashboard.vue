<template>
  <div class="container" style="background-color: white;">
    <CRow>
      <CCol sm="6" lg="3" v="customer">
        <CWidgetDropdown color="primary" header="Customers" >
           <h1>{{customer}}</h1>
          <template #footer>
            <CChartLineSimple
              pointed
              class="mt-3 mx-3"
              style="height: 70px"
              :data-points="[65, 59, 84, 84, 51, 55, 40]"
              point-hover-background-color="primary"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="driver">
        <CWidgetDropdown color="info" header="Drivers">
          <h1>{{driver}}</h1>
          <template #footer>
            <CChartLineSimple
              pointed
              class="mt-3 mx-3"
              style="height: 70px"
              :data-points="[1, 18, 9, 17, 34, 22, 11]"
              point-hover-background-color="info"
              :options="{ elements: { line: { tension: 0.00001 } } }"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="booking" >
        <CWidgetDropdown color="warning" header="Bookings" >
          <h1>{{booking}}</h1>
          <template #footer>
            <CChartLineSimple
              class="mt-3"
              style="height: 70px"
              background-color="rgba(255,255,255,.2)"
              :data-points="[78, 81, 80, 45, 34, 12, 40]"
              :options="{ elements: { line: { borderWidth: 2.5 } } }"
              point-hover-background-color="warning"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="complaint">
        <CWidgetDropdown
          color="danger"
          header="Complaints"
        >
        <h1>{{complaint}}</h1>
          <template #footer>
            <CChartBarSimple
              class="mt-3 mx-3"
              style="height: 70px"
              background-color="rgb(250, 152, 152)"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
    </CRow>
  </div>
</template>
<script>
import axios from "axios";
import router from "../router";
import { CChartLineSimple, CChartBarSimple } from "../views/charts/index";
export default {
  components: { CChartLineSimple, CChartBarSimple },
  data() {
    return {
      customer: "",
      driver: "",
      booking: "",
      complaint: ""
    };
  },
  created() {
    this.fetchCustomers();
  },
  methods: {
    fetchCustomers() {
      axios
        .get("http://127.0.0.1:3000/adminuser/dashboard")
        .then((data) => (
          this.customer = data.data.customer,
          this.driver = data.data.driver,
          this.booking = data.data.booking,
          this.complaint = data.data.complaint
          ));
    },
  },
};
</script>