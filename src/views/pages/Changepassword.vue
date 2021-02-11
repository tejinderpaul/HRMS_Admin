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
                  <h4>Change Password</h4>
                  <div class="form-group">
                    <input
                      v-model="user.password"
                      placeholder="Enter current password"
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
                        >OTP is required</span
                      >
                    </div>
                  </div>
                  <!-- ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ -->
                  <div class="form-group">
                    <input
                      type="password"
                      v-model="user.newpassword"
                      id="newpassword"
                      name="newpassword"
                      placeholder="New Password"
                      class="form-control"
                      :class="{
                        'is-invalid': submitted && $v.user.newpassword.$error,
                      }"
                    />
                    <div
                      v-if="submitted && $v.user.newpassword.$error"
                      class="invalid-feedback"
                    >
                      <span v-if="!$v.user.newpassword.required"
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
      admin: JSON.parse(localStorage.getItem("data")),
      user: {
        password: "",
        newpassword: "",
        confirmpassword: "",
      },
      submitted: false,
      error: "",
    };
  },
  validations: {
    user: {
      password: { required },
      newpassword: { required },
      confirmpassword: { required, sameAsPassword: sameAs("newpassword") },
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
        id: this.admin._id,
        password: this.user.password,
        newpassword: this.user.newpassword,
        confirmpassword: this.user.confirmpassword,
      };

      axios
        .post("http://192.168.1.20:4000/user/changepassword", user, {
          "Content-Type": "application/json",
        })
        .then((res) => {
          if (res.data.statusCode === 200) {
            localStorage.setItem("token", res.data.data.email);
            this.$router.push({ path: "/dashboard" });
          } else if (res.data.statusCode === 404) {
            this.error = res.data.message;
          }
        });
    },
  },
};
</script>
