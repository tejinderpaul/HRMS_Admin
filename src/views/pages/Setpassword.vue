<template>
  <div class="c-app flex-row align-items-center">
    <CContainer>
      <CRow class="justify-content-center">
        <CCol md="4">
          <CCardGroup>
            <CCard class="p-4">
              <CCardBody>
                <CForm @submit.prevent="onSubmit">
                  <div v-if="error" class="alert alert-danger" role="alert">
                    {{ error }}
                  </div>
                  <h4>Set new Password</h4>
                  <div class="form-group">
                    <input
                      v-model="user.otp"
                      placeholder="Enter OTP"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.otp.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.otp.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.otp.required">OTP is required</span>
                    </div>
                  </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.password"
                      id="password"
                      name="password"
                      placeholder="New Password"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.password.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.password.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.password.required"
                        >Password is required</span
                      >
                    </div>
                  </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.confirmpassword"
                      id="confirmpassword"
                      name="confirmpassword"
                      placeholder="Confirm Password"
                      class="form-control"
                      :class="{
                        'is-invalid':
                          submitted && $v.user.confirmpassword.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.confirmpassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.confirmpassword.required"
                        >Confirm Password is required</span
                      >
                      <span v-else-if="!$v.user.confirmpassword.sameAsPassword"
                        >New Password and Confirm Password don't match</span
                      >
                    </div>
                  </div>

                  <CRow>
                    <CCol col="6">
                      <CButton color="success" type="submit">Submit</CButton>
                    </CCol>
                  </CRow>
                </CForm>
              </CCardBody>
            </CCard>
          </CCardGroup>
        </CCol>
      </CRow>
    </CContainer>
  </div>
</template>

<script>
import axios from "axios";
import { required, sameAs } from "vuelidate/lib/validators";

export default {
  name: "Login",
  data() {
    return {
      user: {
        email: this.$route.query.param,
        otp: "",
        password: "",
        confirmpassword: "",
      },
      submitted: false,
      error: "",
    };
  },
  validations: {
    user: {
      otp: { required },
      password: { required },
      confirmpassword: { required, sameAsPassword: sameAs("password") },
    },
  },
  methods: {
    onSubmit(e) {
      this.submitted = true;
      // stop here if form is invalid
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      let user = {
        email: this.user.email,
        otp: this.user.otp,
        newpassword: this.user.password,
        confirmpassword: this.user.confirmpassword,
      };

      axios
        .post("http://192.168.1.20:4000/user/setnewpassword", user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          if (res.data.statusCode === 200) {
            localStorage.setItem("token", res.data.data.email);
            this.$router.push({ path: "/login" });
          } else if (res.data.statusCode === 404) {
            this.error = res.data.message;
          }
        });
    },
  },
};
</script>
