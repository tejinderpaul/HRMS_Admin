<template>
  <div class="container" style="background-color: white">
    <CRow>
      <CCol sm="6" lg="3" v="customer">
        <CWidgetDropdown color="primary" header="Employees">
          <h1>{{ employees }}</h1>
          <template #footer>
            <CChartLineSimple
              pointed
              class="mt-3 mx-3"
              style="height: 70px"
              
              point-hover-background-color="primary"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="driver">
        <CWidgetDropdown color="info" header="Attendence">
          <CButton
                :to="{
                  name: 'attendence-view'
                }"
                block
                variant="outline"
                >Click Here </CButton
              >
          <template #footer>
            <CChartLineSimple
              pointed
              class="mt-3 mx-3"
              style="height: 85px"
           
              point-hover-background-color="info"
              :options="{ elements: { line: { tension: 0.00001 } } }"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="booking">
        <CWidgetDropdown color="warning" header="Remaining Leaves">
          <h1>{{ pendingleaves }}</h1>
          <template #footer>
            <CChartLineSimple
              class="mt-3"
              style="height: 70px"
              background-color="rgba(255,255,255,.2)"
              :options="{ elements: { line: { borderWidth: 2.5 } } }"
              point-hover-background-color="warning"
              label="Members"
              labels="months"
            />
          </template>
        </CWidgetDropdown>
      </CCol>
      <CCol sm="6" lg="3" v="complaint">
        <CWidgetDropdown color="danger" header="Requested Leaves">
          <CButton
                :to="{
                  name: 'requestedleaves'
                }"
                block
                variant="outline"
                >Click Here </CButton
              >
          <template #footer>
            <CChartBarSimple
              class="mt-3 mx-3"
              style="height: 57px"
              background-color="rgb(250, 152, 152)"
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
      employees: "",
      pendingleaves: "",
      rejectleaves: "",
    };
  },
  created() {
    let user = JSON.parse(localStorage.getItem("data"));
    this.userId = user._id;
    this.fetchCustomers();
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    fetchCustomers() {
      axios
        .post("http://192.168.1.20:4000/user/dashboard",{"userId":this.userId})
        .then(
          (data) => (
            (this.employees = data.data.user),
            (this.pendingleaves = data.data.pendingleaves),
            (this.rejectleaves = data.data.rejectleaves)
          )
        );
    },
  },
};
</script>