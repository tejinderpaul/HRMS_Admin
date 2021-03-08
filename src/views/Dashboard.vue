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
              name: 'attendence-view',
            }"
            block
            variant="outline"
            class="btn1"
            ><strong>View Details</strong>
          </CButton>
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
              name: 'requestedleaves',
            }"
            block
            variant="outline"
            class="btn1"
            ><strong>View Details</strong>
          </CButton>
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
import config from "@/config";
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
    if (localStorage.getItem("data") === null) {
      console.log("sdsfcwdfcsd")
      this.$router.push("/login");
    }
    let user = JSON.parse(localStorage.getItem("data"));
    this.userId = user._id;
    this.token=user.token
    
  },
  mounted() {
      axios
        .post(
          `${config.apiUrl}/user/dashboard`,
          { id: this.userId },
          {
            headers: {
              token: this.token,
            },
          }
        )
        .then(
          (data) => {
            console.log(data.data.statusCode);
            if(data.data.statusCode==401){
               this.$router.push("/login")
            }
            (this.employees = data.data.user),
            (this.pendingleaves = data.data.pendingleaves),
            (this.rejectleaves = data.data.rejectleaves)
          }
        );
    },
  };
</script>
<style>
.bg-info  {
    height : 158px;
}
.bg-warning {
height : 158px;
}
.btn1 {
  color: #fff;
  text-align: right;
}
</style>