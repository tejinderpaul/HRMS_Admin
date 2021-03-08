<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Add Holidays</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3"
                >Date<span class="text-danger">*</span></CCol
              >
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="date"
                    max="9999-01-01"
                    v-model="holidays.occasion_date"
                    class="form-control"
                    :class="{
                      'is-invalid': validationStatus($v.holidays.occasion_date),
                    }"
                  />
                  <div
                    v-if="!$v.holidays.occasion_date.required"
                    class="invalid-feedback"
                  >
                    Date field is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Occasion Name</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter occasion"
                    v-model="holidays.occasion_name"
                    class="form-control"
                    :class="{
                      'is-invalid': validationStatus($v.holidays.occasion_name),
                    }"
                  />
                   <div
                    v-if="!$v.holidays.occasion_name.required"
                    class="invalid-feedback"
                  >
                    Occasion name field is required.
                  </div>
                </div>
              </CCol>
            </CRow>

            
            <CCardFooter>
              <CButton type="submit" class="btn btn btn-success"
                ><CIcon name="cil-check-circle" /> Submit</CButton
              >
            </CCardFooter>
          </CForm>
        </CCardBody>
      </CCard>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "../../router";
import { required } from "vuelidate/lib/validators";
import config from "@/config";
import VueSweetalert2 from "vue-sweetalert2";
import Vue from "vue";
// If you don't need the styles, do not connect
import "sweetalert2/dist/sweetalert2.min.css";
Vue.use(VueSweetalert2);
export default {
  name: "create-admin-user",
  data() {
    return {
      errors: "",
      holidays: {
        occasion_date: "",
        occasion_name: "",
        note: "",
      },
      submitted: false,
    };
  },
  validations: {
    holidays: {
      occasion_date: { required },
      occasion_name: { required }
    },
  },
  created() {
    this.user = JSON.parse(localStorage.getItem("data"));
    this.token = this.user.token;
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

      let holidays = {
        occasionDate: this.holidays.occasion_date,
        occasion: this.holidays.occasion_name,
      };
      this.submittoserver(holidays);
    },
    submittoserver(data) {
      axios
        .post(`${config.apiUrl}/holidays/add_holiday`, data,
        {
              headers: {
                token: this.token,
              },
            }
        )
        .then((res) => {
            Vue.swal.fire({
            toast: true,
            position: "top",
            icon: "success",
            title: "Holiday added successfully",
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
          });
          router.go(-2);
        });
    },
  },
};
</script>