<template>
  <div>
    <CCard>
      <CCardHeader>
        <strong><h2>My Attendance Records</h2></strong>
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

          <CRow>
            <CCol>
              <CButton
                type="submit"
                class="btn btn btn-success"
                style="margin-left: 50%"
                >Submit</CButton
              >
            </CCol>
          </CRow>
        </CForm>
      </CCardBody>
    </CCard>

    <div class="container" style="background-color: white">
      <div class="text-center">
        <h1>Attendence List</h1>
      </div>
      <v-client-table :data="tableData" :columns="columns" :options="options">
      </v-client-table>
    </div>
  </div>
</template>


<script>
import Vue from "vue";
import { ClientTable } from "vue-tables-2";
import axios from "axios";
import router from "../router";
import { required, email, numeric, minLength } from "vuelidate/lib/validators";
Vue.use(ClientTable);
export default {
  name: "apply-leave",
  data() {
    return {
      columns: ["hours", "description", "action"],
      tableData: [],
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
    let user = JSON.parse(localStorage.getItem("data"));
    this.userId = user._id;
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
      console.log("dgdgdg", data);
      axios
        .post("http://192.168.1.20:4000/user/attendence", data)
        .then((res) => {
          this.tableData = res.data.data;
          console.log("dsfvsdfbdfb",this.tableData);
        });
    },
  },
};
</script>