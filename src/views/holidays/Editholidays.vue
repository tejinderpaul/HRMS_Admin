<template>
  <div class="container-fluid">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Edit Holiday</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3">Date<span class="text-danger">*</span></CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="date"
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

            <CRow>
              <CCol class="col-sm-3">Note</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <textarea
                    type="password"
                    placeholder="write note....."
                    v-model="holidays.note"
                    class="form-control"
                  :class="{
                      'is-invalid': validationStatus($v.holidays.note),
                    }"
                  />
                      <div
                    v-if="!$v.holidays.note.required"
                    class="invalid-feedback"
                  >
                    Note field is required.
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
export default {
  name: "create-admin-user",
  data() {
    return {
      errors: "",
      id: 0,
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
      occasion_name: { required },
      note: { required },
    },
  },
  created() {
    this.id = this.$route.params.id;
    this.getholiday();
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
        holiday_id: this.$route.params.id,
        occasionDate: this.holidays.occasion_date,
        occasion: this.holidays.occasion_name,
        note: this.holidays.note,
      };
      this.submittoserver(holidays);
    },
    submittoserver(data) {
      axios
        .post("http://192.168.1.20:4000/holidays/update_holiday", data)
        .then((res) => {
          router.go(-1);
        });
    },
    getholiday() {
      axios
        .post("http://192.168.1.20:4000/holidays/holiday", { id: this.id })
        .then((data) => (this.holidays = data.data.data));
    },
  },
};
</script>