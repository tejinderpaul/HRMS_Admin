<template>
  <div class="container">
    <div class="text-center">
      <CCard>
        <CCardHeader>
          <strong><h2>Send Email</h2></strong>
        </CCardHeader>
        <CCardBody>
          <CForm @submit.prevent="submitForm">
            <CRow>
              <CCol class="col-sm-3">Subject</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Enter subject"
                    v-model="user.subject"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.subject.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.subject.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.subject.required"
                      >Email Subject is required</span
                    >
                  </div>
                </div>
              </CCol>
            </CRow>

            <CRow>
              <CCol class="col-sm-3">Email Body</CCol>
              <CCol sm="9">
                <div class="form-group">
                  <textarea
                    type="text"
                    placeholder="Enter Email Body"
                    v-model="user.body"
                    horizontal
                    rows="9"
                    class="form-control"
                    :class="{
                      'is-invalid': submitted && $v.user.body.$error,
                    }"
                  />
                  <div
                    v-if="submitted && $v.user.body.$error"
                    class="invalid-feedback"
                  >
                    <span v-if="!$v.user.body.required">Email Body is required</span>
                  </div>
                </div>
              </CCol>
            </CRow>

            <CCardFooter>
              <CButton type="submit" class="btn btn btn-success"
                ><CIcon name="cil-check-circle" /> Send</CButton
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
  name: "complaint-reply-view",
  data() {
    return {
      errors: "",
      user: {
        subject: "",
        body: "",
      },
      submitted: false,
    };
  },
  validations: {
    user: {
      subject: { required },
      body: { required },
    },
  },
  created() {
    this.id = this.$route.params.id;
    // this.getAdminUsers();
  },
  methods: {
    submitForm(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let user = {
        subject: this.user.subject,
        body: this.user.body,
      };
      this.submittoserver(user);
    },
    submittoserver(data) {
      axios
        .post(`http://localhost:3000/query/complaintreply/${this.id}`, data)
        .then((res) => {
          console.log(res);
          router.go(-1);
        });
    },
  },
};
</script>