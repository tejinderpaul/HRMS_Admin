<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>Attendance Records</h2></strong>
      </CCardHeader>
      <CCardBody>
        <CForm @submit.prevent="submitForm">
          <CRow>
            <CCol class="col-sm-3">Date</CCol>
            <CCol sm="3">
              <span>from<span class="text-danger">*</span></span>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  v-model="date.fromDate"
                  :class="{
                    'is-invalid': validationStatus($v.date.fromDate),
                  }"
                />
                <div v-if="!$v.date.fromDate.required" class="invalid-feedback">
                  From date is required.
                </div>
              </div>
            </CCol>

            <CCol sm="3">
              <span>To<span class="text-danger">*</span></span>
              <div class="form-group">
                <input
                  type="date"
                  class="form-control"
                  v-model="date.toDate"
                  :class="{
                    'is-invalid': validationStatus($v.date.toDate),
                  }"
                />
                <div v-if="!$v.date.toDate.required" class="invalid-feedback">
                  To date is required.
                </div>
              </div>
            </CCol>
          </CRow>

          <CCardFooter>
            <CButton
              v-if="
                user.role == 'employee' ||
                user.role == 'teamlead' ||
                user.role == 'manager'
              "
              type="submit"
              class="btn btn btn-success"
              style="margin-left: 50%"
            >
              Submit</CButton
            >
            <CButton
              v-if="
                user.role == 'superadmin' ||
                user.role == 'admin' ||
                user.role == 'hr'
              "
              type="submit"
              :to="{
                name: 'employeeattendance',
                params: { from: date.fromDate, to: date.toDate },
              }"
              class="btn btn btn-success"
              style="margin-left: 50%"
            >
              Submit</CButton
            >
          </CCardFooter>
        </CForm>
      </CCardBody>
    </CCard>

    <div class="container" style="background-color: white">
      <div class="text-center">
        <h1>Attendence List</h1>
      </div>
      <table
        v-if="time"
        id="w0"
        class="table table-striped table-bordered detail-view"
      >
        <tbody>
          <tr>
            <th>Employee Id</th>
            <td>{{ user._id }}</td>
          </tr>
          <tr>
            <th>Name</th>
            <td>{{ user.firstname }} {{ user.lastname }}</td>
          </tr>
          <tr>
            <th>Hours</th>
            <td>{{ time.hours }}</td>
          </tr>
          <tr>
            <th>Minutes</th>
            <td>{{ time.minutes }}</td>
          </tr>
          <tr>
            <th>Second</th>
            <td>{{ time.seconds }}</td>
          </tr>
          <tr>
            <th>Milisecond</th>
            <td>{{ time.milliseconds }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import axios from "axios";
import router from "../router";
import config from "@/config";
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
Vue.use(ClientTable);
export default {
  name: "apply-leave",
  data() {
    return {
      time: "",
      user: "",
      errors: "",
      date: {
        fromDate: "",
        toDate: "",
      },
      options: [],
      submitted: false,
    };
  },
  validations: {
    date: {
      fromDate: { required },
      toDate: { required },
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("data"));
    this.userId = this.user._id;
    if (localStorage.getItem("data") === null) {
      this.$router.push("/login");
    }
  },
  methods: {
    validationStatus: function (validation) {
      return typeof validation != "undefined" ? validation.$error : false;
    },
    submitForm() {
      this.$v.$touch();
      if (this.$v.$pendding || this.$v.$error) return;
      let date = {
        id: this.userId,
        from: this.date.fromDate,
        to: this.date.toDate,
      };
      this.submittoserver(date);
    },
    submittoserver(data) {
      axios.post(`${config.apiUrl}/user/attendence`, data).then((res) => {
        this.time = res.data.data.time;
        this.user = res.data.data.user;
      });
    },
  },
};
</script>
